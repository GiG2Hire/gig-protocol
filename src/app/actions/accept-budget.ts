"use server";

import { getUserIdFromPayload } from "./login";
import { GIG_COMPLETION_STATUS } from "@/src/constants/appConstants";
import { findBestAPY } from "./choose-and-open";
import CONTRACT_ADDRESSES from "@/src/constants/contractAddresses.json";
import { prisma } from "../lib/db";

/**
 *
 * @param formData Form Data
 * @param deliveryDate expected date for job delivery by freelancer
 * Approve Budget by client
 */

export default async function approveBudget(gigId: number, txHash: string) {
    console.log("Trying to approve budget for gig...");
    const clientId = await getUserIdFromPayload();
    console.log("Client id", clientId, gigId, txHash);
}