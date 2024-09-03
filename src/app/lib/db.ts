import { PrismaClient } from "@prisma/client";

/**
 * global variable required only in development mode as nextjs hot reloads the client on changes and creates
   lot of connections
 */
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// you can create unique condition based on multiple columns
// create indexes on a column for faster query
