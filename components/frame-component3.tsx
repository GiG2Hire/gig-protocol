import type { NextPage } from "next";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.howWrapper, className].join(" ")}>
      <div className={styles.how}>
        <h1 className={styles.howToStart}>How to start a GIG</h1>
        <div className={styles.frameParent}>
          <FrameComponent4
            freelancer="Freelancer"
            signWithYourGitHubAccount="Sign with your GitHub account."
            exploreJobsMarketplace="Explore jobs marketplace."
            applyForJobs="Apply for jobs."
            getAcceptedAndChatWithYou="Get accepted and chat with your client."
            deliverYourJob="Deliver your job."
            getPaid="Get paid."
          />
          <FrameComponent4
            freelancer="Client"
            signWithYourGitHubAccount="Sign in."
            exploreJobsMarketplace="Post a job."
            applyForJobs="Escrow your payment."
            getAcceptedAndChatWithYou="Choose freelance and chat with him."
            deliverYourJob="Get your job delivered"
            getPaid="Payment after succesful deliver."
            propMinWidth="74px"
            propMinWidth1="103px"
            propMinWidth2="191px"
            propMinWidth3="214px"
            propMinWidth4="308px"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
