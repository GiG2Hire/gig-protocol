import type { NextPage } from "next";
import FrameComponent8 from "./frame-component8";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.whyWrapper, className].join(" ")}>
      <div className={styles.why}>
        <h1 className={styles.talentSpeaksLouder}>
          Talent speaks louder than words
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <FrameComponent8
              freelance="/freelance-1.svg"
              verifyYourTalent="Verify your talent"
              getVerifiedWithGitHubAndB="Get verified with GitHub and be hired by your talent."
            />
            <FrameComponent8
              freelance="/payment-2.svg"
              verifyYourTalent="Get paid on-time"
              getVerifiedWithGitHubAndB="Get your payment as soon as you deliver."
              propDisplay="unset"
            />
          </div>
          <div className={styles.frameContainer}>
            <FrameComponent8
              freelance="/doc-1.svg"
              verifyYourTalent="Hired trustless"
              getVerifiedWithGitHubAndB="Hire verified professionals by their talent not their words."
              propDisplay="unset"
            />
            <FrameComponent8
              freelance="/shield-1.svg"
              verifyYourTalent="Safe payments"
              getVerifiedWithGitHubAndB="Escrowed payments for client and freelancer peace of mind."
              propDisplay="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
