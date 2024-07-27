import type { NextPage } from "next";
import styles from "./btn-freelancer.module.css";

export type BtnFreelancerType = {
  className?: string;
  frame165?: string;
  max?: string;
};

const BtnFreelancer: NextPage<BtnFreelancerType> = ({
  className = "",
  frame165,
  max,
}) => {
  return (
    <div className={[styles.btnFreelancer, className].join(" ")}>
      <img
        className={styles.btnFreelancerChild}
        loading="lazy"
        alt=""
        src={frame165}
      />
      <div className={styles.frameParent}>
        <div className={styles.maxParent}>
          <b className={styles.max}>{max}</b>
          <div className={styles.onlineParent}>
            <b className={styles.online}>Online</b>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.monthsParent}>
          <b className={styles.months}>2 Months</b>
          <div className={styles.onGig2hire}>on GiG2Hire</div>
        </div>
        <div className={styles.jobsParent}>
          <b className={styles.jobs}>5 Jobs</b>
          <div className={styles.successful}>successful</div>
        </div>
      </div>
    </div>
  );
};

export default BtnFreelancer;
