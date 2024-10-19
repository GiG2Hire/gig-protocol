import { NextResponse } from 'next/server';
import { prisma } from '@/src/app/lib/db';
import { ethers } from 'ethers';
import { abi } from "../../../actions/constantAbi";
import { client } from "../../../lib/client";
import {
    defineChain,
    getContract,
    prepareContractCall,
    sendTransaction,
    waitForReceipt,
  } from "thirdweb";
import { Abi } from "abitype/src/abi";

export async function POST(req: Request) {
    try {
        const { gigId, clientId } = await req.json();

        if (!gigId || !clientId) {
            return NextResponse.json({ message: 'gigId and clientId are required' }, { status: 400 });
        }

        const gig = await prisma.gig.findUnique({
            where: { gigId }
        });

        if (!gig) {
            return NextResponse.json({ message: "Gig not found" }, { status: 404 });
        }

        // if (clientId !== gig.clientId) {
        //     return NextResponse.json({ message: "Unauthorized: Client ID does not match gig's client" }, { status: 403 });
        // }

        // if (gig.completionStatus !== "submitted") {
        //     return NextResponse.json({ message: "Gig is not in submitted status" }, { status: 400 });
        // }

        // Prepare the transaction data
        const chainId = 84532;
        const rpcUrl = 'https://sepolia.infura.io/v3/51b62d59f39b4a24a11b9326ee0ba2a9';
        const addressProtocol = "0x956b52eB371037CD8F2Ff5DF4Ac21BF0020226FB";

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
        
        // const txCall = prepareContractCall({
        //     contract: lendingContract,
        //     method:
        //       "function openProposal(uint256 _amount, address _usdcToken, uint64 _destinationChainSelector)",
        //     params: [BigInt(amount), usdcToken, BigInt("5224473277236331295")],
        // });

        const contractAddress = "0x8F63d939Df7201324C89b52D1E3FFaC8Ab2be39E";
        const contractABI: Abi = [
            {
                "inputs": [],
                "name": "retrieve",
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
                        "name": "num",
                        "type": "uint256"
                    }
                ],
                "name": "save",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];

        const testContract = getContract({
            address: contractAddress,
            chain: selectedChain,
            abi: contractABI,
            client,
        });

        const txtCall = prepareContractCall({
            contract: testContract,
            method:
              "function save(uint256 num) public",
            params: [BigInt(25)],
        });

        return NextResponse.json({ 
            message: "Transaction data prepared successfully",
            transactionData: txtCall,
            gig: {
                id: gig.gigId,
                budget: gig.gigBudget
            }
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error preparing approval transaction: ', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}