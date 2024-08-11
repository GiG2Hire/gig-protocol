"use server";
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "@/src/app/lib/client";
import { cookies } from "next/headers";
import { useActiveAccount } from "thirdweb/react";
import { decodeJWT, encodeJWT, JWTPayload } from "thirdweb/utils";
import { FREELANCER } from "@/src/constants/appConstants";
import { redirect } from "next/navigation";
import { supabase } from "@/src/utils/supabase";

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  adminAccount: privateKeyToAccount({ client, privateKey }),
});

export const generatePayload = thirdwebAuth.generatePayload;

export async function login(payload: VerifyLoginPayloadParams) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
  if (verifiedPayload.valid) {
    const { userId, role } = await getOrCreateUserInDatabase(
      payload.payload.address
    );
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload,
      context: {
        role: role,
        userId: userId,
      },
    });
    console.log(`userId: ${userId}`);
    console.log(`role: ${role}`);
    cookies().set("jwt", jwt);
    if (role == FREELANCER) {
      redirect("/freelancer-dashboard");
    } else {
      redirect("/client-dashboard");
    }
  }
  console.log("Successfully Logged in!!");
}

export async function isLoggedIn() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return false;
  }
  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    return false;
  }
  return true;
}

export async function logout() {
  console.log("Deleting JWT Token!!");
  cookies().delete("jwt");
}

export async function getPayload() {
  const jwtToken = cookies().get("jwt");
  const { payload, signature } = decodeJWT(jwtToken?.value);
  return payload;
}

export async function refreshJWTToken(jwt: string) {
  cookies().set("jwt", jwt);
}

export async function getUserIdFromPayload() {
  const jwtToken = cookies().get("jwt");
  const { payload, signature } = decodeJWT(jwtToken?.value);
  return payload.ctx.userId;
}

export async function getRoleFromPayload() {
  const jwtToken = cookies().get("jwt");
  const { payload, signature } = decodeJWT(jwtToken?.value);
  return payload.ctx.role;
}

/**
 * @notice executed as soon as wallet is connected and before JWT token is generated
 * @notice The dApp gets user Id or creates a new user in database
 * @param wallet connect user wallet
 */
async function getOrCreateUserInDatabase(address: string): Promise<test> {
  console.log("Trying to check if user already exists in database...");
  let { data, error } = await supabase
    .from("user")
    .select()
    .eq("address", address);
  if (error) {
    console.log("Login Failed!!!");
  }
  const foundUser: User = data[0];
  // console.log("Exisitng user:", foundUsers[0]);
  if (foundUser) {
    console.log("Set up done as exisitng useer!!");
    return { userId: foundUser.user_id, role: foundUser.role };
  } else {
    console.log("New User needs to be created. Creating new user...");
    const { data, error } = await supabase
      .from("user")
      .insert({ address: address })
      .select();
    if (error) {
      console.log("Login Failed!!!");
    }
    const newUser: User = data[0];
    console.log(newUser);
    return { userId: newUser.user_id, role: newUser.role };
  }
}

interface test {
  userId: number;
  role: string | null;
}
