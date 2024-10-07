"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";
import { getUserIdFromPayload } from "./login";

export async function createGigFile(
  gigId: string,
  name: string,
  type: string,
  size: Number,
  url: string
) {
  const uploadedBy = await getUserIdFromPayload();
  try {
    const uploadedFile = await prisma.gigFile.create({
      data: {
        gigId: Number(gigId),
        name: name,
        type: type,
        size: size,
        url: url,
        uploadedBy: uploadedBy,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log(`Gig File create response from database: ${uploadedFile}`);
    console.log("Gig File created successfully!!");
    revalidatePath("/chat/[id]");
  } catch (error) {
    console.log(error);
  }
}

export async function removeUploadedFile(id: number) {
  const currentUser = await getUserIdFromPayload();
  try {
    const deletedFile = await prisma.gigFile.delete({
      where: {
        id: id,
        uploadedBy: currentUser,
      },
    });
    console.log(`Gig File delete response from database: ${deletedFile}`);
    console.log("Gig File deleted successfully!!");
  } catch (error) {
    console.log(error);
  }
}
