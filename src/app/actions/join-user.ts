"use server";

import {
  PutObjectCommand,
  S3Client,
  S3ClientConfig,
  S3ServiceException,
} from "@aws-sdk/client-s3";
import { prisma } from "../lib/db";
import { getUserIdFromPayload } from "./login";
import crypto from "crypto";
import { profile } from "console";

const s3ClientConfig: S3ClientConfig = {
  region: process.env.GIG_AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.GIG_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.GIG_AWS_SECRET_ACCESS_KEY!,
  },
};
const client = new S3Client(s3ClientConfig);

async function computeSHA256(file: File) {
  console.log("Computing checksum of file...");
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

export async function JoinAsClient(formData: FormData) {
  console.log("User Trying to join as a client");
  const clientId = await getUserIdFromPayload();
  const username: string = formData.get("username") as string;
  //TODO: Add email validation
  const email: string = formData.get("email") as string;
  const description: string = formData.get("description") as string;
  const organization: string = formData.get("organization") as string;
  const profileImage: File = formData.get("profile-image") as File;

  if (!validFileRequirements(profileImage)) {
    console.log("Profile Image Doesn't match file requirements");
    return;
  }

  const buffer = Buffer.from(await profileImage.arrayBuffer());
  const fileName = generateFileName();

  await uploadProfileImage(buffer, fileName);

  try {
    const client = await prisma.user.update({
      where: { userId: clientId },
      data: {
        username: username,
        email: email,
        role: "Client",
        organization: organization,
        profileImage:
          "https://gig2hirelocal.s3.eu-north-1.amazonaws.com/" + fileName,
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
  const profileImage: File = formData.get("profile-image") as File;

  const buffer = Buffer.from(await profileImage.arrayBuffer());
  const fileName = generateFileName();

  await uploadProfileImage(buffer, fileName);

  try {
    const freelancer = await prisma.user.update({
      where: { userId: freelancerId },
      data: {
        username: username,
        email: email,
        role: "Freelancer",
        profileImage:
          "https://gig2hirelocal.s3.eu-north-1.amazonaws.com/" + fileName,
        description: description,
      },
    });
    console.log(freelancer);
  } catch (error) {
    console.log(`error:` + error);
  }
}

async function uploadProfileImage(buffer: Buffer, fileName: string) {
  const bucketName = process.env.GIG_AWS_BUCKET_NAME;
  const command = new PutObjectCommand({
    Bucket: process.env.GIG_AWS_BUCKET_NAME,
    Key: fileName,
    Body: buffer,
  });
  try {
    const response = await client.send(command);
    console.log("Response for s3 put command: " + JSON.stringify(response));
  } catch (error) {
    if (
      error instanceof S3ServiceException &&
      error.name === "EntityTooLarge"
    ) {
      console.error(
        `Error from S3 while uploading object to ${bucketName}. \
         The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) \
         or the multipart upload API (5TB max).`
      );
    } else if (error instanceof S3ServiceException) {
      console.error(
        `Error from S3 while uploading object to ${bucketName}.  ${error.name}: ${error.message}`
      );
    } else {
      throw error;
    }
  }
}

function validFileRequirements(profileImage: File) {
  const validProfileImageTypes = ["image/jpeg", "image/png"];
  if (
    profileImage != null &&
    profileImage != undefined &&
    profileImage.size < 20 * 1024 * 1024 &&
    validProfileImageTypes.includes(profileImage.type)
  ) {
    return true;
  }
  return false;
}
