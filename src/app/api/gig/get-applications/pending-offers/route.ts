//api/gig/get-applications/pending-offers/?freelancer_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";
import { GIG_OFFER_STATUS } from "@/src/constants/appConstants";

/**
 * Get all pending offers for a freelancer
 * @param req Request object
 * @returns A list of pending offers for the freelancer
 * @author alhonaut
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const freelancer_id = parseInt(searchParams.get("freelancer_id") || "0");

    // Validate freelancer_id
    if (isNaN(freelancer_id) || freelancer_id <= 0) {
        return NextResponse.json(
            { message: "Invalid freelancer ID." },
            { status: 400 }
        );
    }

    // Check user authentication
    // if (!await isLoggedIn()) {
    //     return NextResponse.json(
    //         { message: "User not authenticated." },
    //         { status: 401 }
    //     );
    // }

    try {
        const pendingOffers = await prisma.gigOffer.findMany({
            where: {
                freelancerId: freelancer_id,
                status: GIG_OFFER_STATUS.PENDING
            },
            include: {
                gig: {
                    select: {
                        title: true
                    }
                }
            }
        });
        console.log(
            `GET /gig/pending/ response from database: ${JSON.stringify(pendingOffers)})`
          );

        return NextResponse.json(pendingOffers, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error retrieving pending offers.", error: (error as any).message },
            { status: 500 }
        );
    }
}