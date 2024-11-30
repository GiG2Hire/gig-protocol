//api/gig/accept-offer?gig_id=<gigId>
import { NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/db";
import {
  GIG_COMPLETION_STATUS,
  GIG_OFFER_STATUS,
} from "@/src/constants/appConstants";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { offerId, gigId, freelancerId, clientId } = body;

    if (!gigId || gigId === 0) {
      return NextResponse.json(
        { message: "Invalid or missing gig_id" },
        { status: 400 }
      );
    }

    //Check if gig exists
    const gig = await prisma.gig.findUnique({
      where: { gigId: gigId },
    });
    if (!gig) {
      return NextResponse.json({ message: "Gig not found" }, { status: 404 });
    }

    if (!offerId) {
      return NextResponse.json(
        { message: "Offer ID is required" },
        { status: 400 }
      );
    }
    if (!clientId) {
      return NextResponse.json(
        { message: "Client ID is required" },
        { status: 400 }
      );
    }
    if (Number(gig.clientId) !== clientId) {
      return NextResponse.json(
        { message: "Client ID does not match gig.clientId" },
        { status: 400 }
      );
    }

    // Fetch the offer details
    const offer = await prisma.gigOffer.findUnique({
      where: { offerId: Number(offerId) },
      include: { gig: true }, // Fetch gig details as well
    });

    if (!offer) {
      return NextResponse.json({ message: "Offer not found" }, { status: 404 });
    }

    // Check if the offer has already been accepted
    if (offer.status === GIG_OFFER_STATUS.ACCEPTED) {
      return NextResponse.json(
        { message: "Offer has already been accepted" },
        { status: 400 }
      );
    }

    // Update the offer status to 'accepted'
    await prisma.gigOffer.update({
      where: { offerId: Number(offerId) },
      data: {
        status: GIG_OFFER_STATUS.ACCEPTED,
      },
    });

    // Update the gig with the selected freelancer and possibly the gig status
    await prisma.gig.update({
      where: { gigId: offer.gigId },
      data: {
        freelancerId: offer.freelancerId,
        completionStatus: GIG_COMPLETION_STATUS.IN_PROGRESS, // Update the gig status to in_progress
      },
    });

    return NextResponse.json(
      { message: "Offer accepted and gig updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error accepting offer: ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
