import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.noFeesMeansZeroFeesWrapper}>
          <h1 className={styles.noFeesMeans}>No fees, means zero fees</h1>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.freelancerFeesParent}>
            <div className={styles.freelancerFees}>Freelancer fees</div>
            <div className={styles.employerFeesParent}>
              <div className={styles.employerFees}>Employer fees</div>
              <div className={styles.withdrawalFeesParent}>
                <div className={styles.withdrawalFees}>Withdrawal fees</div>
                <div className={styles.processingTimes}>Processing times</div>
                <div className={styles.payToWork}>Pay to work?</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.layer3Wrapper}>
                <img
                  className={styles.layer3Icon}
                  loading="lazy"
                  alt=""
                  src="/layer-3.svg"
                />
              </div>
              <div className={styles.wrapper}>
                <b className={styles.b}>0</b>
              </div>
              <div className={styles.container}>
                <b className={styles.b1}>0</b>
              </div>
              <div className={styles.frame}>
                <b className={styles.b2}>0</b>
              </div>
              <b className={styles.instant}>Instant</b>
              <div className={styles.noWrapper}>
                <b className={styles.no}>No</b>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent3}>
                      <FrameComponent6
                        upworkLogo1="/upworklogo-1.svg"
                        upTo10="Up to 10%"
                      />
                      <FrameComponent6
                        upworkLogo1="/fiverr-1.svg"
                        upTo10="Up to 20%"
                        propWidth="105.5px"
                      />
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <b className={styles.b3}>2.75%</b>
                    <b className={styles.b4}>5.5% + $2.5</b>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper4}>
                  <div className={styles.upTo30Parent}>
                    <b className={styles.upTo30}>Up to $30</b>
                    <b className={styles.upTo301}>Up to $30</b>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.upTo22DaysParent}>
                    <b className={styles.upTo22}>Up to 22 days</b>
                    <div className={styles.buyCreditsWrapper}>
                      <b className={styles.buyCredits}>Buy credits</b>
                    </div>
                  </div>
                  <div className={styles.upTo14DaysParent}>
                    <b className={styles.upTo14}>Up to 14 days</b>
                    <div className={styles.noContainer}>
                      <b className={styles.no1}>No</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
