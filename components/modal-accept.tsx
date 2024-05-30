import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import BtnFreelancer from "./btn-freelancer";
import styles from "./modal-accept.module.css";

export type ModalAcceptType = {
  className?: string;
};

const ModalAccept: NextPage<ModalAcceptType> = ({ className = "" }) => {
  return (
    <div className={[styles.modalAccept, className].join(" ")}>
      <button className={styles.acceptFreelanceParent}>
        <a className={styles.acceptFreelance}>Accept Freelance</a>
        <div className={styles.btnCloseWrapper}>
          <div className={styles.btnClose}>
            <img
              className={styles.closeSmallIcon}
              alt=""
              src="/close-small1.svg"
            />
          </div>
        </div>
      </button>
      <section className={styles.modalAcceptInner}>
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
          <div className={styles.frameParent}>
            <div className={styles.taskSquare1Parent}>
              <img
                className={styles.taskSquare1Icon}
                loading="lazy"
                alt=""
                src="/tasksquare-1.svg"
              />
              <b className={styles.tasks}>10 Tasks</b>
            </div>
            <div className={styles.requirementRowOneParent}>
              <FrameComponent
                includeGraphicsOnThePNLs="Include graphics on the PNLs"
                yellowAndBlackForTheUI="Yellow and Black for the UI"
                hamstersAnimations="Hamsters animations"
                includeHistoricalSwaps="Include historical swaps"
                propMinWidth="205px"
                propColor="#0c0f0a"
                propColor1="#0c0f0a"
                propColor2="#0c0f0a"
                propColor3="#0c0f0a"
                propTextDecoration="unset"
              />
              <FrameComponent
                includeGraphicsOnThePNLs="Include socials section"
                yellowAndBlackForTheUI="Include coin tracker"
                hamstersAnimations="Add conversion rate to pounds"
                includeHistoricalSwaps="Make it responsive"
                propMinWidth="205px"
                propColor="#0c0f0a"
                propColor1="#0c0f0a"
                propColor2="#0c0f0a"
                propColor3="#0c0f0a"
                propTextDecoration="none"
              />
              <div className={styles.requirementBridge}>
                <div className={styles.bridgeCheckbox}>
                  <input className={styles.btnCheck} type="checkbox" />
                  <div className={styles.addSwapSection}>Add Swap section</div>
                </div>
                <div className={styles.bridgeCheckbox1}>
                  <input className={styles.btnCheck1} type="checkbox" />
                  <div className={styles.addBridgeSection}>
                    Add Bridge section
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.eventParent}>
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
            <div className={styles.frameDiv}>
              <div className={styles.moneyBag1Parent}>
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
                <b className={styles.budgetSeparator}>250</b>
                <h1 className={styles.usdc}>USDC</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.modalAcceptChild}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.gig2hire1Wrapper}>
              <img
                className={styles.gig2hire1Icon}
                loading="lazy"
                alt=""
                src="/gig2hire-13.svg"
              />
            </div>
            <b className={styles.chooseFreelancer}>Choose Freelancer</b>
          </div>
          <div className={styles.btnFreelancerParent}>
            <div className={styles.btnFreelancer}>
              <img
                className={styles.freelancerCardIcon}
                loading="lazy"
                alt=""
                src="/frame-1652@2x.png"
              />
              <div className={styles.freelancerInfo}>
                <div className={styles.maxParent}>
                  <b className={styles.max}>Max</b>
                  <div className={styles.freelancerStatus}>
                    <div className={styles.onlineParent}>
                      <b className={styles.online}>Online</b>
                      <div className={styles.statusIconWrapper}>
                        <div className={styles.statusIcon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.monthsParent}>
                  <b className={styles.months}>6 Months</b>
                  <div className={styles.onGig2hire}>on GiG2Hire</div>
                </div>
                <div className={styles.jobsParent}>
                  <b className={styles.jobs}>5 Jobs</b>
                  <div className={styles.successful}>successful</div>
                </div>
              </div>
            </div>
            <BtnFreelancer frame165="/frame-165-12@2x.png" max="Jade" />
            <BtnFreelancer frame165="/frame-165-22@2x.png" max="Jade" />
            <BtnFreelancer frame165="/frame-165-31@2x.png" max="Jake" />
            <BtnFreelancer frame165="/frame-165-41@2x.png" max="Daniel" />
            <div className={styles.btnFreelancer1}>
              <img
                className={styles.btnFreelancerChild}
                loading="lazy"
                alt=""
                src="/frame-165-5@2x.png"
              />
              <div className={styles.frameParent4}>
                <div className={styles.maxGroup}>
                  <b className={styles.max1}>Eliana</b>
                  <div className={styles.onlineGroup}>
                    <b className={styles.online1}>Online</b>
                    <div className={styles.freelancerExperience} />
                  </div>
                </div>
                <div className={styles.monthsGroup}>
                  <b className={styles.months1}>6 Months</b>
                  <div className={styles.onGig2hire1}>on GiG2Hire</div>
                </div>
                <div className={styles.jobsGroup}>
                  <b className={styles.jobs1}>5 Jobs</b>
                  <div className={styles.successful1}>successful</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent5}>
              <div className={styles.backWrapper}>
                <b className={styles.back}>Back</b>
              </div>
              <button className={styles.btnJoingig}>
                <div className={styles.gig2hire1Container}>
                  <img
                    className={styles.gig2hire1Icon1}
                    alt=""
                    src="/gig2hire-111.svg"
                  />
                </div>
                <b className={styles.getStarted}>Approve Freelancer</b>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalAccept;
