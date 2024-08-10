import { pusherServer } from "@/src/app/lib/pusher";
import { STATUS_200 } from "@/src/constants/appConstants";

/**
 * Publish chat message to pusher
 * @param req senderId, receiverId, chatMsg, sentTimestamp, chatId
 * @returns response
 * @author mgroovyank (Mayank Chhipa)
 */
export async function POST(req: Request) {
  const { senderId, receiverId, chatMsg, sentTimestamp, chatId } =
    await req.json();

  try {
    // publish an event: chat__chatId to chat-messages channel
    pusherServer.trigger("chat-messages", `chat__${chatId}`, {
      message: chatMsg,
      sender_id: senderId,
    });
    console.log("Successfully published event to pusher channel!!");
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
  return new Response("OK", { status: STATUS_200 });
}
