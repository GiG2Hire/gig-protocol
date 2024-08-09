import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

/**
 * @notice create a new gig by client
 * @param req clientid, description, gigValue
 * @returns success/failure of create gig
 */
export async function POST(req: Request) {
  console.log("Inside POST /gig/create/");

  const { clientId, description, gigValue } = await req.json();
  const { status, statusText, error } = await supabase
    .from("gig")
    .insert({ client_id: clientId, description: description, gig_value: 108 });

  if (error) {
    return Response.json(error.message, { status: 500 });
  }

  console.log(`POST /gig/create/ response from database: ${statusText}`);

  return Response.json("Gig created successfully", { status: status });
}
