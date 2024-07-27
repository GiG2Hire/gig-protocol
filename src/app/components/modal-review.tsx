import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./modal-review.module.css";

export type ModalReviewType = {
  className?: string;
};

const ModalReview: NextPage<ModalReviewType> = ({ className = "" }) => {
  return (
    <div className={[styles.modalReview, className].join(" ")}>
      <div className={styles.reviewOfferParent}>
        <a className={styles.reviewOffer}>Review Offer</a>
        <div className={styles.btnClose}>
          <img
            className={styles.closeSmallIcon}
            loading="lazy"
            alt=""
            src="/close-small.svg"
          />
        </div>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.developADefiDashboardForHParent}>
          <h1 className={styles.developADefi}>
            Develop a DeFi Dashboard for Hamster Coins
          </h1>
          <blockquote className={styles.lookingForAn}>
            “Looking for an experienced Freelance that can deliver in a timely
            manner a clean and well designed Dashboard, to manage, swap and keep
            tracks of multiple Hamster Coins, we are a team of VCs looking to
            find long term collaborations. Messages are open on the global chat”
          </blockquote>
          <div className={styles.frameGroup}>
            <div className={styles.taskSquare1Parent}>
              <img
                className={styles.taskSquare1Icon}
                loading="lazy"
                alt=""
                src="/tasksquare-1.svg"
              />
              <b className={styles.tasks}>10 Tasks</b>
            </div>
            <div className={styles.frameContainer}>
              <FrameComponent
                includeGraphicsOnThePNLs="Include graphics on the PNLs"
                yellowAndBlackForTheUI="Yellow and Black for the UI"
                hamstersAnimations="Hamsters animations"
                includeHistoricalSwaps="Include historical swaps"
              />
              <FrameComponent
                includeGraphicsOnThePNLs="Include socials section"
                yellowAndBlackForTheUI="Include coin tracker"
                hamstersAnimations="Add conversion rate to pounds"
                includeHistoricalSwaps="Make it responsive"
              />
              <div className={styles.swapBridgeRequirementElemenParent}>
                <div className={styles.swapBridgeRequirementElemen}>
                  <input className={styles.btnCheck} type="checkbox" />
                  <div className={styles.addSwapSection}>Add Swap section</div>
                </div>
                <div className={styles.swapBridgeRequirementElemen1}>
                  <input className={styles.btnCheck1} type="checkbox" />
                  <div className={styles.addBridgeSection}>
                    Add Bridge section
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.deliveryDateElementsParent}>
              <div className={styles.deliveryDateElements}>
                <img
                  className={styles.eventIcon}
                  loading="lazy"
                  alt=""
                  src="/event2.svg"
                />
                <h1 className={styles.jobDeliveryDate}>Job Delivery Date</h1>
              </div>
              <div className={styles.saturday17OfFebruary2024Parent}>
                <div className={styles.saturday17OfContainer}>
                  <span>{`Saturday `}</span>
                  <b>17 of February</b>
                  <span>, 2024</span>
                </div>
                <div className={styles.at2359Of}>
                  *at 23:59 of the specified date.
                </div>
              </div>
            </div>
            <div className={styles.budgetElementsParent}>
              <div className={styles.budgetElements}>
                <img
                  className={styles.moneyBag1Icon}
                  loading="lazy"
                  alt=""
                  src="/moneybag-11.svg"
                />
                <h1 className={styles.projectBudget}>Project Budget</h1>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.usdcSimplified1Wrapper}>
                  <img
                    className={styles.usdcSimplified1Icon}
                    loading="lazy"
                    alt=""
                    src="/usdc-simplified-1.svg"
                  />
                </div>
                <b className={styles.amountSeparator}>250</b>
                <h1 className={styles.usdc}>USDC</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btnJoingigParent}>
          <div className={styles.btnJoingig}>
            <h1 className={styles.withdrawFromOffer}>Withdraw from offer</h1>
          </div>
          <button className={styles.btnDashboard}>
            <img
              className={styles.monitorDashboard1Icon}
              alt=""
              src="/monitordashboard-1.svg"
            />
            <b className={styles.goToDashboard}>Go to Dashboard</b>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalReview;
