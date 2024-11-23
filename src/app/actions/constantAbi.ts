import { Abi } from "abitype/src/abi";
const abi: Abi = [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_addressPool",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "_usdcAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "_teamAddress",
						"type": "address"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "AmountIsZero",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "IncorrectAmount",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "IncorrectAmountId",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "IncorrectTokenAmount",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "IncorrectWalletAddress",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "InvalidUsdcToken",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "NotOwner",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					}
				],
				"name": "SafeERC20FailedOperation",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "TransferFailed",
				"type": "error"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "freelancer",
						"type": "address"
					}
				],
				"name": "ProposalClosed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "initiator",
						"type": "address"
					}
				],
				"name": "ProposalOpened",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "curr_wallet",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "new_wallet",
						"type": "address"
					}
				],
				"name": "WalletChanged",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "WithdrawETH",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "WithdrawUSDC",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_newTeamWallet",
						"type": "address"
					}
				],
				"name": "changeTeamWallet",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "_id",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "_freelancerAddr",
						"type": "address"
					}
				],
				"name": "closeProposal",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_tokenAddress",
						"type": "address"
					}
				],
				"name": "getBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getSupplyBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_utilization",
						"type": "uint256"
					}
				],
				"name": "getSupplyRate",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "i_comet",
				"outputs": [
					{
						"internalType": "contract IComet",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "i_usdc",
				"outputs": [
					{
						"internalType": "contract IERC20",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "openProposal",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"name": "s_transactions",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "team_wallet",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "withdrawETH",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "withdrawUSDC",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"stateMutability": "payable",
				"type": "receive"
			}
		]

const ethereum_rpc_url = process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL;
const optimism_rpc_url = process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL;
const arbitrum_rpc_url = process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL;
const base_rpc_url = process.env.NEXT_PUBLIC_BASE_RPC_URL;

const testnetAddresses = {
  ethereum: {
    rpcUrl: ethereum_rpc_url,
    selector: 16015286601757825753,
    addressPool: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
    addressUsdc: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
  },
  arbitrum: {
    rpcUrl: arbitrum_rpc_url,
    selector: 3478487238524512106,
    addressPool: "0xBfC91D59fdAA134A4ED45f7B584cAf96D7792Eff",
    addressUsdc: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
  },
  base: {
    rpcUrl: base_rpc_url,
    selector: 10344971235874465080,
    addressPool: "0x07eA79F68B2B3df564D0A34F8e19D9B1e339814b",
    addressUsdc: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  },
  optimism: {
    rpcUrl: optimism_rpc_url,
    selector: 5224473277236331295,
    addressPool: "0xb50201558B00496A145fE76f7424749556E326D8",
    addressUsdc: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
  },
};

export { abi, testnetAddresses };
