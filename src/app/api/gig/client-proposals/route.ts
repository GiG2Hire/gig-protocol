//api/gig/client-proposals/?client_id
import { prisma } from "@/src/app/lib/db";
import { isLoggedIn } from "@/src/app/actions/login";
import { NextResponse, NextRequest } from "next/server";
import { getRoleFromPayload, getUserIdFromPayload } from "@/src/app/actions/login";

/**
 * Get all offers for a specific gig
 * @param req Request object
 * @returns A list of proposals for client
 * @author alhonaut
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const client_id = parseInt(searchParams.get("client_id") || "0");
    // compare data from payload
    const payloadUserId = await getUserIdFromPayload();
    const payloadUserRole = await getRoleFromPayload();

    // check user authentication
    if (!await isLoggedIn()) {
        return NextResponse.json(
            { message: "User not authenticated." },
            { status: 401 }
        )
    }

    if (!client_id) {
        return NextResponse.json(
            { message: "Invalid client_id provided." },
            { status: 400 }
        )
    }

    if (payloadUserId !== client_id || payloadUserRole !== "Client") {
        return NextResponse.json(
            { message: "User don't have access to data." },
            { status: 401 }
        )
    }

    // retrieve data from Database for client
    const proposals = await prisma.gig.findMany({
        where: {
            clientId: client_id
        },
    });

    if (!proposals.length) {
        return NextResponse.json(
            { message: "No proposals found for client" },
            { status: 404 }
        );
    }

    // changed `bigint` into `string` for resolving issue with serialization BigInt from TypeScript
    return NextResponse.json(JSON.stringify(proposals, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value
    ), { status: 200 });
}