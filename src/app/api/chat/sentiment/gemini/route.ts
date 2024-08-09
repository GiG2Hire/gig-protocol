import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

/**
 * @notice Calculate sentiment from conversation using Gemini API
 * @param req chatId, conversation
 * @returns sentiment, explaination as json
 */
export async function POST(req: Request) {
  const { chatId, conversation } = await req.json();
  console.log(conversation);
  const MODEL_NAME = "models/text-bison-001";
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
  });

  const promptString =
    "Here is a conversation between a client and a freelancer discussing a potential project. Tell me if the overall sentiment of the conversation is very positive, slightly positive, negative, slightly negative or  neutral along with explaination in json format\n" +
    conversation;

  const result = await client.generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0.5,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    topK: 40,
    // optional, for nucleus sampling decoding strategy
    topP: 0.95,
    // optional, maximum number of output tokens to generate
    maxOutputTokens: 1024,
    prompt: {
      text: promptString,
    },
  });

  console.log("got the result from gemini api!!");
  console.log(JSON.stringify(result, null, 2));
  return Response.json(result, { status: 200 });
}
