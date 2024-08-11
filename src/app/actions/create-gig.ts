"use server";

import { supabase } from "@/src/utils/supabase";
import { getUserIdFromPayload } from "./login";
import { GIG_COMPLETION_STATUS } from "@/src/constants/appConstants";
import { approveUSDCandOpenProposal, findBestAPY } from "./choose-and-open";
import CONTRACT_ADDRESSES from "@/src/constants/contractAddresses.json";

/**
 * Create Gig posting by client
 */
export async function createGig(formData: FormData) {
  console.log("Trying to create a gig for client...");
  const clientId = await getUserIdFromPayload();
  const description = formData.get("description");
  const budget = formData.get("budget");

  const { status, statusText, error } = await supabase.from("gig").insert({
    client_id: clientId,
    description: description,
    gig_value: budget,
    completion_status: GIG_COMPLETION_STATUS.OPEN,
  });

  console.log(`POST /gig/create/ response from database: ${statusText}`);

  if (error) {
    console.log(error);
  }

  console.log("Gig created successfully!!");

  // sender deployed on Avalance Fuji Testnet
  // const ccipLendingProtocolAddress = CONTRACT_ADDRESSES[43113][0];
  // const usdcToken: string = process.env.NEXT_PUBLIC_AVALANCHE_FUJI_USDC_TOKEN;
  // const account: any = process.env.NEXT_PUBLIC_FUJI_PRIVATE_KEY;
  // const chainId = 43113;
  // const rpcUrl = "";
  const amount = 250;

  // Find chain with best APY and stake money on the chain with best APY
  // findBestAPY(amount);
}
