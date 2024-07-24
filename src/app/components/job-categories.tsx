import type { NextPage } from "next";
import CompJoboffer from "./comp-joboffer";
import styles from "./job-categories.module.css";

export type JobCategoriesType = {
  className?: string;
};

const JobCategories: NextPage<JobCategoriesType> = ({ className = "" }) => {
  return (
    <div className={[styles.jobCategories, className].join(" ")}>
      <div className={styles.categoryButtons}>
        <div className={styles.btnDevit}>
          <img
            className={styles.developerModeTvIcon}
            loading="lazy"
            alt=""
            src="/developer-mode-tv.svg"
          />
          <div className={styles.developmentIt}>{`Development & IT`}</div>
        </div>
        <div className={styles.btnDesign}>
          <img
            className={styles.designServicesIcon}
            loading="lazy"
            alt=""
            src="/design-services.svg"
          />
          <div className={styles.designCreative}>{`Design & Creative`}</div>
        </div>
        <div className={styles.btnAi}>
          <img
            className={styles.psychologyIcon}
            loading="lazy"
            alt=""
            src="/psychology.svg"
          />
          <div className={styles.aiServices}>AI services</div>
        </div>
        <div className={styles.btnSales}>
          <img
            className={styles.storeIcon}
            loading="lazy"
            alt=""
            src="/store.svg"
          />
          <div className={styles.salesMarketing}>{`Sales & Marketing`}</div>
        </div>
        <div className={styles.btnAdmin}>
          <img
            className={styles.supportAgentIcon}
            loading="lazy"
            alt=""
            src="/support-agent.svg"
          />
          <div
            className={styles.adminCustomer}
          >{`Admin & Customer Support`}</div>
        </div>
        <div className={styles.btnLanguages}>
          <img
            className={styles.translateIcon}
            loading="lazy"
            alt=""
            src="/translate.svg"
          />
          <div
            className={styles.writingTranslation}
          >{`Writing & Translation`}</div>
        </div>
      </div>
      <div className={styles.jobListings}>
        <CompJoboffer />
        <CompJoboffer />
        <CompJoboffer />
        <div className={styles.compJoboffer}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.mobileAppDesignUiuxSpecParent}>
                <b className={styles.mobileAppDesign}>
                  Mobile App Design - UI/UX Specialist
                </b>
                <div className={styles.postedParent}>
                  <div className={styles.posted}>Posted</div>
                  <b className={styles.hAgo}>6h ago</b>
                </div>
              </div>
              <p className={styles.lookingForAnContainer}>
                <span className={styles.lookingForAn}>
                  Looking for an experienced UX/UI designer to design a stunning
                  e-Commerce platform.  This platform will be designed as a PWA
                  app meaning it will render on regular desktops as well as
                  smart devices (phones/tablets).
                </span>
                <span className={styles.blankLine}>&nbsp;</span>
                <span className={styles.youMustHave}>
                  You must have created similar projects in the past to be
                  considered.  when replying to this post please confirm that
                  you are available on a full-time basis for this project.  We
                  are looking for talented individuals to join our growing team.
                </span>
              </p>
              <div className={styles.tasks}>
                <div className={styles.parent}>
                  <b className={styles.b}>8</b>
                  <div className={styles.jobTasks}>Job Tasks</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
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
                      <div className={styles.createAllIcons}>
                        Create all icons
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.btnCheckParent1}>
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
                    <div className={styles.btnCheckParent2}>
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
                    <div className={styles.btnCheckParent3}>
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
                  <div className={styles.frameParent2}>
                    <div className={styles.btnCheckParent4}>
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
                    <div className={styles.btnCheckParent5}>
                      <div className={styles.btnCheck7}>
                        <img
                          className={styles.checkSmallIcon7}
                          alt=""
                          src="/check-small1.svg"
                        />
                      </div>
                      <div className={styles.designUsermerchantChat}>
                        Design User/Merchant chat
                      </div>
                    </div>
                    <div className={styles.frameChild} />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
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
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                  <b className={styles.candidates}>Candidates:</b>
                  <div className={styles.div}>5</div>
                </div>
                <div className={styles.publicParent}>
                  <img
                    className={styles.publicIcon}
                    loading="lazy"
                    alt=""
                    src="/public.svg"
                  />
                  <b className={styles.timezone}>Timezone:</b>
                  <div className={styles.utc5}>UTC+5</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.timerParent}>
                <img className={styles.timerIcon} alt="" src="/timer1.svg" />
                <div className={styles.timeLeftToApplyParent}>
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
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.youWillCollectParent}>
                <div className={styles.youWillCollect}>You will collect</div>
                <div className={styles.group}>
                  <b className={styles.b1}>250</b>
                  <b className={styles.dai}>DAI</b>
                </div>
              </div>
              <div className={styles.theJobPayment}>
                *The job payment will be based on the tasks completion by the
                deadline date, these task will be peer to peer and AI reviewed,
                if successful the payment amount will be instantly released to
                you.
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
      </div>
    </div>
  );
};

export default JobCategories;
