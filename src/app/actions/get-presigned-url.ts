"use server";

import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
  S3ClientConfig,
} from "@aws-sdk/client-s3";
import { getPayload, getUserIdFromPayload, isLoggedIn } from "./login";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { JWTPayload } from "thirdweb/utils";
import crypto from "crypto";

const s3ClientConfig: S3ClientConfig = {
  region: process.env.GIG_AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.GIG_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.GIG_AWS_SECRET_ACCESS_KEY!,
  },
};
const client = new S3Client(s3ClientConfig);

const validFileTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "text/plain",
  ".doc",
  "application/pdf",
];

const maxFileSize: number = 1024 * 1024 * 20; //20MB

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

export async function getPresignedUrl(
  fileType: string,
  fileSize: number,
  checksum: string
) {
  console.log(
    "Generating presigned URL for upload to s3... File Type:" +
      fileType +
      "File Size:" +
      fileSize
  );
  if (fileSize > maxFileSize) {
    return "";
  }

  if (!validFileTypes.includes(fileType)) {
    return "";
  }

  const isAuth = await isLoggedIn();
  if (!isAuth) {
    console.log("User Not Authenticated!!");
    return;
  }
  const userDetails: JWTPayload = await getPayload();
  const userContext: any = userDetails.ctx;
  const userId: string = userContext.userId;
  console.log("user id being used with metadata" + userId);
  const command = new PutObjectCommand({
    Bucket: process.env.GIG_AWS_BUCKET_NAME,
    Key: generateFileName(),
    ContentLength: fileSize,
    ContentType: fileType,
    ChecksumSHA256: checksum,
    Metadata: {
      userId: userId.toString(),
    },
  });
  return getSignedUrl(client, command, { expiresIn: 3600 }); // 1 minute
}

export async function removeFileFromS3(key: string) {
  const isAuth = await isLoggedIn();
  if (!isAuth) {
    console.log("User Not Authenticated!!");
    return;
  }

  const command = new DeleteObjectCommand({
    Bucket: process.env.GIG_AWS_BUCKET_NAME,
    Key: key,
  });

  await client.send(command);
}
