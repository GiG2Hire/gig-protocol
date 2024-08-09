import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

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
  const { data, status, statusText, error } = await supabase
    .from("chat_message")
    .insert([
      {
        sender_id: senderId,
        receiver_id: receiverId,
        message: chatMsg,
        sent_timestamp: sentTimestamp,
        chat_id: chatId,
      },
    ])
    .select();

  if (error) {
    return Response.json(error.message, { status: 500 });
  }

  console.log(`POST /chat/send response from database: ${statusText}`);

  return Response.json(data[0], {
    status: status,
  });
}
