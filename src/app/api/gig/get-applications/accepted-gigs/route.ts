//api/gig/get-applications/accepted-gigs/?user_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";
import { getRoleFromPayload, getUserIdFromPayload } from "@/src/app/actions/login";
import { GIG_COMPLETION_STATUS, GIG_OFFER_STATUS } from "@/src/constants/appConstants";

/**
 * Get all active gigs for a freelancer where their offers have been accepted
 * @param req Request object
 * @returns A list of gigs where the freelancer's offers are accepted
 * @author horlarmmy
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const user_id = parseInt(searchParams.get("user_id") || "0");
    //const payloadUserId = await getUserIdFromPayload();

    // check user authentication
    // if (!await isLoggedIn()) {
    //     return NextResponse.json(
    //         { message: "User not authenticated." },
    //         { status: 401 }
    //     );
    // }

    if (!user_id) {
        return NextResponse.json(
            { message: "Invalid client_id provided." },
            { status: 400 }
        );
    }

    // if (payloadUserId !== user_id) {
    //     return NextResponse.json(
    //         { message: "User don't have access to data." },
    //         { status: 401 }
    //     );
    // }

    // Retrieve data from the database based on the user's role
    try {
        const acceptedOffers = await prisma.gig.findMany({
            where: {
                freelancerId: user_id,
                completionStatus: GIG_COMPLETION_STATUS.IN_PROGRESS
            },
            include: {
                gig_task: true,
                gig_file: true,
                user: true,
              },
        });
        console.log(
            `GET /gig/accepted-gigs/ response from database: ${JSON.stringify(acceptedOffers)})`
          );

        return NextResponse.json(acceptedOffers, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error retrieving accepted offers.", error: (error as any).message },
            { status: 500 }
        );
    }
}