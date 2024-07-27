import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
  freelancer?: string;
  signWithYourGitHubAccount?: string;
  exploreJobsMarketplace?: string;
  applyForJobs?: string;
  getAcceptedAndChatWithYou?: string;
  deliverYourJob?: string;
  getPaid?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propMinWidth4?: CSSProperties["minWidth"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  freelancer,
  signWithYourGitHubAccount,
  exploreJobsMarketplace,
  applyForJobs,
  getAcceptedAndChatWithYou,
  deliverYourJob,
  getPaid,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
}) => {
  const signWithYourStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const exploreJobsMarketplaceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const applyForJobsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const deliverYourJobStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const getPaidStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  return (
    <div className={[styles.freelancerParent, className].join(" ")}>
      <h1 className={styles.freelancer}>{freelancer}</h1>
      <div className={styles.frameParent}>
        <div className={styles.statusParent}>
          <div className={styles.status}>
            <img
              className={styles.checkSmallIcon}
              alt=""
              src="/check-small-1.svg"
            />
          </div>
          <div className={styles.signWithYour} style={signWithYourStyle}>
            {signWithYourGitHubAccount}
          </div>
        </div>
        <div className={styles.statusGroup}>
          <div className={styles.status1}>
            <img
              className={styles.checkSmallIcon1}
              alt=""
              src="/check-small-1.svg"
            />
          </div>
          <div
            className={styles.exploreJobsMarketplace}
            style={exploreJobsMarketplaceStyle}
          >
            {exploreJobsMarketplace}
          </div>
        </div>
        <div className={styles.statusContainer}>
          <div className={styles.status2}>
            <img
              className={styles.checkSmallIcon2}
              alt=""
              src="/check-small-1.svg"
            />
          </div>
          <div className={styles.applyForJobs} style={applyForJobsStyle}>
            {applyForJobs}
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.status3}>
            <img
              className={styles.checkSmallIcon3}
              alt=""
              src="/check-small-1.svg"
            />
          </div>
          <div className={styles.getAcceptedAnd}>
            {getAcceptedAndChatWithYou}
          </div>
        </div>
        <div className={styles.statusParent1}>
          <div className={styles.status4}>
            <img
              className={styles.checkSmallIcon4}
              alt=""
              src="/check-small-1.svg"
            />
          </div>
          <div className={styles.deliverYourJob} style={deliverYourJobStyle}>
            {deliverYourJob}
          </div>
        </div>
        <div className={styles.statusParent2}>
          <div className={styles.status5}>
            <img
              className={styles.checkSmallIcon5}
              alt=""
              src="/check-small-1.svg"
            />
          </div>
          <div className={styles.getPaid} style={getPaidStyle}>
            {getPaid}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
