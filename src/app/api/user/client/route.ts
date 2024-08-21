import { prisma } from "@/src/app/lib/db";
import { supabase } from "@/src/utils/supabase";

/**
 * Join user as Client role
 * @param req userId and role=Client
 * @returns OK response upon success/ error upon failure
 * @author mgroovyank(MAYANK CHHIPA)
 */
export async function POST(req: Request) {
  const { userId, role } = await req.json();
  try {
    const data = await prisma.user.update({
      where: { userId: userId },
      data: { role: role },
    });
    console.log(`data:` + data);
  } catch (error) {
    console.log(`error:` + error);
    return new Response("Joining as Client Failed", { status: 500 });
  }
  return new Response("OK");
}
