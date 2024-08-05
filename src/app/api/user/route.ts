import { supabase } from "@/src/utils/supabase";

/**
 * @notice Creates new user in database with connected wallet
 * @param req Address of connected wallet
 * @returns Created new user in database or error
 */
export async function POST(req: Request) {
  console.log("Inside POST /user/");

  const { address } = await req.json();

  const { data, error } = await supabase
    .from("user")
    .insert({ address: address })
    .select();

  console.log(
    `POST /user/detail?address response from database: ${JSON.stringify(data)}`
  );

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  if (!data) {
    return new Response("Failed to create user!!", { status: 500 });
  }

  const newUser: User = data[0];
  return Response.json(newUser, { status: 200 });
}
