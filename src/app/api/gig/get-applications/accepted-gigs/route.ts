//api/gig/get-applications/accepted-gigs/?user_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";
import { getRoleFromPayload, getUserIdFromPayload } from "@/src/app/actions/login";
import { GIG_OFFER_STATUS } from "@/src/constants/appConstants";

/**
 * Get all active gigs for a freelancer where their offers have been accepted
 * @param req Request object
 * @returns A list of gigs where the freelancer's offers are accepted
 * @author alhonaut
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const user_id = parseInt(searchParams.get("user_id") || "0");
    const payloadUserId = await getUserIdFromPayload();

    // check user authentication
    if (!await isLoggedIn()) {
        return NextResponse.json(
            { message: "User not authenticated." },
            { status: 401 }
        );
    }

    if (!user_id) {
        return NextResponse.json(
            { message: "Invalid client_id provided." },
            { status: 400 }
        );
    }

    if (payloadUserId !== user_id) {
        return NextResponse.json(
            { message: "User don't have access to data." },
            { status: 401 }
        );
    }

    // Retrieve data from the database based on the user's role
    const acceptedGigs = await prisma.gig.findMany({
        where: {
            gig_offer: {
                some: {
                    freelancerId: user_id,
                    status: GIG_OFFER_STATUS.ACCEPTED,
                }
            }
        },
        include: {
            gig_offer: {
                where: {
                    status: GIG_OFFER_STATUS.ACCEPTED,
                },
            },
            gig_task: true,
            gig_file: true,
            user: true,
        },
    });
    console.log(acceptedGigs, "FATE")

    if (!acceptedGigs.length) {
        return NextResponse.json(
            { message: "No active gigs found for client." },
            { status: 404 }
        );
    }

    // changed `bigint` into `string` for resolving issue with serialization BigInt from TypeScript
    return NextResponse.json(JSON.stringify(acceptedGigs, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value
    ), { status: 200 });
}