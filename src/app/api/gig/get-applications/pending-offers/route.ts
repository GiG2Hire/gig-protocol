//api/gig/get-applications/pending-offers/?freelancer_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";
import { getRoleFromPayload, getUserIdFromPayload } from "@/src/app/actions/login";
import { GIG_OFFER_STATUS } from "@/src/constants/appConstants";

/**
 * Get all active gigs for a user
 * @param req Request object
 * @returns A list of completed gigs for user
 * @author alhonaut
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const freelancer_id = parseInt(searchParams.get("freelancer_id") || "0");
    const payloadUserId = await getUserIdFromPayload();

    // check user authentication
    if (!await isLoggedIn()) {
        return NextResponse.json(
            { message: "User not authenticated." },
            { status: 401 }
        )
    }

    if (!freelancer_id) {
        return NextResponse.json(
            { message: "Invalid client_id provided." },
            { status: 400 }
        )
    }

    if (payloadUserId !== freelancer_id) {
        return NextResponse.json(
            { message: "User don't have access to data." },
            { status: 401 }
        )
    }


    let offers = await prisma.gigOffer.findMany({
        where: {
            freelancerId: freelancer_id,
            status: GIG_OFFER_STATUS.PENDING,
        },
        include: {
            gig: true,
        },
    });

    if (!offers.length) {
        return NextResponse.json(
            { message: "No completed gigs found for client." },
            { status: 404 }
        );
    }

    // changed `bigint` into `string` for resolving issue with serialization BigInt from TypeScript
    return NextResponse.json(JSON.stringify(offers, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value
    ), { status: 200 });
}