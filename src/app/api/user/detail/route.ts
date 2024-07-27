import { supabase } from "@/src/utils/supabase";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const address = searchParams.get('address')
    console.log("trying to see if user already exists");
    let { data, error } = await supabase.from('user').select().eq("address", address);
    console.log(data);
    if(error){
        return new Response(error.message, { status: 500 });
    }
    if(data?.length == 1){
        console.log("Existing user found!");
        return Response.json(data);
    }
    return Response.json(data);
}