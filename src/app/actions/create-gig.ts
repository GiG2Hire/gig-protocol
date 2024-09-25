"use server";

import { supabase } from "@/src/utils/supabase";
import { getUserIdFromPayload } from "./login";
import { GIG_COMPLETION_STATUS } from "@/src/constants/appConstants";
import { findBestAPY } from "./choose-and-open";
import CONTRACT_ADDRESSES from "@/src/constants/contractAddresses.json";
import { prisma } from "../lib/db";

/**
 *
 * @param formData Form Data
 * @param deliveryDate expected date for job delivery by freelancer
 * @param projectBudget Amount escrowed
 * @param jobCategory ex: Development
 * @param tasks tasks as milestones for the gig
 * Create Gig Posting by Client
 */
export async function createGig(
  formData: FormData,
  deliveryDate: Date,
  projectBudget: number,
  jobCategory: number,
  tasks: GigTask[]
) {
  console.log("Trying to create a gig for client...");
  const clientId = await getUserIdFromPayload();
  const description: any = formData.get("description")?.toString;
  const budget: number = Number(formData.get("budget"));
  const title: any = formData.get("gigTitle");

  // form data validation
  //nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-form-validation

  if (description == "" || clientId == null || title == "") {
    return;
  }

  try {
    const gig = await prisma.gig.create({
      data: {
        clientId: clientId,
        title: title,
        description: description,
        gigValue: budget,
        completionStatus: GIG_COMPLETION_STATUS.OPEN,
        expectedDeliveryDate: deliveryDate,
        category: jobCategory,
      },
    });
    console.log(`POST /gig/create/ response from database: ${gig}`);
    console.log("Gig created successfully!!");

    tasks.forEach((task) => {
      task.gigId = gig.gigId;
    });
    const createdTasks = await prisma.gigTask.createMany({ data: tasks });
    console.log(
      `POST /gig/create/tasks response from database, created tasks: ${createdTasks.count}`
    );
    console.log("Tasks Created Successfully!!");
  } catch (error) {
    console.log(error);
  }

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
