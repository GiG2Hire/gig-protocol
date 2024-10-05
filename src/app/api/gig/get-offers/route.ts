//api/gig/get-offers/?gig_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { getUserIdFromPayload } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";

/**
 * Get all offers for a specific gig
 * @param req Request object
 * @returns A list of offers for the specified gig
 * @author horlarmmy
 */
// /api/gig/get-offers/?gig_id=<gigId>
export async function GET(req: NextRequest) {
  try {
    // Extract gig_id from query parameters
    const { searchParams } = new URL(req.url);
    const gig_id = parseInt(searchParams.get("gig_id") || "0");
    const clientId = await getUserIdFromPayload();

    if (!await isLoggedIn()) {
      return NextResponse.json(
        { message: "User not authenticated." },
        { status: 401 }
      )
    }

    // Validate gig_id
    if (!gig_id) {
      return NextResponse.json(
        { message: "Invalid gig_id parameter" },
        { status: 400 }
      );
    }

    // Fetch all offers for the specified gig
    const offers = await prisma.gigOffer.findMany({
      where: { gigId: gig_id },
    });

    // check if client have access to offers
    if (offers[0].clientId != clientId) {
      return NextResponse.json(
        { message: "User don't have access to data." },
        { status: 401 }
      )
    }

    // Check if there are any offers
    if (!offers.length) {
      return NextResponse.json(
        { message: "No offers found for this gig" },
        { status: 404 }
      );
    }

    // Return the list of offers
<<<<<<< HEAD
    return NextResponse.json(JSON.stringify(offers, (key, value) =>
      typeof value === 'bigint'
        ? value.toString()
        : value), { status: 200 });
=======
    return NextResponse.json(offers, { status: 200 });
>>>>>>> 8a655d067d339f5ef7a6fb0df977f47867de7cc6

  } catch (error) {
    console.error("Error fetching gig offers:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching gig offers" },
      { status: 500 }
    );
  }
}
