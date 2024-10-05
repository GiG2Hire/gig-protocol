"use server";

import { prisma } from "../lib/db";
import { getUserIdFromPayload } from "./login";

export async function JoinAsClient(formData: FormData) {
  console.log("User Trying to join as a client");
  const clientId = await getUserIdFromPayload();
  const username: string = formData.get("username") as string;
  //TODO: Add email validation
  const email: string = formData.get("email") as string;
  const description: string = formData.get("description") as string;
  const organization: string = formData.get("organization") as string;
  const profile_image = "";

  try {
    const client = await prisma.user.update({
      where: { userId: clientId },
      data: {
        username: username,
        email: email,
        role: "Client",
        organization: organization,
        profile_image: profile_image,
        description: description,
      },
    });
    console.log(client);
  } catch (error) {
    console.log(`error:` + error);
  }
}

export async function JoinAsFreelancer(formData: FormData) {
  console.log("User Trying to join as a freelancer");
  const freelancerId = await getUserIdFromPayload();
  const username: string = formData.get("username") as string;
  //TODO: Add email validation
  const email: string = formData.get("email") as string;
  const description: string = formData.get("description") as string;
  const profileImage = "";

  try {
    const freelancer = await prisma.user.update({
      where: { userId: freelancerId },
      data: {
        username: username,
        email: email,
        role: "Freelancer",
        profile_image: profileImage,
        description: description,
      },
    });
    console.log(freelancer);
  } catch (error) {
    console.log(`error:` + error);
  }
}
