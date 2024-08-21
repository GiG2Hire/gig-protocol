import { prisma } from "@/src/app/lib/db";

/**
 * @notice Get stored gemini sentiment for current chat
 * @param req chatId
 * @returns list of messages sent/received as part of chat sorted in ascending order
 */
export async function GET(req: Request) {
  console.log("Inside GET /chat/sentiment/gemini/retrieve/");

  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chatId");

  let data;

  try {
    data = await prisma.chat.findUnique({ where: { chatId: chatId } });
  } catch (error) {
    console.log(error);
    return Response.json("Unable to get sentiment for chat from database", {
      status: 500,
    });
  }

  console.log(
    `POST /chat/sentiment/gemini/retrieve/ response from database: ${JSON.stringify(
      data
    )})`
  );

  return Response.json(data, { status: 200 });
}
