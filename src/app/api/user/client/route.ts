import { supabase } from "@/src/utils/supabase";

export async function POST(req: Request) {
    const{userId, role} = await req.json();
    const { data, error } = await supabase.from('user').update({ role: role }).eq('user_id', userId).select()
    console.log(`data:` + data);
    if(error){
      console.log(`error:` + error.message);
      return new Response(error.message, { status: 500 });
    }
    return new Response("OK");

}