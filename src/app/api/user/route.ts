import { supabase } from "@/src/utils/supabase";

export async function POST(req: Request) {
    const{address} = await req.json();
    console.log("New user needs to be created!!");
    const { data, error } = await supabase.from('user').insert({ address: address }).select();
    console.log(`data:` + data);
    if(error){
      console.log(`error:` + error.message);
      return new Response(error.message, { status: 500 });
    }
    return Response.json(data);
}