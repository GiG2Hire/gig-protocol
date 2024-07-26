import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const promptString = "Tell me whether the following sentence's sentiment is positive or negative or something in between.\nSentence I would love to walk along the beach.\nSentiment Somewhat positive\nSentence I love my new record player\nSentiment Positive\nSentence I really hate it when my brother steals my things\nSentiment Negative\nSentence I really don't know how to feel about Pokemon\nSentiment";

client.generateText({
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
}).then(result => {
  console.log(JSON.stringify(result, null, 2));
});

}

