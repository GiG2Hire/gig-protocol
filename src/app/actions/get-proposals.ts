"use server";
import { supabase } from "@/src/utils/supabase";

export const getActiveProposals = async (currPage: number, limitPage: number) => {
    let { data: gig, error } = await supabase
        .from('gig')
        .select('*')
        .range(currPage, limitPage);

    if (error) {
        throw new Error("Error occurs when trying to read data from Database.");
    }

    return gig;
}