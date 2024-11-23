"use server";

import { getUserIdFromPayload } from "./login";
import { prisma } from "../lib/db";

/**
 *
 * @param gigId Gig ID
 * @param txHash Transaction Hash
 * Approve Budget by client
 */

export default async function approveBudget(gigId: number, txHash: string) {
    console.log("Trying to approve budget for gig...");
    const clientId = await getUserIdFromPayload();
    console.log("Client id", clientId, gigId, txHash);

    if (!gigId || !txHash) {
        return ;
    }

    try {
        // Fetch the gig
        const gig = await prisma.gig.findUnique({
            where: { gigId: gigId }
        });

        if (!gig) {
            return 'Gig not found';
        }

        // Update the gig status to COMPLETED
        await prisma.gig.update({
            where: { gigId: gigId },
            data: { completionStatus: 'COMPLETED', txHash: txHash }
        });

        console.log(`POST /gig/approve-budget/ response from database`);
        console.log("Budget approved successfully!!");

        return 'Budget approved successfully';
    } catch (error) {
        console.error("Error approving budget:", error);
    }
}