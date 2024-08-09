import { supabase } from "@/src/utils/supabase";

/**
 * @notice Store sentiment text(positive, slightly positive, neutral, slightly negative, negative)
 * @param req sentiment, chatId
 * @returns record updated in database
 * @author mgroovyank (Mayank Chhipa)
 */
export async function POST(req: Request) {
  console.log("Inside POST /chat/sentiment/gemini/store");

  const { sentiment, chatId } = await req.json();
  const { data, status, statusText, error } = await supabase
    .from("chat")
    .upsert([
      {
        gemini_sentiment: sentiment,
        chat_id: chatId,
      },
    ])
    .select();

  if (error) {
    return Response.json(error.message, { status: 500 });
  }

  console.log(
    `POST /chat/sentiment/gemini/store response from database: ${JSON.stringify(
      data
    )}`
  );

  return Response.json("Stored sentiment in database successfully", {
    status: status,
  });
}
