import { supabase } from "@/src/utils/supabase";
import { prisma } from "../../lib/db";

/**
 * @notice Creates new user in database with connected wallet
 * @param req Address of connected wallet
 * @returns Created new user in database or error
 * @author MAYANK CHHIPA (mgroovyank)
 */
export async function POST(req: Request) {
  console.log("Inside POST /user/");

  const { address } = await req.json();
  let data;

  try {
    data = await prisma.user.create({ data: { address: address } });
  } catch (error) {
    console.log(error);
    return new Response("Unable to complete user sign up!", { status: 500 });
  }

  console.log(
    `POST /user/detail?address response from database: ${JSON.stringify(data)}`
  );

  const newUser: User = data;
  return Response.json(newUser, { status: 200 });
}
