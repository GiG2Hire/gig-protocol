// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

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
    error InvalidPool(); // USed when invalid pool address get
    error InvalidSenderAddress(); // Used when the sender address is 0
    error WrongReceivedToken(address usdcToken, address receivedToken); // Used if the received token is different than usdc token
    error WrongSenderForSourceChain(uint64 sourceChainSelector); // Used when the sender contract is not the correct one
    error WrongSourceChain(); // Used when the source chain is not the correct one
    error MessageNotFailed(bytes32 messageId); // Used if you try to retry a message that has no failed
    error OnlySelf(); // Used when a function is called outside of the contract itself
    error CallToPoolFailed(); // Used when the call to the stake function of the staker contract is not succesful
    error NoReturnDataExpected(); // Used if the call to the stake function of the staker contract returns data. This is not expected
    error NoSenderOnSourceChain(uint64 sourceChainSelector); // Used when there is no sender for a given source chain

    mapping(uint64 => address) public s_senders;
    mapping(bytes32 => Client.Any2EVMMessage) public s_messageContents;

    event MessageReceived(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        uint64 indexed sourceChainSelector, // The chain selector of the source chain.
        address indexed sender, // The address of the sender from the source chain.
        bytes data, // The data that was received.
        address token, // The token address that was transferred.
        uint256 tokenAmount // The token amount that was transferred.
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

    IRouterClient private immutable i_router;
    address private immutable i_pool;
    IERC20 private immutable i_usdcToken;

    modifier validateSourceChain(uint64 _sourceChainSelector) {
        if (_sourceChainSelector == 0) revert WrongSourceChain();
        _;
    }

    modifier onlySelf() {
        if (msg.sender != address(this)) revert OnlySelf();
        _;
    }

    constructor(
        address _router,
        address _pool,
        address _usdcToken
    ) CCIPReceiver(_router) {
        if (_pool == address(0)) revert InvalidUsdcToken();
        if (_usdcToken == address(0)) revert InvalidPool();
        i_router = IRouterClient(_router);
        i_pool = _pool;
        i_usdcToken = IERC20(_usdcToken);

        i_usdcToken.safeApprove(_pool, type(uint256).max);
    }

    function ccipReceive(
        Client.Any2EVMMessage calldata any2EvmMessage
    ) external override onlyRouter {
        // validate the sender contract
        if (
            abi.decode(any2EvmMessage.sender, (address)) !=
            s_senders[any2EvmMessage.sourceChainSelector]
        ) revert WrongSenderForSourceChain(any2EvmMessage.sourceChainSelector);
        /* solhint-disable no-empty-blocks */
        try this.processMessage(any2EvmMessage) {
            // Intentionally empty in this example; no action needed if processMessage succeeds
        } catch (bytes memory err) {
            s_messageContents[any2EvmMessage.messageId] = any2EvmMessage;
            // Don't revert so CCIP doesn't revert. Emit event instead.
            // The message can be retried later without having to do manual execution of CCIP.
            emit MessageFailed(any2EvmMessage.messageId, err);
            return;
        }
    }

    /// @notice Serves as the entry point for this contract to process incoming messages.
    /// @param any2EvmMessage Received CCIP message.
    /// @dev Transfers specified token amounts to the owner of this contract. This function
    /// must be external because of the  try/catch for error handling.
    /// It uses the `onlySelf`: can only be called from the contract.
    function processMessage(
        Client.Any2EVMMessage calldata any2EvmMessage
    ) external onlySelf {
        _ccipReceive(any2EvmMessage); // process the message - may revert
    }

    // NOTE: future add logic of handling what type of tx we received (or is supply func or withdraw fund and make further logic)
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        if (any2EvmMessage.destTokenAmounts[0].token != address(i_usdcToken))
            revert WrongReceivedToken(
                address(i_usdcToken),
                any2EvmMessage.destTokenAmounts[0].token
            );

        // call pool in dest Chain via low level call
        (bool success, bytes memory returnData) = i_pool.call(
            any2EvmMessage.data
        );
        if (!success) revert CallToPoolFailed();
        if (returnData.length > 0) revert NoReturnDataExpected();

        emit MessageReceived(
            any2EvmMessage.messageId,
            any2EvmMessage.sourceChainSelector, // fetch the source chain identifier (aka selector)
            abi.decode(any2EvmMessage.sender, (address)), // abi-decoding of the sender address,
            any2EvmMessage.data, // received data
            any2EvmMessage.destTokenAmounts[0].token,
            any2EvmMessage.destTokenAmounts[0].amount
        );
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
}
