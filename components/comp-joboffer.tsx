import type { NextPage } from "next";
import styles from "./comp-joboffer.module.css";

export type CompJobofferType = {
  className?: string;
};

const CompJoboffer: NextPage<CompJobofferType> = ({ className = "" }) => {
  return (
    <div className={[styles.compJoboffer, className].join(" ")}>
      <div className={styles.jobListingContainers}>
        <div className={styles.jobListingContent}>
          <div className={styles.jobListingDetails}>
            <b className={styles.mobileAppDesign}>
              Mobile App Design - UI/UX Specialist
            </b>
            <div className={styles.jobListingMetadata}>
              <div className={styles.posted}>Posted</div>
              <b className={styles.hAgo}>6h ago</b>
            </div>
          </div>
          <p className={styles.lookingForAnContainer}>
            <span className={styles.lookingForAn}>
              Looking for an experienced UX/UI designer to design a stunning
              e-Commerce platform.  This platform will be designed as a PWA app
              meaning it will render on regular desktops as well as smart
              devices (phones/tablets).
            </span>
            <span className={styles.blankLine}>&nbsp;</span>
            <span className={styles.youMustHave}>
              You must have created similar projects in the past to be
              considered.  when replying to this post please confirm that you
              are available on a full-time basis for this project.  We are
              looking for talented individuals to join our growing team.
            </span>
          </p>
          <div className={styles.tasks}>
            <div className={styles.parent}>
              <b className={styles.b}>8</b>
              <div className={styles.jobTasks}>Job Tasks</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.btnCheckParent}>
                  <div className={styles.btnCheck}>
                    <img
                      className={styles.checkSmallIcon}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.createAUser}>
                    Create a user dashboard
                  </div>
                </div>
                <div className={styles.btnCheckGroup}>
                  <div className={styles.btnCheck1}>
                    <img
                      className={styles.checkSmallIcon1}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.createLandingPage}>
                    Create landing page
                  </div>
                </div>
                <div className={styles.btnCheckContainer}>
                  <div className={styles.btnCheck2}>
                    <img
                      className={styles.checkSmallIcon2}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.createAllIcons}>Create all icons</div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.btnCheck3}>
                    <img
                      className={styles.checkSmallIcon3}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.createMarketplace}>
                    Create Marketplace
                  </div>
                </div>
                <div className={styles.btnCheckParent1}>
                  <div className={styles.btnCheck4}>
                    <img
                      className={styles.checkSmallIcon4}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.designCheckoutModal}>
                    Design Checkout Modal
                  </div>
                </div>
                <div className={styles.btnCheckParent2}>
                  <div className={styles.btnCheck5}>
                    <img
                      className={styles.checkSmallIcon5}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.designUserCreator}>
                    Design User Creator
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.btnCheckParent3}>
                  <div className={styles.btnCheck6}>
                    <img
                      className={styles.checkSmallIcon6}
                      alt=""
                      src="/check-small1.svg"
                    />
                  </div>
                  <div className={styles.createStoreBuilder}>
                    Create store builder
                  </div>
                </div>
                <div className={styles.btnCheckParent4}>
                  <input className={styles.btnCheck7} type="checkbox" />
                  <div className={styles.designUsermerchantChat}>
                    Design User/Merchant chat
                  </div>
                </div>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
          <div className={styles.jobListingApplicationDetail}>
            <div className={styles.eventParent}>
              <img
                className={styles.eventIcon}
                loading="lazy"
                alt=""
                src="/event.svg"
              />
              <b className={styles.deadline}>Deadline:</b>
              <div className={styles.jun122024}>Jun 12, 2024</div>
            </div>
            <div className={styles.jobListingApplicationCandid}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
              <b className={styles.candidates}>Candidates:</b>
              <div className={styles.jobListingApplication}>5</div>
            </div>
            <div className={styles.jobListingApplicationTimezo}>
              <img className={styles.publicIcon} alt="" src="/public.svg" />
              <b className={styles.timezone}>Timezone:</b>
              <div className={styles.utc5}>UTC+5</div>
            </div>
          </div>
        </div>
        <div className={styles.jobListingApplicationTimer}>
          <div className={styles.jobListingApplicationTimeL}>
            <img className={styles.timerIcon} alt="" src="/timer1.svg" />
            <div className={styles.jobListingApplicationTimeL1}>
              <div className={styles.timeLeftTo}>Time Left to Apply</div>
              <div className={styles.d21h58m23s}>
                <span>02</span>
                <b>D:</b>
                <span>21</span>
                <b>H:</b>
                <span>58</span>
                <b>M:</b>
                <span>23</span>
                <b>S</b>
              </div>
            </div>
          </div>
          <div className={styles.btnDetails}>
            <div className={styles.showDetails}>Show Details</div>
            <img
              className={styles.keyboardArrowDownIcon}
              alt=""
              src="/keyboard-arrow-down.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <div className={styles.youWillCollectParent}>
            <div className={styles.youWillCollect}>You will collect</div>
            <div className={styles.group}>
              <b className={styles.b1}>250</b>
              <b className={styles.dai}>DAI</b>
            </div>
          </div>
          <div className={styles.theJobPayment}>
            *The job payment will be based on the tasks completion by the
            deadline date, these task will be peer to peer and AI reviewed, if
            successful the payment amount will be instantly released to you.
          </div>
        </div>
        <div className={styles.btnApply}>
          <img
            className={styles.personRaisedHandIcon}
            alt=""
            src="/person-raised-hand.svg"
          />
          <b className={styles.apply}>Apply</b>
        </div>
      </div>
    </div>
  );
};

export default CompJoboffer;
