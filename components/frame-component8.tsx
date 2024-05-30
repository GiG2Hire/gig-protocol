import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
  freelance?: string;
  verifyYourTalent?: string;
  getVerifiedWithGitHubAndB?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({
  className = "",
  freelance,
  verifyYourTalent,
  getVerifiedWithGitHubAndB,
  propDisplay,
}) => {
  const verifyYourTalentStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <button className={styles.freelanceWrapper}>
          <img className={styles.freelanceIcon} alt="" src={freelance} />
        </button>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.verifyYourTalentParent}>
          <b className={styles.verifyYourTalent} style={verifyYourTalentStyle}>
            {verifyYourTalent}
          </b>
          <div className={styles.getVerifiedWith}>
            {getVerifiedWithGitHubAndB}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
