import type { NextPage } from "next";
import styles from "./frame-component9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.heroWrapper, className].join(" ")}>
      <div className={styles.hero} data-scroll-to="heroContainer">
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <button className={styles.liveSoonParent}>
              <b className={styles.liveSoon}>Live Soon</b>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
            </button>
            <b className={styles.payToWork}>
              Pay to work? Pay to hire?. Not here ;)
            </b>
            <h1 className={styles.theRightWayContainer}>
              <p className={styles.theRightWay}>{`The Right Way `}</p>
              <p className={styles.toGig}>to GIG</p>
            </h1>
          </div>
          <div className={styles.beAnEarlyBirdParent}>
            <b className={styles.beAnEarly}>Be an early bird</b>
            <div className={styles.btnShadowParent}>
              <button className={styles.btnShadow}>
                <b className={styles.text}>Freelancer</b>
              </button>
              <button className={styles.btnShadow1}>
                <b className={styles.text1}>Client</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.boiNobgParent}>
            <img className={styles.boiNobgIcon} alt="" src="/boinobg@2x.png" />
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <button className={styles.statusParent}>
                  <div className={styles.status}>
                    <img
                      className={styles.checkSmallIcon}
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                  <b className={styles.taskDone}>Task done.</b>
                </button>
              </div>
              <div className={styles.frameWrapper2}>
                <button className={styles.lovedYourWorkWrapper}>
                  <b className={styles.lovedYourWork}>Loved your work!</b>
                </button>
              </div>
              <div className={styles.frameWrapper3}>
                <button className={styles.paymentParent}>
                  <img
                    className={styles.paymentIcon}
                    alt=""
                    src="/payment.svg"
                  />
                  <div className={styles.paymentReceived}>Payment received</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper4}>
                <button className={styles.paymentGroup}>
                  <img
                    className={styles.paymentIcon1}
                    alt=""
                    src="/payment.svg"
                  />
                  <div className={styles.paymentEscrowed}>Payment escrowed</div>
                </button>
              </div>
              <div className={styles.frameWrapper5}>
                <button className={styles.freelanceParent}>
                  <img
                    className={styles.freelanceIcon}
                    alt=""
                    src="/freelance.svg"
                  />
                  <b className={styles.freelanceAccepted}>Freelance Accepted</b>
                </button>
              </div>
              <div className={styles.frameWrapper6}>
                <button className={styles.workingOnItWrapper}>
                  <b className={styles.workingOnIt}>Working on it!</b>
                </button>
              </div>
            </div>
            <img
              className={styles.gurlNobgIcon}
              loading="lazy"
              alt=""
              src="/gurlnobg@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
