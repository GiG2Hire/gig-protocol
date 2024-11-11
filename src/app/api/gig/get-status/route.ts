//api/gig/get-status/?gig_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";

/**
 * Get completition status of gig proposal
 * @param req Request object
 * @returns A ongoing status for specific gig
 * @author alhonaut
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const gig_id = parseInt(searchParams.get("gig_id") || "0");

    // check user authentication
    if (!await isLoggedIn()) {
        return NextResponse.json(
            { message: "User not authenticated." },
            { status: 401 }
        )
    }

    try {
        // Retrieve single gig data from the database
        const gig = await prisma.gig.findUnique({
            where: { gigId: gig_id },
        });

        if (!gig) {
            return NextResponse.json(
                { message: "Gig not found." },
                { status: 404 }
            );
        }

        // Return the completion status
        return NextResponse.json(gig.completionStatus, { status: 200 });
    } catch (error) {
        console.error("Error fetching gig status:", error);
        return NextResponse.json(
            { message: "Internal server error." },
            { status: 500 }
        );
    }

}