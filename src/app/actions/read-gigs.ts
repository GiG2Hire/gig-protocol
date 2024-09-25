"use server";
import { prisma } from "../lib/db";

export const getActiveOffers = async (currPage: number, amount: number) => {
    let skip = currPage * amount; // amount of offers to skip per page

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
