import { prisma } from "@/src/app/lib/db";
import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

/**
 * @notice create a new gig by client
 * @param req senderId, receiverId, chatMsg, sentTimestamp, chatId
 * @returns success/failure of storing sent message in database
 * @author mgroovyank (Mayank Chhipa)
 */
export async function POST(req: Request) {
  console.log("Inside POST /chat/send/");

  const { senderId, receiverId, chatMsg, sentTimestamp, chatId } =
    await req.json();

  let data;

  try {
    data = await prisma.chatMessage.create({
      data: {
        senderId: senderId,
        receiverId: receiverId,
        message: chatMsg,
        sentTimestamp: sentTimestamp,
        chatId: chatId,
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json("Unable to store message in database!", {
      status: 500,
    });
  }

  console.log(`POST /chat/send response from database: ${data}`);
  return Response.json(data, { status: 200 });
}
