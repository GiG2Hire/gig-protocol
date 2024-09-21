"use server";
import { prisma } from "../lib/db";

export const getActiveProposals = async () => {
  //   let skip = currPage * amount; // amount of proposals to skip per page

  let gigs = await prisma.gig.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      gig_task: true,
    },
  });

  return gigs;
};
