"use server";
import { prisma } from "../lib/db";
import { getUserIdFromPayload } from "./login";

export async function createGigFile(
  gigId: string,
  name: string,
  type: string,
  url: string
) {
  const uploadedBy = await getUserIdFromPayload();
  try {
    const uploadedFile = await prisma.gigFile.create({
      data: {
        gigId: Number(gigId),
        name: name,
        type: type,
        url: url,
        uploadedBy: uploadedBy,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log(`Gig File create response from database: ${uploadedFile}`);
    console.log("Gig File created successfully!!");
  } catch (error) {
    console.log(error);
  }
}
