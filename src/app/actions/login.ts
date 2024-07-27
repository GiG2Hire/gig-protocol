"use server";
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "@/src/app/lib/client";
import { cookies } from "next/headers";
import { useActiveAccount } from "thirdweb/react";
import { decodeJWT } from "thirdweb/utils";

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  adminAccount: privateKeyToAccount({ client, privateKey }),
});

export const generatePayload = thirdwebAuth.generatePayload;

export async function login(payload: VerifyLoginPayloadParams, role:string, userId:number) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
  console.log(verifiedPayload);
  console.log(`role: ${role}`);
  console.log(`userid: ${userId}`);
  if (verifiedPayload.valid) {
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload,
      context: {
        role: role,
        userId: userId
      },
    });
    cookies().set("jwt", jwt);
  }
}

export async function isLoggedIn() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return false;
  }
  console.log("Printing jwt value");
  console.log(jwt.value);
  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    return false
  }
  return true;
}

export async function logout() {
  cookies().delete("jwt");
}

export async function getPayload(){
  const jwtToken = cookies().get("jwt");
  const { payload, signature } = decodeJWT(jwtToken?.value);
  return payload;
}

export async function refreshJWTToken(jwt:string){
  cookies().set("jwt", jwt);
}