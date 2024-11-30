"use client";
import styles from "./gig-description.module.css";
import CompsubmitTasks from "./compsubmit-tasks";
import CompdeadlineBox from "./compdeadline-box";
import CompbudgetBox from "./compbudget-box";
import BtniconText from "./btnicon-text";
import GigApplicants from "./gig-applicants";
import ChatWindow from "../chat/chat-window";
import { useState } from "react";
import ChatInput from "../chat/chat-input";
import FreelancerDetails from "./freelancer-details";
import Image from "next/image";
import ApproveFreelancerModal from "./approve-freelancer-modal/approve-freelancer-modal";
const GigDescription = ({
  applicantUsersMap,
  applicants,
  gig,
  clientId,
  freelancerId,
}) => {
  const [showGigDesc, setShowGigDesc] = useState<boolean>(false);
  const [showEditOfferModal, setShowEditOfferModal] = useState<boolean>(false);
  const [chatId, setChatId] = useState<string>(
    clientId + "-" + freelancerId + "-" + gig.gigId
  );
  const [selectedFreelancerId, setSelectedFreelancerId] =
    useState<number>(freelancerId);
  const hasSubmitted: boolean = false;
  const [selectedOfferId, setSelectedOfferId] = useState<number>(
    applicants[0].offerId
  );
  const [selectedOffer, setSelectedOffer] = useState<GigOffer>(applicants[0]);
  const switchOfferContext = (selectedOffer: GigOffer) => {
    setChatId(clientId + "-" + selectedOffer.freelancerId + "-" + gig.gigId);
    setSelectedFreelancerId(selectedOffer.freelancerId);
    setSelectedOfferId(selectedOffer.offerId);
  };
  return (
    <div className={styles.gigHeader}>
      <div className={styles.gigDetails}>
        <div className={[styles.compgigDescription].join(" ")}>
          <div
            className={styles.gigDescription1}
            onClick={() => {
              setShowGigDesc(!showGigDesc);
            }}
          >
            <b className={styles.gigDescription}>GIG Description</b>
            <Image
              className={styles.iconkeyboardArrowDown}
              width={24}
              height={24}
              alt=""
              src="/iconkeyboard-arrow-down.svg"
            />
          </div>
          <div
            className={
              showGigDesc
                ? styles.gigDescriptionShow
                : styles.gigdescriptionHidden
            }
          >
            {gig.description}
          </div>
        </div>
        <CompsubmitTasks
          property1="default"
          taskCompletedHide={false}
          taskCompleted="00"
          taskTotal="00"
          tasks={gig.gig_task}
        />
        <CompdeadlineBox
          date={(gig.expectedDeliveryDate as Date).toDateString()}
        />
        <CompbudgetBox budget={gig.gigBudget} />
        <div className={styles.offerActions}>
          <BtniconText
            buttonVariables="navy-st-m-def"
            iconHide
            button="Edit"
            btniconTextFlex="1"
            btniconTextAlignSelf="unset"
            iconeditSquare="/iconedit-square.svg"
            clickAction={() => {
              setShowEditOfferModal(true);
            }}
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
          selectedOfferId={selectedOfferId}
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
        <FreelancerDetails
          freelancer={applicantUsersMap.get(selectedFreelancerId)}
          offer={selectedOffer}
        />
      </div>
      {showEditOfferModal && <ApproveFreelancerModal />}
    </div>
  );
};

export default GigDescription;
