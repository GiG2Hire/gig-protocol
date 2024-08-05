import { supabase } from "@/src/utils/supabase";

/**
 * @notice Get exisiting user in database, if exists
 * @param req address of connect wallet
 * @returns if exisiting User is there, returns single element list else returns empty list
 */
export async function GET(req: Request) {
  console.log("Inside GET /user/detail?address");

  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");

  let { data, error } = await supabase
    .from("user")
    .select()
    .eq("address", address);

  console.log(
    `GET /user/detail?address response from database: ${JSON.stringify(data)}`
  );

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const foundUsers: User[] = data;

  if (foundUsers.length == 0 || foundUsers.length > 1) {
    return new Response("User not Found!", { status: 404 });
  }

  return Response.json(foundUsers[0], { status: 200 });
}
