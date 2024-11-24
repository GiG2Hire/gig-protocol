"use server";
import { prisma } from "../lib/db";

const getGigTasksByGigId = async (gigId: number) => {
    let tasks = await prisma.gigTask.findMany({
        where: {
            gigId: gigId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return tasks;
};

export const getActiveProposals = async (currPage: number, amount: number) => {
    let skip = currPage * amount; // amount of proposals to skip per page

    let gigs = await prisma.gig.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        skip: skip,
        take: amount
    })

    for (let gigObj of gigs) {
        gigObj["tasks"] = await getGigTasksByGigId(gigObj.gigId);
    }

    return gigs;
}
