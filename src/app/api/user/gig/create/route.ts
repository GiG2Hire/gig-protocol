import { supabase } from "@/src/utils/supabase";
import { redirect } from "next/navigation";

export async function POST(req: Request) {
  console.log("Inside POST /user/freelancer/");

  const { userId, role } = await req.json();
  const { data, error } = await supabase
    .from("user")
    .update({ role: role })
    .eq("user_id", userId)
    .select();

  console.log(
    `POST /user/freelancer response from database: ${JSON.stringify(data)}`
  );

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const updatedUser: User = data[0];
  return Response.json(updatedUser, { status: 200 });
  // return Response.redirect("http://localhost:3000/freelancer-dashboard");
}
