import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onActionsClick = useCallback(() => {
    // Please sync "screen/approve-freelance" to the project
  }, []);

  return (
    <section
      className={[styles.screenchatApplicantsInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.iconterminalWrapper}>
            <img
              className={styles.iconterminal}
              loading="lazy"
              alt=""
              src="/iconterminal.svg"
            />
          </div>
          <div className={styles.applicantInfo}>
            <h1 className={styles.applicantsChat}>Applicants Chat</h1>
            <h3 className={styles.titleOfThe}>TItle of the offer here</h3>
          </div>
        </div>
        <button className={styles.actions} onClick={onActionsClick}>
          <a className={styles.backToGigs}>Back to GIGs</a>
          <img className={styles.replyIcon} alt="" src="/reply.svg" />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent1;
