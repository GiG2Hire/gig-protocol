import type { NextApiRequest, NextApiResponse } from 'next'
import { pusherServer } from "../../src/app/lib/pusher";

 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const chatId = req.body.chatId;
    console.log(chatId);
    console.log(req.body.chatMsg);
    console.log("sent message to pusher");
    pusherServer.trigger("chat-messages", `chat__${chatId}`, {message:req.body.chatMsg, sender_id:req.body.sender_id});

}