"use server";
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "@/src/app/lib/client";
import { cookies } from "next/headers";
import { useActiveAccount } from "thirdweb/react";
import { decodeJWT, encodeJWT, JWTPayload } from "thirdweb/utils";
import { CLIENT, FREELANCER } from "@/src/constants/appConstants";
import { redirect } from "next/navigation";
import { supabase } from "@/src/utils/supabase";
import { prisma } from "../lib/db";

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
        userId: Number(userId), // bigint to int
      },
    });
    console.log(`userId: ${userId}`);
    console.log(`role: ${role}`);
    cookies().set("jwt", jwt);
    if (role == FREELANCER) {
      redirect("/freelancer-dashboard");
    } else if (role == CLIENT) {
      redirect("/client-dashboard");
    } else {
      redirect("/sign-in");
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
  const isJWTValid = await isLoggedIn(); // make user JWT token is there, but it should be VALID as well !!!
  if (!isJWTValid) {
    await logout();
    return;
  }
  const jwtToken = cookies().get("jwt");
  const { payload, signature } = decodeJWT(jwtToken?.value);
  return payload.ctx.userId;
}

export async function getRoleFromPayload() {
  const isJWTValid = await isLoggedIn(); // make user JWT token is there, but it should be VALID as well !!!
  if (!isJWTValid) {
    await logout();
    return;
  }
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

  let data;
  try {
    data = await prisma.user.findUnique({ where: { address: address } });
    console.log(data);
  } catch (error) {
    console.log("Login Failed!!!", error);
  }

  const foundUser: User = data;
  console.log("Exisitng user:", foundUser);
  if (foundUser) {
    console.log("Set up done as existing user!!");
    return { userId: foundUser.userId, role: foundUser.role };
  } else {
    console.log("New User needs to be created. Creating new user...");
    try {
      data = await prisma.user.create({
        data: {
          address: address,
        },
      });
    } catch (error) {
      console.log("Login Failed!!!", error);
    }

    const newUser: User = data;
    console.log(newUser);
    return { userId: newUser.userId, role: newUser.role };
  }
}

interface test {
  userId: number;
  role: string | null;
}
