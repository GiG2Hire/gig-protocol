// api/gig/submit
import { NextResponse } from 'next/server';
import { prisma } from '@/src/app/lib/db';

export async function POST(req: Request) {
    try {
        const { gigId, freelancerId } = await req.json();

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
            where: { gigId },
        });

        if (!gig) {
            return NextResponse.json({ message: "Gig not found" }, { status: 404 });
        }

        
        if (gig.completionStatus === "OPEN") {
            return NextResponse.json({ message: "Gig not assigned" }, { status: 400 });
        }
        
        if (gig.completionStatus === "submitted") {
            return NextResponse.json({ message: "Gig already submitted" }, { status: 400 });
        }

        if (freelancerId !== Number(gig.freelancerId)) {
            return NextResponse.json({ message: "Unauthorized: Freelancer ID does not match gig's freelancer" }, { status: 403 });
        }
        // Update the gig.completionStatus to "submitted"
        await prisma.gig.update({
            where: { gigId },
            data: { completionStatus: "submitted" },
        });

        return NextResponse.json({ message: "Gig submitted successfully" }, { status: 200 });
        
    } catch (error) {

        console.error('Error submitting gig: ', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}