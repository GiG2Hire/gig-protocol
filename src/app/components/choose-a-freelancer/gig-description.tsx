"use client";
import styles from "./gig-description.module.css";
import CompgigDescription from "./compgig-description";
import CompsubmitTasks from "./compsubmit-tasks";
import CompdeadlineBox from "./compdeadline-box";
import CompbudgetBox from "./compbudget-box";
import Compchatbubble from "./compchatbubble";
import BtniconText from "./btnicon-text";
import GigApplicants from "./gig-applicants";
import ChatWindow from "../chat/chat-window";
import { useState } from "react";
import ChatInput from "../chat/chat-input";
import FreelancerDetails from "./freelancer-details";
const GigDescription = ({ applicants, freelancerId }) => {
  const switchOfferContext = () => {};
  const [chatId, setChatId] = useState<string>("");
  const hasSubmitted: boolean = true;
  return (
    <div className={styles.gigHeader}>
      <div className={styles.gigDetails}>
        <CompgigDescription
          property1="default"
          gigDescription="gigDescription"
        />
        <CompsubmitTasks
          property1="default"
          taskCompletedHide={false}
          taskCompleted="00"
          taskTotal="00"
        />
        <CompdeadlineBox date="Nov 16, 2024" />
        <CompbudgetBox budget="0000" />
        <div className={styles.offerActions}>
          <BtniconText
            buttonVariables="navy-st-m-def"
            iconHide
            button="Edit"
            btniconTextFlex="1"
            btniconTextAlignSelf="unset"
            iconeditSquare="/iconedit-square.svg"
          />
          <BtniconText
            buttonVariables="red-m-def"
            iconHide={false}
            button="Cancel"
            iconeditSquare="/iconedit-square.svg"
          />
        </div>
        <GigApplicants
          applicants={applicants}
          switchOfferContext={switchOfferContext}
        />
      </div>
      <div className={styles.chatInputContent}>
        <ChatWindow chatId={chatId} className="" />
        <div className={styles.chatInputContentInner}>
          <ChatInput
            hasSubmitted={hasSubmitted}
            receiverUser={freelancerId}
            chatId={chatId}
          />
        </div>
      </div>
      <div className={styles.gigDetails1}>
        <FreelancerDetails freelancerId={freelancerId} />
      </div>
    </div>
  );
};

export default GigDescription;
