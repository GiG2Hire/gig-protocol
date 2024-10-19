import { NextResponse } from 'next/server';
import { prisma } from '@/src/app/lib/db';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

export async function POST(req: Request) {
    try {
        const { gigId, transactionHash } = await req.json();

        if (!gigId || !transactionHash) {
            return NextResponse.json({ message: 'gigId and transactionHash are required' }, { status: 400 });
        }

        // Fetch the gig
        const gig = await prisma.gig.findUnique({
            where: { gigId }
        });

        if (!gig) {
            return NextResponse.json({ message: "Gig not found" }, { status: 404 });
        }

        // Verify the transaction on the blockchain
        const txReceipt = await provider.getTransactionReceipt(transactionHash);
        
        if (!txReceipt || txReceipt.status !== 1) {
            return NextResponse.json({ message: "Transaction failed or not found on the blockchain" }, { status: 400 });
        }

        // Start a transaction to ensure all database operations are atomic
        const result = await prisma.$transaction(async (prisma) => {
            // Update gig status to 'completed'
            const updatedGig = await prisma.gig.update({
                where: { gigId },
                data: { completionStatus: "completed" },
            });

            // Create a transaction record
            const transaction = await prisma.transaction.create({
                data: {
                    amount: gig.budget,
                    fromUserId: gig.clientId,
                    toUserId: gig.freelancerId,
                    gigId: gig.gigId,
                    type: 'GIG_PAYMENT',
                    transactionHash: transactionHash
                }
            });

            return { updatedGig, transaction };
        });

        return NextResponse.json({ 
            message: "Gig completed and payment recorded successfully",
            gig: result.updatedGig,
            transaction: result.transaction
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error completing gig and recording payment: ', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

//
// Client-side function (e.g., in a React component)
async function approveAndReleasePayment(gigId: string) {
    try {
        // First, call the API to prepare the transaction
        const response = await fetch('/api/gig/prepare-approval', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gigId, clientId: 'current-client-id' }) // Replace with actual client ID
        });
        const { transactionData, gig } = await response.json();

        // Connect to the user's wallet (assumes MetaMask or similar wallet is installed)
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Send the transaction
        const tx = await signer.sendTransaction(transactionData);
        
        // Wait for the transaction to be mined
        const receipt = await tx.wait();

        // Call another API to update the gig status in your database
        await fetch('/api/gig/complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                gigId: gig.id, 
                transactionHash: receipt.transactionHash 
            })
        });

        console.log('Payment released successfully!');
        return receipt.transactionHash;
    } catch (error) {
        console.error('Error releasing payment:', error);
        throw error;
    }
}