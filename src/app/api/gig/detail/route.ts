import { prisma } from "@/src/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * @notice Get details of gig using gig Id
 * @param req gigId
 * @returns Gig Details, including tasks and applicants
 * @author mgroovyank (MAYANK CHHIPA)
 */
export async function GET(req: NextRequest) {
  console.log("Inside GET /gig/detail/");

  const { searchParams } = new URL(req.url);
  const gigId: number = Number(searchParams.get("gigId"));
  let data;

  try {
    data = await prisma.gig.findUnique({
      where: { gigId: gigId },
      include: { gig_task: true, gig_offer: true },
    });
  } catch (error) {
    console.log(error);
    return Response.json("Unable to get gig details from database", {
      status: 500,
    });
  }
  console.log(
    `GET /gig/detail/ response from database: ${JSON.stringify(data)})`
  );

  return NextResponse.json(data, { status: 200 });
}
