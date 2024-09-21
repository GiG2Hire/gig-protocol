import { prisma } from "@/src/app/lib/db";
import { supabase } from "@/src/utils/supabase";
import { verify } from "crypto";
import { redirect } from "next/navigation";

/**
 * Join user as Freelancer role
 * @param req userId and role=Freelancer
 * @returns OK response upon success/ error upon failure
 * @author mgroovyank(MAYANK CHHIPA)
 */
// /user/freelancer/verify-github
export async function POST(req: Request) {
  console.log("Inside POST /user/freelancer/");

  const { userId, role } = await req.json();
  let data;
  try {
    data = await prisma.user.update({
      where: { userId: userId },
      data: { role: role },
    });
    console.log(
      `POST /user/freelancer response from database: ${JSON.stringify(data)}`
    );
  } catch (error) {
    console.log(`error:` + error);
    return new Response("Joining as Freelancer Failed", { status: 500 });
  }

  const updatedUser: User = data;
  return Response.json(updatedUser, { status: 200 });
}
