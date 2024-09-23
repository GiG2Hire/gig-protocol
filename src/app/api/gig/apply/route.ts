// /api/gig/apply?gig_id
import { prisma } from "@/src/app/lib/db";
import { NextResponse } from "next/server";

/**
 * Apply for a Gig
 * @param req { gig_id: number, freelancer_id: number, comment: string }
 * @returns Success or error response
 * @author horlarmmy
 */
// /api/gig/apply?gig_id=<gigId>
export async function POST(req: Request) {
  try {
    // Extract parameters from the request
    const { searchParams } = new URL(req.url);
    const gigId = parseInt(searchParams.get("gig_id") || "0");

    // Parse the request body
    const body = await req.json();
    const { freelancerId, comment } = body;

    // Validate required fields
    if (!gigId || !freelancerId) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Check if the freelancer has already applied to this gig
    const existingOffer = await prisma.gigOffer.findFirst({
      where: {
        gigId: gigId,
        freelancerId: freelancerId,
      },
    });

    if (existingOffer) {
      return NextResponse.json(
        { message: "Freelancer has already applied to this gig" },
        { status: 400 }
      );
    }

    // Create a new gig offer
    const newOffer = await prisma.gigOffer.create({
      data: {
        gigId: gigId,
        freelancerId: freelancerId,
        comment: comment,
        status: "Pending",
        chatId: null, // assuming chat will be created later
      },
    });
    console.log(newOffer)

    // Return a success response
    return NextResponse.json({ message: "Gig offer submitted successfully"}, { status: 201 });

  } catch (error) {
    console.error("Error applying for the gig: ", error);
    return NextResponse.json(
      { message: "An error occurred while applying for the gig" },
      { status: 500 }
    );
  }
}
