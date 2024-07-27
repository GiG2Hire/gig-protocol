import { pusherServer } from "@/src/app/lib/pusher";

export async function POST(req: Request) {
    const{chatId, chatMsg, sender_id} = await req.json();
    console.log(chatId);
    console.log(chatMsg);
    console.log("sent message to pusher");
    try{
        pusherServer.trigger("chat-messages", `chat__${chatId}`, {message:chatMsg, sender_id});
    } catch (error) {
        if (error instanceof Error) {
            return new Response(error.message, { status: 500 })
        }
        return new Response('Internal Server Error', { status: 500 })
    }
    return new Response("OK");
}