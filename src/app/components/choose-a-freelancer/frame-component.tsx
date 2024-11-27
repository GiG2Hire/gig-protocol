import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.screenchatApplicantsInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.iconterminalWrapper}>
            <Image
              className={styles.iconterminal}
              loading="lazy"
              width={60}
              height={60}
              alt=""
              src="/iconterminal.svg"
            />
          </div>
          <div className={styles.applicantInfo}>
            <h1 className={styles.applicantsChat}>Applicants Chat</h1>
            <h1 className={styles.titleOfThe}>TItle of the offer here</h1>
          </div>
        </div>
        <button className={styles.actions}>
          <a className={styles.backToGigs}>Back to GIGs</a>
          <Image
            className={styles.replyIcon}
            width={24}
            height={24}
            alt=""
            src="/reply.svg"
          />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
