import { prisma } from "@/src/app/lib/db";
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
  let data;

  try {
    data = await prisma.chat.upsert({
      where: { chatId: chatId },
      update: { geminiSentiment: sentiment },
      create: {
        chatId: chatId,
        geminiSentiment: sentiment,
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json("Unable to store sentiment in database!", {
      status: 500,
    });
  }

  console.log(
    `POST /chat/sentiment/gemini/store response from database: ${JSON.stringify(
      data
    )}`
  );

  return Response.json("Stored sentiment in database successfully", {
    status: 200,
  });
}
