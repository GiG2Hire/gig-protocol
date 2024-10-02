import { prisma } from "@/src/app/lib/db";
import githubVerification from "@/src/app/actions/verify-github";
import { NextResponse } from "next/server";
import { supabase } from "@/src/utils/supabase";
import { verify } from "crypto";
import { redirect } from "next/navigation";

/**
 * Verify feelancer github
 * @param req userId and role=Freelancer
 * @returns OK response upon success/ error upon failure
 * @author horlarmmy(TOHEEB ALADE)
 */
// /user/freelancer/verify-github
export async function POST(req: Request) {
  console.log("Inside POST /user/freelancer/verify-github");

  // Extract code from the request URL
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("GitHub OAuth code not found", { status: 400 });
  }

  console.log(`GitHub OAuth code: ${code}`);
  if (code && await githubVerification(code)) {
    console.log("GitHub verification done!!!");
    return NextResponse.redirect(new URL("/join-freelancer", req.url));
  }
}
