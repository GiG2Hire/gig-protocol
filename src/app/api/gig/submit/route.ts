// api/gig/submit
import { NextResponse } from 'next/server';
import { prisma } from '@/src/app/lib/db';

//
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { gigId, freelancerId } = body;

        // Check if gigId is provided
        if (!gigId) {
            return NextResponse.json({ message: 'gigId is required' }, { status: 400 });
        }
        // Check if freelancerId is provided
        if (!freelancerId) {
            return NextResponse.json({ message: 'freelancerId is required' }, { status: 400 });
        }
        // Check if gigId exists
        const gig = await prisma.gig.findUnique({
            where: { gigId: gigId },
        });
        if (!gig) {
            return NextResponse.json({ message: "gigId does not exist" }, { status: 400 });
        }
        // Check if gig.status is not "submitted"
        if (gig.completionStatus == "submitted") {
            return NextResponse.json({ message: "Already Submitted" }, { status: 400 });
        }
        // Check if freelancerId exists
        const freelancer = await prisma.user.findUnique({
            where: { userId: freelancerId },
        });
        if (!freelancer) {
            return NextResponse.json({ message: "freelancerId does not exist" }, { status: 400 });
        }
        // Check if freelancerId is the same as gig.freelancerId
        //console.log(freelancerId, Number(gig.freelancerId))
        if (freelancerId !== Number(gig.freelancerId)) {
            return NextResponse.json({ message: "freelancerId does not match gig.freelancerId" }, { status: 400 });
        }
        // Update the gig.completionStatus to "submitted"
        await prisma.gig.update({
            where: { gigId: gigId },
            data: { completionStatus: "submitted" },
        });
        return NextResponse.json({ message: "gig submitted successfully" }, { status: 200 });
        
    } catch (error) {
        console.error('Error accepting offer: ', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}