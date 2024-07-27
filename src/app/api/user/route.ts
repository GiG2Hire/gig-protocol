import { supabase } from "@/src/utils/supabase";

export async function POST(req: Request) {
    const{address} = await req.json();
    const { data, error } = await supabase.from('user').upsert({ address: address }).select();
    console.log(`data:` + data);
    if(error){
      console.log(`error:` + error.message);
      return new Response(error.message, { status: 500 });
    }
    return new Response("OK");

}