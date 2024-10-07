import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./freelancer-dashboard.module.css";
import { useActiveAccount } from "thirdweb/react";
import performTwitterVerification from "../actions/verify-twitter";
import { getTime } from "@/src/utils/getCurrTime";
import JobCard from "../components/job-card";
import { getUserIdFromPayload, isLoggedIn } from "../actions/login";
import { prisma } from "../lib/db";
import { GIG_COMPLETION_STATUS } from "@/src/constants/appConstants";

const FreelancerDashboard = async () => {
  let activeGigs: any[] = [];
  let completedGigs: any[] = [];

  // const router = useRouter();

  // const account = useActiveAccount();
  // console.log(`account:` + account?.address);

  const timeNow = getTime();

  // const onBtnChatContainerClick = () => {
  //   console.log("Open chat window!");
  //   router.push("/chat/17-1-1/");
  // };

  async function getActiveGigs() {
    console.log("Inside GET /api/gig/active-gigs/");
    const userLoggedIn: boolean = await isLoggedIn();
    if (!userLoggedIn) {
      return;
    }
    const freelancer = await getUserIdFromPayload();
    try {
      activeGigs = await prisma.gig.findMany({
        where: {
          freelancerId: freelancer,
          completionStatus: GIG_COMPLETION_STATUS.IN_PROGRESS,
        },
      });
      console.log(
        `GET /api/gig/active-gigs/ response from database. Count of messages received: ${activeGigs.length})`
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function getCompletedGigs() {
    console.log("Inside GET /api/gig/completed-gigs/");
    const userLoggedIn: boolean = await isLoggedIn();
    if (!userLoggedIn) {
      return;
    }
    const freelancer = await getUserIdFromPayload();
    try {
      completedGigs = await prisma.gig.findMany({
        where: {
          freelancerId: freelancer,
          completionStatus: GIG_COMPLETION_STATUS.COMPLETE,
        },
      });
      console.log(
        `GET /api/gig/completed-gigs/ response from database. Count of messages received: ${completedGigs.length})`
      );
    } catch (error) {
      console.log(error);
    }
  }

  await Promise.all([getActiveGigs(), getCompletedGigs()]);

  return (
    <div className={styles.freelancerDashboard}>
      <div className={styles.headerSpacer}></div>
      <main className={styles.contentAreaWrapper}>
        <section className={styles.contentArea}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardContent}>
              <img
                className={styles.dashboardContentChild}
                alt=""
                src="/frame-1565-1@2x.png"
              />
              <div className={styles.summary}>
                <h1 className={styles.builderlens}>builder.lens</h1>
                <div className={styles.earningsSummary}>
                  <div className={styles.tokenBalances}>
                    <div className={styles.usdcSimplified1Wrapper}>
                      <img
                        className={styles.usdcSimplified1Icon}
                        alt=""
                        src="/usdc-simplified-1.svg"
                      />
                    </div>
                    <img className={styles.dai1Icon} alt="" src="/dai-1.svg" />
                    <img
                      className={styles.tokenBalancesChild}
                      alt=""
                      src="/frame-1581.svg"
                    />
                    <img
                      className={styles.tokenBalancesItem}
                      loading="lazy"
                      alt=""
                      src="/frame-1582.svg"
                    />
                  </div>
                  <b className={styles.totalEarnings}>$500</b>
                </div>
                <div className={styles.accountSummary}>
                  <div className={styles.accountDetails}>
                    <img
                      className={styles.inboxIcon}
                      loading="lazy"
                      alt=""
                      src="/inbox.svg"
                    />
                    <div className={styles.staked}>Staked</div>
                    <b className={styles.accountSeparator}>$100</b>
                  </div>
                  <div className={styles.accountDetails1}>
                    <img
                      className={styles.accountBalanceWalletIcon}
                      loading="lazy"
                      alt=""
                      src="/account-balance-wallet.svg"
                    />
                    <a className={styles.wallet}>Wallet</a>
                    <b className={styles.b1}>$100</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <h1 className={styles.todayIs}>Today is</h1>
              <div className={styles.may232024}>{timeNow}</div>
            </div>
          </div>
          <div className={styles.earningsChart}>
            <div className={styles.chartContainer}>
              <div className={styles.activeJobsContainerParent}>
                <div className={styles.activeJobsContainer}>
                  <h1 className={styles.yourActiveJobs}>Your Active Jobs</h1>
                </div>
                <div className={styles.jobsList}>
                  {activeGigs.map((gig) => {
                    return (
                      <div className={styles.jobCards}>
                        <div className={styles.jobCardOne}>
                          <img
                            className={styles.cardOneTopRow}
                            loading="lazy"
                            alt=""
                            src="/frame-1651@2x.png"
                          />
                          <b className={styles.max}>Max</b>
                        </div>
                        <div className={styles.cardOneSecondRow}>
                          <div className={styles.cardOneJobCategories}>
                            <div className={styles.cardOneJobTitles}>
                              <div className={styles.cardOneCategoryNames}>
                                <div className={styles.developmentAndIt}>
                                  Development and IT
                                </div>
                              </div>
                              <h2 className={styles.developADefi1}>
                                {gig.title}
                              </h2>
                            </div>
                            <div className={styles.cardOneTime}>
                              <img
                                className={styles.timerIcon1}
                                alt=""
                                src="/timer-11.svg"
                              />
                              <div className={styles.d21h58m23s}>
                                <span>00</span>
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
                          <div className={styles.cardOneProgress}>
                            <div className={styles.cardOneTaskIcons}>
                              <div className={styles.cardOneTaskInfo}>
                                <img
                                  className={styles.taskSquare1Icon}
                                  loading="lazy"
                                  alt=""
                                  src="/tasksquare-11.svg"
                                />
                                <div className={styles.cardOneTasks}>
                                  <div className={styles.tasks}>Tasks:</div>
                                  <div className={styles.tasksQuantity}>
                                    <b className={styles.taskPlaceholderOne}>
                                      8
                                    </b>
                                    <div className={styles.of}>of</div>
                                    <b className={styles.taskPlaceholderTwo}>
                                      10
                                    </b>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.cardOneFileIcons}>
                                <img
                                  className={styles.cloudUploadOutline1Icon}
                                  loading="lazy"
                                  alt=""
                                  src="/clouduploadoutline-11.svg"
                                />
                                <div className={styles.cardOneFiles}>
                                  <div className={styles.files}>Files:</div>
                                  <div className={styles.filesQuantity}>
                                    <div className={styles.docsPlaceholderOne}>
                                      <b className={styles.docsWordRow}>2</b>
                                      <div className={styles.docs}>Docs</div>
                                    </div>
                                    <div className={styles.docsPlaceholderTwo}>
                                      <b className={styles.linksWordRow}>5</b>
                                      <div className={styles.links}>Links</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={styles.btnChat}
                              // onClick={onBtnChatContainerClick}
                            >
                              <div className={styles.iconChat}>
                                <img
                                  className={
                                    styles.commentCircleChatMessage1Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/commentcirclechatmessage-11.svg"
                                />
                                <div className={styles.iconChatChild} />
                              </div>
                              <b className={styles.chat}>Chat</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className={styles.earningsMetrics}>
                <div className={styles.activeJobsMetricWrapper}>
                  <div className={styles.activeJobsMetric}>
                    <div className={styles.earnedMetric}>
                      <b className={styles.totalEarned}>Total Earned</b>
                      <b className={styles.earnedSeparator}>$2500</b>
                      <div className={styles.earnedTrend}>
                        <img
                          className={styles.trendingUpIcon}
                          loading="lazy"
                          alt=""
                          src="/trending-up.svg"
                        />
                        <div className={styles.earnedTrendSeparator}>+37%</div>
                      </div>
                    </div>
                    <div className={styles.extraEarningsMetric}>
                      <b className={styles.extra1500}>extra 1,500</b>
                      <div className={styles.thisMonth}>this month</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.activeJobsParent}>
                    <b className={styles.activeJobs}>Active Jobs</b>
                    <b className={styles.b2}>5</b>
                    <div className={styles.extraEarningsTrend}>
                      <img
                        className={styles.trendingUpIcon1}
                        alt=""
                        src="/trending-up.svg"
                      />
                      <div className={styles.extraEarningsTrend1}>+2</div>
                    </div>
                  </div>
                  <div className={styles.jobsMetric}>
                    <b className={styles.extra2Jobs}>extra 2 jobs</b>
                    <div className={styles.thisMonth1}>this month</div>
                  </div>
                </div>
              </div>
              <div className={styles.revenueChart}>
                <div className={styles.revenueChartContainer}>
                  <h1 className={styles.monthlyRevenue}>Monthly Revenue</h1>
                </div>
                <div className={styles.barChart}>
                  <div className={styles.bars}>
                    <div className={styles.bars1}>
                      <div className={styles.barValues}>1000</div>
                    </div>
                    <div className={styles.bars2}>
                      <div className={styles.div}>900</div>
                    </div>
                    <div className={styles.bars3}>
                      <div className={styles.div1}>800</div>
                    </div>
                    <div className={styles.bars4}>
                      <div className={styles.div2}>700</div>
                    </div>
                    <div className={styles.bars5}>
                      <div className={styles.div3}>600</div>
                    </div>
                    <div className={styles.bars6}>
                      <div className={styles.div4}>500</div>
                    </div>
                    <div className={styles.bars7}>
                      <div className={styles.div5}>400</div>
                    </div>
                    <div className={styles.bars8}>
                      <div className={styles.div6}>300</div>
                    </div>
                    <div className={styles.bars9}>
                      <div className={styles.div7}>200</div>
                    </div>
                    <div className={styles.bars10}>
                      <div className={styles.div8}>100</div>
                    </div>
                    <div className={styles.sideSpacer} />
                    <div className={styles.spacer} />
                    <div className={styles.jan} />
                    <div className={styles.spacer1} />
                    <div className={styles.feb} />
                    <div className={styles.spacer2} />
                    <div className={styles.mar} />
                    <div className={styles.spacer3} />
                    <div className={styles.apr} />
                    <div className={styles.spacer4} />
                    <div className={styles.may} />
                    <div className={styles.spacer5} />
                    <div className={styles.jun} />
                    <div className={styles.spacer6} />
                    <div className={styles.jul} />
                    <div className={styles.spacer7} />
                    <div className={styles.aug} />
                    <div className={styles.spacer8} />
                    <div className={styles.sep} />
                    <div className={styles.spacer9} />
                    <div className={styles.oct} />
                    <div className={styles.spacer10} />
                    <div className={styles.nov} />
                    <div className={styles.spacer11} />
                    <div className={styles.dec} />
                    <div className={styles.spacer12} />
                  </div>
                  <div className={styles.daySpacer}>
                    <div className={styles.daySpacerChild} />
                    <div className={styles.jan1}>JAN</div>
                    <div className={styles.feb1}>FEB</div>
                    <div className={styles.mar1}>MAR</div>
                    <div className={styles.apr1}>APR</div>
                    <div className={styles.may1}>MAY</div>
                    <div className={styles.jun1}>JUN</div>
                    <div className={styles.jul1}>JUL</div>
                    <div className={styles.aug1}>AUG</div>
                    <div className={styles.sep1}>SEP</div>
                    <div className={styles.oct1}>OCT</div>
                    <div className={styles.nov1}>NOV</div>
                    <div className={styles.dec1}>DEC</div>
                  </div>
                </div>
              </div> */}
              <div className={styles.activeJobsContainerParent}>
                <div className={styles.activeJobsContainer}>
                  <h1 className={styles.yourActiveJobs}>Completed Jobs</h1>
                </div>
                <div className={styles.jobsList}>
                  {completedGigs.map((gig) => {
                    return (
                      <div className={styles.jobCards}>
                        <div className={styles.jobCardOne}>
                          <img
                            className={styles.cardOneTopRow}
                            loading="lazy"
                            alt=""
                            src="/frame-1651@2x.png"
                          />
                          <b className={styles.max}>Max</b>
                        </div>
                        <div className={styles.cardOneSecondRow}>
                          <div className={styles.cardOneJobCategories}>
                            <div className={styles.cardOneJobTitles}>
                              <div className={styles.cardOneCategoryNames}>
                                <div className={styles.developmentAndIt}>
                                  Development and IT
                                </div>
                              </div>
                              <h2 className={styles.developADefi1}>
                                {gig.title}
                              </h2>
                            </div>
                            <div className={styles.cardOneTime}>
                              <img
                                className={styles.timerIcon1}
                                alt=""
                                src="/timer-11.svg"
                              />
                              <div className={styles.d21h58m23s}>
                                <span>00</span>
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
                          <div className={styles.cardOneProgress}>
                            <div className={styles.cardOneTaskIcons}>
                              <div className={styles.cardOneTaskInfo}>
                                <img
                                  className={styles.taskSquare1Icon}
                                  loading="lazy"
                                  alt=""
                                  src="/tasksquare-11.svg"
                                />
                                <div className={styles.cardOneTasks}>
                                  <div className={styles.tasks}>Tasks:</div>
                                  <div className={styles.tasksQuantity}>
                                    <b className={styles.taskPlaceholderOne}>
                                      8
                                    </b>
                                    <div className={styles.of}>of</div>
                                    <b className={styles.taskPlaceholderTwo}>
                                      10
                                    </b>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.cardOneFileIcons}>
                                <img
                                  className={styles.cloudUploadOutline1Icon}
                                  loading="lazy"
                                  alt=""
                                  src="/clouduploadoutline-11.svg"
                                />
                                <div className={styles.cardOneFiles}>
                                  <div className={styles.files}>Files:</div>
                                  <div className={styles.filesQuantity}>
                                    <div className={styles.docsPlaceholderOne}>
                                      <b className={styles.docsWordRow}>2</b>
                                      <div className={styles.docs}>Docs</div>
                                    </div>
                                    <div className={styles.docsPlaceholderTwo}>
                                      <b className={styles.linksWordRow}>5</b>
                                      <div className={styles.links}>Links</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={styles.btnChat}
                              // onClick={onBtnChatContainerClick}
                            >
                              <div className={styles.iconChat}>
                                <img
                                  className={
                                    styles.commentCircleChatMessage1Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/commentcirclechatmessage-11.svg"
                                />
                                <div className={styles.iconChatChild} />
                              </div>
                              <b className={styles.chat}>Chat</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className={styles.pendingJobs}>
                <div className={styles.pendingJobsContainer}>
                  <h1 className={styles.jobsToBe}>Applications</h1>
                  <div className={styles.pendingJobsCount}>
                    <b className={styles.pendingJobsNumber}>1</b>
                    <div className={styles.pending}>pending</div>
                  </div>
                </div>
                <div className={styles.featuredJob}>
                  <div className={styles.jobContainer}>
                    <div className={styles.btnDevit}>
                      <img
                        className={styles.developerModeTvIcon}
                        loading="lazy"
                        alt=""
                        src="/developer-mode-tv1.svg"
                      />
                      <div
                        className={styles.developmentIt}
                      >{`Development & IT`}</div>
                    </div>
                    <h1 className={styles.developADefi}>
                      Develop a DeFi Dashboard for Hamster Coins
                    </h1>
                  </div>
                  <div className={styles.jobActions}>
                    <div className={styles.jobApplication}>
                      <div className={styles.applyButton}>
                        <img
                          className={styles.gig2hire2Icon}
                          loading="lazy"
                          alt=""
                          src="/gig2hire-2.svg"
                        />
                        <div className={styles.applicationStatus}>
                          <div className={styles.interested}>Interested:</div>
                          <div className={styles.jobCategory}>
                            <b className={styles.categoryIcon}>5</b>
                            <div className={styles.freelance}>Freelance</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.approvalTimer}>
                        <div className={styles.toBeApproved}>
                          To Be approved in:
                        </div>
                        <div className={styles.timerContainer}>
                          <img
                            className={styles.timerIcon}
                            alt=""
                            src="/timer2.svg"
                          />
                          <div className={styles.h58m23s}>
                            <span>48</span>
                            <b>H:</b>
                            <span>58</span>
                            <b>M:</b>
                            <span>23</span>
                            <b>S</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.btn}>
                      <b className={styles.viewMoreLabel}>View Offer</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.openDisputes}>
                <div className={styles.openDisputesContainer}>
                  <h1 className={styles.jobsToBe}>Open Disputes</h1>
                  <div className={styles.pendingJobsCount}>
                    <b className={styles.pendingJobsNumber}>1</b>
                    <div className={styles.pending}>pending</div>
                  </div>
                </div>
                <div className={styles.featuredDispute}>
                  <div className={styles.jobContainer}>
                    <div className={styles.btnDevit}>
                      <img
                        className={styles.developerModeTvIcon}
                        loading="lazy"
                        alt=""
                        src="/developer-mode-tv1.svg"
                      />
                      <div
                        className={styles.developmentIt}
                      >{`Development & IT`}</div>
                    </div>
                    <h1 className={styles.developADefi}>
                      Develop a DeFi Dashboard for Hamster Coins
                    </h1>
                  </div>
                  <div className={styles.jobActions}>
                    <div className={styles.jobApplication}>
                      <div className={styles.applyButton}>
                        <img
                          className={styles.gig2hire2Icon}
                          loading="lazy"
                          alt=""
                          src="/gig2hire-2.svg"
                        />
                        <div className={styles.applicationStatus}>
                          <div className={styles.interested}>Interested:</div>
                          <div className={styles.jobCategory}>
                            <b className={styles.categoryIcon}>5</b>
                            <div className={styles.freelance}>Freelance</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.approvalTimer}>
                        <div className={styles.toBeApproved}>
                          To Be approved in:
                        </div>
                        <div className={styles.timerContainer}>
                          <img
                            className={styles.timerIcon}
                            alt=""
                            src="/timer2.svg"
                          />
                          <div className={styles.h58m23s}>
                            <span>48</span>
                            <b>H:</b>
                            <span>58</span>
                            <b>M:</b>
                            <span>23</span>
                            <b>S</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.btn}>
                      <b className={styles.viewMoreLabel}>View Offer</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <img
          className={styles.gig2hire1Icon}
          loading="lazy"
          alt=""
          src="/gig2hire-11.svg"
        />
        <div className={styles.copyright}>
          <div className={styles.gig2hireAllRights}>
            © 2024 Gig2Hire. All Rights reserved.
          </div>
        </div>
        <div className={styles.socialMediaOne}>
          <div className={styles.socialMedia}>
            <img className={styles.socialIconOne} alt="" src="/vector-7.svg" />
          </div>
        </div>
        <div className={styles.socialMedia1}>
          <img className={styles.socialIconTwo} alt="" src="/vector-8.svg" />
        </div>
      </footer>
    </div>
  );
};

export default FreelancerDashboard;
