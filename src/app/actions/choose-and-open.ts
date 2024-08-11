import { Web3 } from "web3";
import { abi, testnetAddresses } from "./constantAbi.js";
import {
    defineChain,
    getContract,
    prepareContractCall,
    sendTransaction
} from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { client } from "../lib/client";

const metamaskWallet = createWallet("io.metamask");


async function getReserveData(rpcUrl: string, addressPool: string, addressUsdc: string) {
    const web3 = new Web3(rpcUrl);

    const contract = new web3.eth.Contract(abi, addressPool);
    const data: any = await contract.methods.getReserveData(addressUsdc).call();

    const decimalRate = Number(data.currentLiquidityRate) / Math.pow(10, 27);

    const continuousRate = Math.log(1 + decimalRate);

    const apy = 100 * (Math.exp(continuousRate) - 1);
    return apy;
}

export async function approveUSDCandOpenProposal(chainId: number, rpcUrl: string, addressProtocol: string) {
    const account = await metamaskWallet.connect({
        client: client,
    });

    const selectedChain = defineChain({
        id: chainId,
        rpc: rpcUrl
    });

    const lendingContract = getContract({
        address: addressProtocol,
        chain: selectedChain,
        abi: abi,
        client
    });

    const txCall = prepareContractCall({
        contract: lendingContract,
        method: "function openProposal(uint256 _amount, address _usdcToken, uint64 _destinationChainSelector)",
        params: [BigInt(7), "0xd", BigInt(98998)],
    });

    // front it will be showing tx hash or link for ccip explorer with this hash
    const { transactionHash } = await sendTransaction({
        account: account,
        transaction: txCall,
    });

    return transactionHash;
}


async function closeProposal(id: string) {

}

async function findBestAPY() {
    let final_result = -Infinity;
    let chainName = '';
    let selector: number | undefined;
    let url: string;
    let poolAddress;

    for (const [name, value] of Object.entries(testnetAddresses)) {
        const { rpcUrl, addressPool, addressUsdc, selector: valueSelector } = value as {
            rpcUrl: string;
            addressPool: string;
            addressUsdc: string;
            selector: number;
        };

        const result = await getReserveData(rpcUrl, addressPool, addressUsdc);
        console.log(`For chain ${name} APY: ${result.toFixed(2)}%`);
        if (result > final_result) {
            final_result = result;
            chainName = name;
            selector = valueSelector;
            poolAddress = addressPool;
            url = rpcUrl;
        }
    }

    if (final_result !== -Infinity) {
        console.log(`\nBest APY in ${chainName} ${final_result.toFixed(2)}%\nChain selector: ${selector}`);
        // here will be call approveUSDCandOpenProposal
        const txHash = await approveUSDCandOpenProposal(6, url, poolAddress);

        return txHash;
    } else {
        console.log(`\nNo valid APY data found.`);
    }
}
findBestAPY();
