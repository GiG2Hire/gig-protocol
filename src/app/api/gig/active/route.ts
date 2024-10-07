import { getUserIdFromPayload, isLoggedIn } from "@/src/app/actions/login";
import { prisma } from "@/src/app/lib/db";

/**
 * @notice Get chat messages for chat window display
 * @param req request made by current freelancer
 * @returns List of active gigs for currently logged in freelancer
 * @author mgroovyank (MAYANK CHHIPA)
 */
export async function GET(req: Request) {
  console.log("Inside GET /api/gig/active-gigs/");
  const userLoggedIn: boolean = await isLoggedIn();
  if (!userLoggedIn) {
    return;
  }
  const freelancer = await getUserIdFromPayload();
  try {
    const activeGigs = await prisma.gig.findMany({
      where: {
        freelancerId: freelancer,
      },
    });
    console.log(
      `GET /api/gig/active-gigs/ response from database. Count of messages received: ${activeGigs.length})`
    );
    return Response.json(activeGigs, { status: 200 });
  } catch (error: unknown) {
    return Response.json(error, {
      status: 500,
    });
  }
}
