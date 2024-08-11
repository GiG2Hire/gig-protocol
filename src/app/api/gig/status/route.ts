import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

/**
 * @notice Update completion status for a Gig accepted by client
 * @param req gigId, status
 * @returns boolean success/failure
 */
export async function POST(req: Request) {
  console.log("Inside POST /gig/status/");

  const { gigId, completionStatus } = await req.json();
  const { status, statusText, error } = await supabase
    .from("gig")
    .update({ completion_status: completionStatus })
    .eq("gig_id", gigId);

  if (error) {
    return Response.json(error.message, { status: 500 });
  }

  console.log(`POST /gig/create/ response from database: ${statusText}`);

  return Response.json("success", { status: 200 });
}
