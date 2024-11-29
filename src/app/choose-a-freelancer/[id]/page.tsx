import FrameComponent from "../../components/choose-a-freelancer/frame-component";
import styles from "./ScreenchatApplicants.module.css";
import GigDescription from "../../components/choose-a-freelancer/gig-description";
import FreelancerDetails from "../../components/choose-a-freelancer/freelancer-details";
import ChatWindow from "../../components/chat/chat-window";
import ChatInput from "../../components/chat/chat-input";
import { prisma } from "../../lib/db";
import { getMessages } from "../../actions/get-messages";
import { getRoleFromPayload, getUserIdFromPayload } from "../../actions/login";
import Compchatbubble from "../../components/choose-a-freelancer/compchatbubble";
import GigApplicants from "../../components/choose-a-freelancer/gig-applicants";
import { useState } from "react";

export type GigHeaderType = {
  className?: string;
};

const ScreenchatApplicants = async ({ params }: { params: any }) => {
  const gigId: number = Number(params.id);
  let messages: ChatMessage[] = [];
  const currentUser: number = (await getUserIdFromPayload()) as number;
  let chatId: string = "";
  const currUserRole: string = (await getRoleFromPayload()) as string;
  const hasSubmitted = true;
  let freelancerId: number = -1;
  let applicants: GigOffer[] = [];

  const getGigDescription = async () => {
    const gig = await prisma.gig.findUnique({
      where: { gigId: gigId },
      include: { gig_task: true, gig_offer: true },
    });
    console.log(gig);
    freelancerId = gig?.gig_offer[0].freelancerId as number;
    chatId = gig?.clientId + "-" + freelancerId + "-" + gig?.gigId;
    messages = (await getMessages(chatId)) as ChatMessage[];
    console.log(messages);
    applicants = gig?.gig_offer as GigOffer[];
  };

  await Promise.all([getGigDescription()]);

  return (
    <div className={styles.screenchatApplicants}>
      <FrameComponent />
      <section className={styles.gigHeaderWrapper}>
        <GigDescription applicants={applicants} freelancerId={freelancerId} />
      </section>
    </div>
  );
};

export default ScreenchatApplicants;
