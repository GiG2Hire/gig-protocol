// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/utils/SafeERC20.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";

contract CCIPLendingProtocol is CCIPReceiver, OwnerIsCreator {
    using SafeERC20 for IERC20;

    error InvalidLinkToken();
    error InvalidUsdcToken();
    error NoReceiverOnDestinationChain(uint64 chainSelector);
    error NoSenderOnSourceChain(uint64 chainSelector);
    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees);
    error AmountIsZero();
    error IncorrectTokenAmount();
    error InvalidReceiverAddress();
    error InvalidSenderAddress();
    error InvalidDestinationChain();
    error InvalidSourceChain();
    error WrongSenderForSourcheChain(address sender, uint64 chainSelector);
    error WrongTransactionId();
    error InvalidTransaction();

    event MessageSent(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address indexed receiver,
        address token,
        uint256 tokenAmount,
        address feeToken,
        uint256 fees
    );

    event MessageReceived(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address indexed sender,
        bytes data,
        address token,
        uint256 tokenAmount
    );

    event MessageFailed(bytes32 indexed messageId, bytes reason);

    // struct for transaction
    struct Transaction {
        address initiator;
        uint256 amount;
        bytes txData;
        bytes32 id;
    }

    IRouterClient private immutable i_router; // Router of the Source Chain
    IERC20 private immutable i_linkToken; // LINK Token for paying fees
    IERC20 private immutable i_usdcToken; // USDC Token for Lending

    mapping(uint64 => address) public s_receivers; // List of all receivers for Destination Chains
    mapping(uint64 => address) public s_senders; // List of all senders for Source Chains
    mapping(uint64 => address) public s_usdcTokens; // List of all USDC addresses for Destination Chains

    mapping(bytes32 => Transaction) private s_transactions; // List of all transactions

    modifier validateDestinationChain(uint64 _chainSelector) {
        if (_chainSelector == 0) revert InvalidDestinationChain();
        _;
    }

    modifier validateSourceChain(uint64 _chainSelector) {
        if (_chainSelector == 0) revert InvalidSourceChain();
        _;
    }

    constructor(
        address _router,
        address _linkToken,
        address _usdcToken
    ) CCIPReceiver(_router) {
        if (_linkToken == address(0)) revert InvalidLinkToken();
        if (_usdcToken == address(0)) revert InvalidUsdcToken();
        i_router = IRouterClient(_router);
        i_linkToken = IERC20(_linkToken);
        i_usdcToken = IERC20(_usdcToken);
    }

    // Main function to open proposal. Used by job provider
    function openProposal(
        uint256 _amount
    ) external returns (bytes32 transactionID) {
        if (_amount == 0) revert AmountIsZero();

        bytes32 uniqueId = generateID(msg.sender, _amount);

        uint64 _destinationChainSelector = 0; // Perhaps for right now

        bytes memory txData = abi.encodeCall(
            IPool.supply,
            (
                s_usdcTokens[_destinationChainSelector],
                _amount,
                s_receivers[_destinationChainSelector],
                0
            )
        );

        Transaction memory transaction = Transaction(
            msg.sender,
            _amount,
            txData,
            uniqueId
        );
        s_transactions[uniqueId] = transaction; // store transaction with key 'id' to sender contract storage

        // send data with token via ccip to receiver
        transactionID = sendMessage(
            _destinationChainSelector,
            _amount,
            transaction
        );
        return transactionID;
    }

    // Main function to close proposal. Used by job provider
    function closeProposal(bytes32 id, uint256 _amount) external {
        uint64 _destinationChainSelector = 0; // Perhaps for right now

        bytes memory txData = abi.encodeCall(
            IPool.withdraw,
            (s_usdcTokens[_destinationChainSelector], _amount, msg.sender)
        );

        Transaction memory transaction = Transaction(
            msg.sender,
            _amount,
            txData,
            id
        );
        s_transactions[id] = transaction; // search for transaction in storage by id

        sendMessage(_destinationChainSelector, _amount, transaction);
    }

    // NOTE: in future add func that give chain selector of chain with best APY for USDC in Aave
    function choseBestPrice() internal returns (uint64 chainSelector) {}

    // Sends data and transfer tokens to receiver on the destination chain.
    function sendMessage(
        uint64 _destinationChainSelector,
        uint256 _amount,
        Transaction memory _transaction
    )
        internal
        validateDestinationChain(_destinationChainSelector)
        returns (bytes32 messageId)
    {
        address receiver = s_receivers[_destinationChainSelector];
        if (receiver == address(0))
            revert NoReceiverOnDestinationChain(_destinationChainSelector);

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);

        tokenAmounts[0] = Client.EVMTokenAmount({
            token: address(i_usdcToken),
            amount: _amount
        });

        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver), // encoded receiver
            data: abi.encode(_transaction), // encoded tx data
            tokenAmounts: tokenAmounts, // tokenAmount (USDC)
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 200000})
            ),
            feeToken: address(i_linkToken) // link token to pay ccip fee
        });

        uint256 fees = i_router.getFee(
            _destinationChainSelector,
            evm2AnyMessage
        );
        if (fees > i_linkToken.balanceOf(address(this)))
            revert NotEnoughBalance(i_linkToken.balanceOf(address(this)), fees);

        i_linkToken.approve(address(i_router), fees);
        i_usdcToken.approve(address(i_router), _amount);

        messageId = i_router.ccipSend(
            _destinationChainSelector,
            evm2AnyMessage
        );

        emit MessageSent(
            messageId,
            _destinationChainSelector,
            receiver,
            address(i_usdcToken),
            _amount,
            address(i_linkToken),
            fees
        );

        return messageId;
    }

    // handle a received message
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        if (
            abi.decode(any2EvmMessage.sender, (address)) !=
            s_senders[any2EvmMessage.sourceChainSelector]
        )
            revert WrongSenderForSourcheChain(
                abi.decode(any2EvmMessage.sender, (address)),
                any2EvmMessage.sourceChainSelector
            );

        Transaction memory txReceived = abi.decode(
            any2EvmMessage.data,
            (Transaction)
        );
        // check if received data is valid (maybe code will be changed in future)
        if (s_transactions[txReceived.id].initiator == address(0))
            revert WrongTransactionId();

        // earned amount during lending process
        uint256 amountEarned = mathOperation(txReceived.amount, txReceived.id);

        // transfer money to initiator of tx (job provider)
        (bool success, ) = payable(txReceived.initiator).call{
            value: txReceived.amount
        }("");
        if (!success) revert InvalidTransaction();

        emit MessageReceived(
            any2EvmMessage.messageId,
            any2EvmMessage.sourceChainSelector, // fetch the source chain identifier (aka selector)
            abi.decode(any2EvmMessage.sender, (address)), // abi-decoding of the sender address,
            abi.decode(any2EvmMessage.data, (bytes)),
            any2EvmMessage.destTokenAmounts[0].token,
            any2EvmMessage.destTokenAmounts[0].amount
        );

        // after tx completed - delete it
        delete s_transactions[txReceived.id];
    }

    // Set the receiver contract for a given destination chain.
    function setReceiverForDestinationChain(
        uint64 _destinationChainSelector,
        address _receiver
    ) external onlyOwner validateDestinationChain(_destinationChainSelector) {
        if (_receiver == address(0)) revert InvalidReceiverAddress();
        s_receivers[_destinationChainSelector] = _receiver;
    }

    // Delete the receiver contract for a given destination chain.
    function deleteReceiverForDestinationChain(
        uint64 _destinationChainSelector
    ) external onlyOwner validateDestinationChain(_destinationChainSelector) {
        if (s_receivers[_destinationChainSelector] == address(0))
            revert NoReceiverOnDestinationChain(_destinationChainSelector);
        delete s_receivers[_destinationChainSelector];
    }

    // Set the sender contract for a given source chain.
    function setSenderForSourceChain(
        uint64 _sourceChainSelector,
        address _sender
    ) external onlyOwner validateSourceChain(_sourceChainSelector) {
        if (_sender == address(0)) revert InvalidSenderAddress();
        s_senders[_sourceChainSelector] = _sender;
    }

    // Delete the sender contract for a given source chain.
    function deleteSenderForSourceChain(
        uint64 _sourceChainSelector
    ) external onlyOwner validateSourceChain(_sourceChainSelector) {
        if (s_senders[_sourceChainSelector] == address(0))
            revert NoSenderOnSourceChain(_sourceChainSelector);
        delete s_senders[_sourceChainSelector];
    }

    // It is automatically called when Ether is sent to the contract without any data.
    receive() external payable {}

    // generate unique Indetifier for cross-chain transaction
    function generateID(
        address _beneficiary,
        uint256 _amount
    ) private view returns (bytes32) {
        return
            keccak256(abi.encodePacked(_beneficiary, _amount, block.timestamp));
    }

    // calculate token earned during Lending
    function mathOperation(
        uint256 receivedTokenAmount,
        bytes32 id
    ) internal view returns (uint256) {
        if (s_transactions[id].initiator == address(0))
            revert WrongTransactionId();

        uint256 originalAmount = s_transactions[id].amount;
        if (receivedTokenAmount >= originalAmount)
            revert IncorrectTokenAmount();

        return receivedTokenAmount - originalAmount;
    }
}
