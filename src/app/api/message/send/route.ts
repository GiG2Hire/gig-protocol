import { pusherServer } from "@/src/app/lib/pusher";
import { STATUS_200 } from "@/src/constants/appConstants";
import { NextResponse } from "next/server";

/**
 * Publish chat message to pusher
 * @param req senderId, receiverId, chatMsg, sentTimestamp, chatId
 * @returns response
 * @author mgroovyank (Mayank Chhipa)
 */
export async function POST(req: Request) {
  const { senderId, receiverId, chatMsg, sentTimestamp, chatId, sentiment } =
    await req.json();

  try {
    // publish an event: chat__chatId to chat-messages channel
    pusherServer.trigger("chat-messages", `chat__${chatId}`, {
      message: chatMsg,
      senderId: senderId,
      sentiment: "",
    });
    console.log("Successfully published event to pusher channel!!");
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
  return NextResponse.json({ message: "OK" }, { status: STATUS_200 });
}
