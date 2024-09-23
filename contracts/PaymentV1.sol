// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/utils/SafeERC20.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";

contract USDCPayment {
    using SafeERC20 for IERC20;

    mapping(bytes32 => uint256) private s_transactions; // list of amounts per ID

    IPool public immutable i_pool;
    IERC20 private immutable i_usdc;

    error AmountIsZero();
    error TransferFailed();
    error IncorrectTokenAmount();
    error NotOwner();
    error InvalidUsdcToken();

    event ProposalOpened(bytes32 id, uint256 amount, address initiator);
    event ProposalClosed(bytes32 id, address freelancer);

    constructor(address _addressPool, address _usdcAddress) {
        if (_usdcAddress == address(0)) revert InvalidUsdcToken();
        i_pool = IPool(_addressPool);
        i_usdc = IERC20(_usdcAddress);
        i_usdc.safeApprove(_addressPool, type(uint256).max);
    }

    function openProposal(uint256 _amount) external {
        if (_amount == 0) revert AmountIsZero();

        if (!i_usdc.transferFrom(msg.sender, address(this), _amount)) {
            revert TransferFailed();
        }
        bytes32 uniqueId = generateID(msg.sender, _amount);

        s_transactions[uniqueId] = _amount;
        i_pool.supply(address(i_usdc), _amount, address(this), 0);

        emit ProposalOpened(uniqueId, _amount, msg.sender);
    }

    /// @param id Generated ID to ensure is caller is valid owner.
    /// @param freelancer address of beneficiary for succesfull job or empty address in case of calling by client
    function closeProposal(bytes32 id, address freelancer) external {
        uint256 proposalAmount = s_transactions[id];
        if (proposalAmount == 0) {
            revert AmountIsZero();
        }
        delete s_transactions[id];

        address receiver;
        if (freelancer == address(0)) {
            receiver = msg.sender;
        } else {
            receiver = freelancer;
        }

        emit ProposalClosed(id, freelancer);

        i_pool.withdraw(address(i_usdc), proposalAmount, receiver);
    }

    function getBalance(address _tokenAddress) external view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(address(this));
    }

    // generate unique Indetifier for cross-chain transaction
    /// @param _beneficiary The address of the client.
    function generateID(
        address _beneficiary,
        uint256 _amount
    ) private view returns (bytes32) {
        return
            keccak256(abi.encodePacked(_beneficiary, _amount, block.timestamp));
    }

    receive() external payable {}
}
