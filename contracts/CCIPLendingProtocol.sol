// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/utils/SafeERC20.sol";
//import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {IComet} from "./interfaces/IComet.sol";

contract CCIPLendingProtocol is CCIPReceiver, OwnerIsCreator {
    using SafeERC20 for IERC20;

    error InvalidLinkToken();
    error InvalidUsdcToken();
    error NoReceiverOnDestinationChain(uint64 chainSelector);
    error NoSenderOnSourceChain(uint64 chainSelector);
    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees);
    error AmountIsZero();
    error OnlySelf();
    error IncorrectTokenAmount();
    error InvalidReceiverAddress();
    error InvalidSenderAddress();
    error InvalidDestinationChain();
    error InvalidSourceChain();
    error WrongSenderForSourcheChain(address sender, uint64 chainSelector);
    error WrongTransactionId();
    error InvalidTransaction();
    error TransferFailed();

    error WrongID();

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

    event TxSucc(Transaction transaction);

    enum Status {
        Running,
        Done,
        Rejected
    }

    struct Transaction {
        address initiator; // job provider address
        address frelancer;
        uint256 amount;
        bytes txData; // data of called function
        bytes32 id; // generated ID that store in Smart Contrac storage and Database
        Status status;
    }

    IRouterClient private immutable i_router; // Router of the Source Chain
    IERC20 private immutable i_linkToken; // LINK Token for paying fees
    IERC20 private immutable i_usdcToken; // USDC Token for Lending
    address private immutable i_poolContract; // Pool Contract for destination Chain

    mapping(uint64 => address) public s_receivers; // List of all receivers for Destination Chains
    mapping(uint64 => address) public s_senders; // List of all senders for Source Chains
    mapping(uint64 => address) public s_usdcTokens; // List of all USDC addresses for Destination Chains
    mapping(uint64 => uint256) public s_gasLimits; // List of gas limit for different chains

    mapping(bytes32 => Transaction) private s_transactions; // List of all transactions by id key

    modifier validateDestinationChain(uint64 _chainSelector) {
        if (_chainSelector == 0) revert InvalidDestinationChain();
        _;
    }

    modifier validateSourceChain(uint64 _chainSelector) {
        if (_chainSelector == 0) revert InvalidSourceChain();
        _;
    }

    modifier onlySelf() {
        if (msg.sender != address(this)) revert OnlySelf();
        _;
    }

    constructor(
        address _router,
        address _linkToken,
        address _usdcToken,
        address _poolContract
    ) CCIPReceiver(_router) {
        if (_linkToken == address(0)) revert InvalidLinkToken();
        if (_usdcToken == address(0)) revert InvalidUsdcToken();
        i_router = IRouterClient(_router);
        i_linkToken = IERC20(_linkToken);
        i_usdcToken = IERC20(_usdcToken);
        i_poolContract = _poolContract;

        i_usdcToken.safeApprove(_poolContract, type(uint256).max);
    }

    // Main function to open proposal. Used by job provider
    function openProposal(
        uint256 _amount,
        address _usdcToken,
        uint64 _destinationChainSelector // chain selector of best APY chain for now
    ) external {
        if (_amount == 0) revert AmountIsZero();

        if (!i_usdcToken.transferFrom(msg.sender, address(this), _amount)) {
            revert TransferFailed();
        }

        bytes32 uniqueId = generateID(msg.sender, _amount);

        bytes memory txData = abi.encodeCall(
            IComet.supply,
            (_usdcToken, _amount)
        );

        Transaction memory transaction = Transaction(
            msg.sender,
            address(0),
            _amount,
            txData,
            uniqueId,
            Status.Running
        );

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);

        tokenAmounts[0] = Client.EVMTokenAmount({
            token: address(i_usdcToken),
            amount: _amount
        });

        sendMessage(
            _destinationChainSelector,
            _amount,
            transaction,
            tokenAmounts
        );
        emit TxSucc(transaction);
    }

    // Main function to close proposal. Used by job provider
    function closeProposal(
        bytes32 id,
        address freelancer, // address(0) in situation that client want to close job
        uint256 _amount,
        address _usdcToken,
        uint64 _destinationChainSelector
    ) external {
        bytes memory txData = abi.encodeCall(
            IComet.withdraw,
            (_usdcToken, _amount)
        );

        Transaction memory transaction = Transaction(
            msg.sender,
            freelancer,
            _amount,
            txData,
            id,
            Status.Done
        );

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](0); // don't send any tokens

        sendMessage(
            _destinationChainSelector,
            _amount,
            transaction,
            tokenAmounts
        );
    }

    // Sends data and transfer tokens to receiver on the destination chain.
    function sendMessage(
        uint64 _destinationChainSelector,
        uint256 _amount,
        Transaction memory _transaction,
        Client.EVMTokenAmount[] memory _tokenAmounts
    )
        internal
        validateDestinationChain(_destinationChainSelector)
        returns (bytes32 messageId)
    {
        address receiver = s_receivers[_destinationChainSelector];
        if (receiver == address(0))
            revert NoReceiverOnDestinationChain(_destinationChainSelector);
        uint256 gasLimit = s_gasLimits[_destinationChainSelector];

        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(_transaction),
            tokenAmounts: _tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: gasLimit})
            ),
            feeToken: address(i_linkToken)
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

    function ccipReceive(
        Client.Any2EVMMessage calldata any2EvmMessage
    ) external override onlyRouter {
        if (
            abi.decode(any2EvmMessage.sender, (address)) !=
            s_senders[any2EvmMessage.sourceChainSelector]
        )
            revert WrongSenderForSourcheChain(
                abi.decode(any2EvmMessage.sender, (address)),
                any2EvmMessage.sourceChainSelector
            );
        /* solhint-disable no-empty-blocks */
        _ccipReceive(any2EvmMessage);
    }

    // handle a received message
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        Transaction memory txReceived = abi.decode(
            any2EvmMessage.data,
            (Transaction)
        );
        s_tx = txReceived;

        (bool success, ) = i_poolContract.call(txReceived.txData); // withdraw to Smart Contract

        if (!success) {
            revert TransferFailed();
        }
        bool succ_tx;

        // withdraw money to Freelancer
        if (txReceived.status == Status.Done) {
            succ_tx = i_usdcToken.transferFrom(
                address(this),
                txReceived.frelancer,
                txReceived.amount
            );
        }

        // withdraw money to Client
        if (txReceived.status == Status.Rejected) {
            succ_tx = i_usdcToken.transferFrom(
                address(this),
                txReceived.initiator,
                txReceived.amount
            );
        }

        // check if transaction succesfull
        if (!succ_tx) {
            revert TransferFailed();
        }

        //(bool success, bytes memory returnData) = i_poolContract.call(txReceived.txData);
        s_succ = success;
    }
    bool public s_succ;
    Transaction public s_tx;

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
        if (originalAmount >= receivedTokenAmount)
            revert IncorrectTokenAmount();

        return receivedTokenAmount - originalAmount;
    }

    function setGasLimitForDestinationChain(
        uint64 _destinationChainSelector,
        uint256 _gasLimit
    ) external onlyOwner validateDestinationChain(_destinationChainSelector) {
        s_gasLimits[_destinationChainSelector] = _gasLimit;
    }
    /*
    function getTransactionID(address initiator) external view returns(bytes32) {
        return
    }
    */
}
