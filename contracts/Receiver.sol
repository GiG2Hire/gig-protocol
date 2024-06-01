// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/utils/SafeERC20.sol";
import {EnumerableMap} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/utils/structs/EnumerableMap.sol";


/// @title - A simple receiver contract for receiving usdc tokens then calling a staking contract.
contract Receiver is CCIPReceiver, OwnerIsCreator {
    using SafeERC20 for IERC20;

    error InvalidUsdcToken(); // Used when invalid Usdc token address get
    error InvalidLinkToken(); // Used when invalid LINK token address get
    error InvalidPool(); // USed when invalid pool address get
    error InvalidSenderAddress(); // Used when the sender address is 0
    error WrongReceivedToken(address usdcToken, address receivedToken); // Used if the received token is different than usdc token
    error WrongSenderForSourceChain(uint64 sourceChainSelector); // Used when the sender contract is not the correct one
    error WrongReceiverForDestinationChain(uint64 sourceChainSelector);
    error WrongSourceChain(); // Used when the source chain is not the correct one
    error WrongDestinationChain(); // Used when the destination chain is not the correct one
    error MessageNotFailed(bytes32 messageId); // Used if you try to retry a message that has no failed
    error OnlySelf(); // Used when a function is called outside of the contract itself
    error CallToPoolFailed(); // Used when the call to the stake function of the staker contract is not succesful
    error NoSenderOnSourceChain(uint64 sourceChainSelector); // Used when there is no sender for a given source chain
    error NoReceiverOnDestinationChain(uint64 destChainSelector); // Used when there is no receiver for a given destination chain
    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees); // USed when not enough funds

    mapping(uint64 => address) public s_receivers; 
    mapping(uint64 => address) public s_senders;
    mapping(bytes32 => Client.Any2EVMMessage) public s_messageContents;

    event MessageReceived(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        uint64 indexed sourceChainSelector, // The chain selector of the source chain.
        address indexed sender, // The address of the sender from the source chain.
        Transaction transaction, // The data that was received.
        address token, // The token address that was transferred.
        uint256 tokenAmount // The token amount that was transferred.
    );

    event MessageSent(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address indexed receiver,
        address token,
        uint256 tokenAmount,
        address feeToken,
        uint256 fees
    );

    event MessageFailed(bytes32 indexed messageId, bytes reason);
    event MessageRecovered(bytes32 indexed messageId);

    // Example error code, could have many different error codes.
    enum ErrorCode {
        RESOLVED,
        FAILED
    }

    struct FailedMessage {
        bytes32 messageId;
        ErrorCode errorCode;
    }

    struct Transaction {
        address initiator;
        uint256 amount;
        bytes txData;
        bytes32 id;
    }

    IRouterClient private immutable i_router;
    address private immutable i_pool;
    IERC20 private immutable i_usdcToken;
    IERC20 private immutable i_linkToken;


    modifier validateSourceChain(uint64 _sourceChainSelector) {
        if (_sourceChainSelector == 0) revert WrongSourceChain();
        _;
    }

    modifier validateDestinationChain(uint64 _destChainSelector) {
        if (_destChainSelector == 0) revert WrongDestinationChain();
        _;
    }


    modifier onlySelf() {
        if (msg.sender != address(this)) revert OnlySelf();
        _;
    }

    constructor(
        address _router,
        address _pool,
        address _usdcToken,
        address _linkToken
    ) CCIPReceiver(_router) {
        if (_pool == address(0)) revert InvalidUsdcToken();
        if (_linkToken == address(0)) revert InvalidLinkToken();
        if (_usdcToken == address(0)) revert InvalidPool();
        i_router = IRouterClient(_router);
        i_pool = _pool;
        i_usdcToken = IERC20(_usdcToken);
        i_linkToken = IERC20(_linkToken);

        i_usdcToken.safeApprove(_pool, type(uint256).max);
    }


    /// handle a received message
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        bytes32 messageId = any2EvmMessage.messageId; // fetch the messageId
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector; // fetch the source chain identifier (aka selector)
        address sender = abi.decode(any2EvmMessage.sender, (address)); // abi-decoding of the sender address
        Transaction memory message = abi.decode(any2EvmMessage.data, (Transaction)); // abi-decoding of the sent string message

        (bool sucess, bytes memory returnData) = i_pool.call(message.txData);
        if (!sucess) revert CallToPoolFailed();

        // if returnData not empty - we know that withdraw function called, so we sent money to main contract
        if (returnData.length > 0) {
            uint256 returnAmount = abi.decode(returnData, (uint256));
            uint64 destChain = 14767482510784806043;

            sendMessage(destChain, returnAmount, message);
        }

        emit MessageReceived(messageId, sourceChainSelector, sender, message, any2EvmMessage.destTokenAmounts[0].token,
            any2EvmMessage.destTokenAmounts[0].amount);
    }

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
            receiver: abi.encode(receiver),
            data: abi.encode(_transaction),
            tokenAmounts: tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 500000})
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

    /// @dev Set the sender contract for a given source chain.
    /// @notice This function can only be called by the owner.
    /// @param _sourceChainSelector The selector of the source chain.
    /// @param _sender The sender contract on the source chain .
    function setSenderForSourceChain(
        uint64 _sourceChainSelector,
        address _sender
    ) external onlyOwner validateSourceChain(_sourceChainSelector) {
        if (_sender == address(0)) revert InvalidSenderAddress();
        s_senders[_sourceChainSelector] = _sender;
    }

    /// @dev Delete the sender contract for a given source chain.
    /// @notice This function can only be called by the owner.
    /// @param _sourceChainSelector The selector of the source chain.
    function deleteSenderForSourceChain(
        uint64 _sourceChainSelector
    ) external onlyOwner validateSourceChain(_sourceChainSelector) {
        if (s_senders[_sourceChainSelector] == address(0))
            revert NoSenderOnSourceChain(_sourceChainSelector);
        delete s_senders[_sourceChainSelector];
    }

    // Set the receiver contract for a given destination chain.
    function setReceiverForDestinationChain(
        uint64 _destinationChainSelector,
        address _receiver
    ) external onlyOwner validateDestinationChain(_destinationChainSelector) {
        if (_receiver == address(0)) revert WrongReceiverForDestinationChain(_destinationChainSelector);
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
}
