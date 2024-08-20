const { Web3 } = require('web3');
const { abi, testnetAddresses } = require('./constantAbi');

async function getReserveData(rpcUrl: string, addressContract: string, addressUsdc: string) {
    const web3 = new Web3(rpcUrl);

    const contract = new web3.eth.Contract(abi, addressContract);
    const data: any = await contract.methods.getReserveData(addressUsdc).call();

    const decimalRate = Number(data.currentLiquidityRate) / Math.pow(10, 27);

    const continuousRate = Math.log(1 + decimalRate);

    const apy = 100 * (Math.exp(continuousRate) - 1);
    return apy;
}

export async function calculateApy() {
    let final_result = -Infinity;
    let chainName = '';
    let selector: number | undefined;

    for (const [name, value] of Object.entries(testnetAddresses)) {
        const { rpcUrl, addressContract, addressUsdc, selector: valueSelector } = value as {
            rpcUrl: string;
            addressContract: string;
            addressUsdc: string;
            selector: number;
        };

        const result = await getReserveData(rpcUrl, addressContract, addressUsdc);
        console.log(`For chain ${name} APY: ${result.toFixed(2)}%`);
        if (result > final_result) {
            final_result = result;
            chainName = name;
            selector = valueSelector;
        }
    }

    if (final_result !== -Infinity) {
        console.log(`\nBest APY in ${chainName} ${final_result.toFixed(2)}%\nChain selector: ${selector}`);
        return { chainName, final_result, selector };
    } else {
        console.log(`\nNo valid APY data found.`);
    }
}
