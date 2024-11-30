"use client";
import { useState } from "react";
import Compchatbubble from "./compchatbubble";
import styles from "./gig-applicants.module.css";

const GigApplicants = ({ applicants, switchOfferContext, selectedOfferId }) => {
  if (applicants && applicants.length == 0) {
    return <div></div>;
  }
  const [selectedFreelancerId, setSelectedFreelancerId] = useState<number>(
    applicants[0].freelancerId
  );
  return (
    <div className={styles.gigDetails}>
      <h1 className={styles.applicants}>Applicants</h1>
      <div className={styles.applicantList}>
        {applicants.map((offer: GigOffer) => {
          return (
            <div
              key={offer.offerId}
              className={
                styles.applicantDiv +
                " " +
                (selectedOfferId == offer.offerId
                  ? styles.selectedApplicantDiv
                  : "")
              }
              onClick={() => {
                switchOfferContext(offer);
              }}
            >
              <Compchatbubble
                property1="Default"
                msgAmmount="0"
                lastMessage="lastMessage"
                freelancerName="Roaring Kitty"
                time="00:00"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GigApplicants;
