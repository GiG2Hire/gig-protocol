//api/chat/create/
//The chat will be created and the offer table should be updated with the chatid
import { prisma } from "@/src/app/lib/db";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid'; // For generating a unique chatId

/**
 * Create a chat for gig offer
 * @param req { offer_id: number }
 * @returns Success or error response
 * @author horlarmmy
 */

export async function POST(req: Request) {
  try {
    // Extract parameters from the request
    const body = await req.json();
    const { offerId, clientId } = body;

    if (!offerId) {
      return NextResponse.json({ message: 'Invalid data. Offer ID is required' }, { status: 400 });
    }

    // Check if the offer exists
    const offer = await prisma.gigOffer.findUnique({
      where: { offerId: Number(offerId) },
    });

    if (!offer) {
      return NextResponse.json({ message: 'Offer not found' }, { status: 404 });
    }

    if (clientId != offer.clientId) {
      return NextResponse.json({ message: 'You cant create a chat!!! ' }, { status: 404 });
    }

    if (offer.chatId) {
      return NextResponse.json({ message: 'Chat already created!!!' }, { status: 404 });
    }

    // Generate a unique chatId
    // 17-1-2 
    const chatId = `${offer.clientId}-${offer.freelancerId}-${offer.gigId}`;
    console.log(chatId)

    // Create a new chat
    const newChat = await prisma.chat.create({
      data: {
        chatId: chatId, // Use the generated unique chatId
        geminiSentiment: null,
        geminiExplanation: null,
        gigOffer: {
          connect: { offerId: Number(offerId) }, // Relate this chat to the gig offer
        },
      },
    });

    // Update the offer with the chatId
    await prisma.gigOffer.update({
      where: { offerId: Number(offerId) },
      data: {
        chatId: newChat.chatId, // Update gigOffer with the newly created chatId
      },
    });

    return NextResponse.json({ message: 'Chat created and offer updated successfully', chatId: newChat.chatId }, { status: 200 });
  } catch (error) {
    console.error('Error creating chat: ', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
