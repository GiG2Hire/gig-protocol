//api/gig/offer-status/?gig_id&?userId
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";

/**
 * Get existed offer of gig proposal
 * @param req Request object
 * @returns A ongoing offer from freelancer for specific gig
 * @author alhonaut
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const gigId = parseInt(searchParams.get("gig_id") || "0");
    const freelancerId = parseInt(searchParams.get("freelancer_id") || "0");

    // check user authentication
    if (!await isLoggedIn()) {
        return NextResponse.json(
            { message: "User not authenticated." },
            { status: 401 }
        )
    }

    try {
        // Retrieve single gig data from the database
        const existingOffer = await prisma.gigOffer.findFirst({
            where: {
                gigId: gigId,
                freelancerId: freelancerId,
            },
        });

        // Return the status of application
        return NextResponse.json({ alreadyApplied: existingOffer ? true : false }, { status: 200 });
    } catch (error) {
        console.error("Error fetching gig status:", error);
        return NextResponse.json(
            { message: "Internal server error." },
            { status: 500 }
        );
    }

}