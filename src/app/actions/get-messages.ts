"use server";
import { prisma } from "../lib/db";

export const getMessages = async (id: string) => {

    const messages = await prisma.chatMessage.findMany({
        where: {
            chatId: id,
        },
        orderBy: {
            sentTimestamp: "asc",
        },
    });

    return messages;
}

export const getFiles = async (id: number) => {
    const submitedFiles = await prisma.gigFile.findMany({
        where: {
            gigId: id,
        },
    });


    return submitedFiles;
}