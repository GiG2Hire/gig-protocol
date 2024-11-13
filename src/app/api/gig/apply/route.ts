// /api/gig/apply
import { prisma } from "@/src/app/lib/db";
import { NextResponse } from "next/server";

/**
 * Apply for a Gig
 * @param req { gig_id: number, freelancer_id: number, comment: string }
 * @returns Success or error response
 * @author horlarmmy
 */
// /api/gig/apply
export async function POST(req: Request) {
  try {
    // Extract parameters from the request
    const { gigId, freelancerId } = await req.json();
    console.log(gigId, freelancerId, "gig_id Apply")

    // Validate required fields
    if (!gigId || !freelancerId) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    //Check if gig exists
    const gig = await prisma.gig.findUnique({
      where: { gigId },
    });

    console.log(gig, "GiG")

    if (!gig) {
      return NextResponse.json(
        { message: "Gig not found." },
        { status: 404 }
      );
    }

    //Check if gig is OPEN
    if (gig.completionStatus != 'OPEN') {
      return NextResponse.json(
        { message: "Cannot submit an offer to this gig" },
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
        clientId: gig.clientId,
        comment: "",
        status: "Pending",
        chatId: null, // assuming chat will be created later
      },
    });
    console.log(newOffer)

    // Return a success response
    return NextResponse.json({ message: "Gig offer submitted successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error applying for the gig: ", error);
    return NextResponse.json(
      { message: "An error occurred while applying for the gig" },
      { status: 500 }
    );
  }
}
