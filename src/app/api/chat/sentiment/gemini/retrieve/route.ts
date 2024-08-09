import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

/**
 * @notice Get stored gemini sentiment for current chat
 * @param req chatId
 * @returns list of messages sent/received as part of chat sorted in ascending order
 */
export async function GET(req: Request) {
  console.log("Inside GET /chat/sentiment/gemini/retrieve/");

  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chatId");
  console.log();

  const { data, status, statusText, error } = await supabase
    .from("chat")
    .select()
    .in("chat_id", [chatId]);

  if (error) {
    console.log("-------sdjsdk=----------------", error.message);
    return Response.json(error.message, { status: 500 });
  }

  console.log(
    `POST /chat/sentiment/gemini/retrieve/ response from database: ${JSON.stringify(
      data
    )})`
  );

  if (!data) {
    return Response.json(statusText, { status: status });
  }

  return Response.json(data, { status: status });
}
