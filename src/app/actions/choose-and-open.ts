import { Web3 } from "web3";
import { abi, testnetAddresses } from "./constantAbi";
import {
  defineChain,
  getContract,
  prepareContractCall,
  sendTransaction,
} from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { client } from "../lib/client";
import { reserveAbi } from "@/src/constants/getReserveData";
import { erc20Abi } from "@/src/constants/erc20";
import { constants } from "buffer";
import { useActiveAccount } from "thirdweb/react";

const metamaskWallet = createWallet("io.metamask");

async function getReserveData(
  rpcUrl: string,
  addressPool: string,
  addressUsdc: string
) {
  const web3 = new Web3(rpcUrl);

  console.log("Rserve abi issue here!!");
  const contract = new web3.eth.Contract(reserveAbi, addressPool);
  const data: any = await contract.methods.getReserveData(addressUsdc).call();

  const decimalRate = Number(data.currentLiquidityRate) / Math.pow(10, 27);

  const continuousRate = Math.log(1 + decimalRate);

  const apy = 100 * (Math.exp(continuousRate) - 1);
  return apy;
}

export async function closeProposal(
  //   chainId: number,
  //   rpcUrl: string,
  //   addressProtocol: string,
  id: number
) {
  const account = await metamaskWallet.connect({
    client: client,
  });

  const selectedChain = defineChain({
    id: chainId,
    rpc: rpcUrl,
  });

  const lendingContract = getContract({
    address: addressProtocol,
    chain: selectedChain,
    abi: abi,
    client,
  });

  const txCall = prepareContractCall({
    contract: lendingContract,
    method:
      "function closeProposal(bytes32 id,address freelancer,uint256 _amount,address _usdcToken,uint64 _destinationChainSelector)",
    params: [id, "0xd", BigInt(98998)],
  });

  // front it will be showing tx hash or link for ccip explorer with this hash
  const { transactionHash } = await sendTransaction({
    account: account,
    transaction: txCall,
  });

  return transactionHash;
}

export async function findBestAPY(amount: number) {
  // let final_result = -Infinity;
  // let chainName = "";
  // let selector: number | undefined;
  // let url: string;
  // let poolAddress;
  // let usdcToken: string = "";

  // for (const [name, value] of Object.entries(testnetAddresses)) {
  //   const {
  //     rpcUrl,
  //     addressPool,
  //     addressUsdc,
  //     selector: valueSelector,
  //   } = value as {
  //     rpcUrl: string;
  //     addressPool: string;
  //     addressUsdc: string;
  //     selector: number;
  //   };

  //   const result = await getReserveData(rpcUrl, addressPool, addressUsdc);
  //   console.log(`For chain ${name} APY: ${result.toFixed(2)}%`);
  //   if (result > final_result) {
  //     final_result = result;
  //     chainName = name;
  //     selector = valueSelector;
  //     poolAddress = addressPool;
  //     url = rpcUrl;
  //     usdcToken = addressUsdc;
  //   }
  // }

  // if (final_result !== -Infinity) {
  //   console.log(
  //     `\nBest APY in ${chainName} ${final_result.toFixed(
  //       2
  //     )}%\nChain selector: ${selector}`
  //   );
  // here will be call approveUSDCandOpenProposal
  const txHash = await approveUSDCandOpenProposal(
    84532,
    process.env.NEXT_PUBLIC_BASE_RPC_URL,
    "0x07eA79F68B2B3df564D0A34F8e19D9B1e339814b",
    1000000,
    "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  );

  return txHash;
  // } else {
  //   console.log(`\nNo valid APY data found.`);
  // }
}
