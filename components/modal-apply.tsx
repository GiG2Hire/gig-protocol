import type { NextPage } from "next";
import styles from "./modal-apply.module.css";

export type ModalApplyType = {
  className?: string;
};

const ModalApply: NextPage<ModalApplyType> = ({ className = "" }) => {
  return (
    <div className={[styles.modalApply, className].join(" ")}>
      <div className={styles.congratsYouAppliedToAGigWrapper}>
        <h1 className={styles.congratsYouApplied}>
          Congrats! You applied to a gig 🪅
        </h1>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.mobileAppDesignUxuiSpeciaParent}>
          <h1 className={styles.mobileAppDesign}>
            Mobile App Design UX/UI specialist
          </h1>
          <p className={styles.youJoinedA}>
            You joined a pool of interested freelancers, and will get news soon
            from the client.
          </p>
        </div>
        <div className={styles.frameGroup}>
          <input className={styles.frameChild} type="file" />
          <div className={styles.eventParent}>
            <img
              className={styles.eventIcon}
              loading="lazy"
              alt=""
              src="/event1.svg"
            />
            <b className={styles.delivery}>Delivery:</b>
            <div className={styles.div}>17.06.2024</div>
          </div>
          <div className={styles.moneyBag1Parent}>
            <img
              className={styles.moneyBag1Icon}
              loading="lazy"
              alt=""
              src="/moneybag-1.svg"
            />
            <b className={styles.projectBudget}>Project Budget:</b>
            <div className={styles.emptyDA}>250</div>
            <div className={styles.dai}>DAI</div>
          </div>
        </div>
        <div className={styles.backParent}>
          <b className={styles.back}>Back</b>
          <button className={styles.btnDashboard}>
            <img
              className={styles.monitorDashboard1Icon}
              alt=""
              src="/monitordashboard-1.svg"
            />
            <b className={styles.goToDashboard}>Go to Dashboard</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalApply;
