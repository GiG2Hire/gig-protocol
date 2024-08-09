import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

/**
 * @notice Get chat messages for chat window display
 * @param req senderId, receiverId
 * @returns list of messages sent/received as part of chat sorted in ascending order
 */
export async function GET(req: Request) {
  console.log("Inside GET /chat/retrieve/");

  const { searchParams } = new URL(req.url);
  const senderId = searchParams.get("senderId");
  const receiverId = searchParams.get("receiverId");

  console.log(senderId);
  console.log(receiverId);

  const { data, status, statusText, error } = await supabase
    .from("chat_message")
    .select()
    .in("sender_id", [senderId, receiverId])
    .in("receiver_id", [senderId, receiverId])
    .order("sent_timestamp", { ascending: true });

  if (error) {
    return Response.json(error.message, { status: 500 });
  }

  console.log(
    `POST /chat/retrieve/ response from database. Count of messages received: ${data.length})`
  );

  if (!data) {
    return Response.json(statusText, { status: status });
  }

  return Response.json(data, { status: status });
}
