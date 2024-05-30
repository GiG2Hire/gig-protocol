import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.contactUsWrapper, className].join(" ")}>
      <div className={styles.contactUs}>
        <div className={styles.contactUsInner}>
          <div className={styles.investOnTheFutureOfHiringParent}>
            <h1 className={styles.investOnThe}>
              Invest on the future of hiring.
            </h1>
            <div className={styles.wantToBePartOfAGameChanParent}>
              <b className={styles.wantToBe}>
                Want to be part of a game changer?
              </b>
              <div className={styles.contactUsAnd}>
                Contact us and know how.
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.mail1Wrapper}>
                <img
                  className={styles.mail1Icon}
                  loading="lazy"
                  alt=""
                  src="/mail-1.svg"
                />
              </div>
              <b className={styles.hellogig2hirecom}>hello@gig2hire.com</b>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-5.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector-6.svg" />
            <img className={styles.groupIcon} alt="" src="/group-5.svg" />
          </div>
          <div className={styles.layer5Wrapper}>
            <img
              className={styles.layer5Icon}
              loading="lazy"
              alt=""
              src="/layer-5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
