import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./freelancer-dashboard.module.css";

const FreelancerDashboard: NextPageFreelancerDashboardType = () => {
  const router = useRouter();

  const onBtnChatContainerClick = useCallback(() => {
    router.push("/freelancer-chat");
  }, [router]);

  return (
    <div className={styles.freelancerDashboard}>
      <div className={styles.headerSpacer}>
        <header className={styles.navbar}>
          <div className={styles.navigationContainer}>
            <div className={styles.group}>
              <img className={styles.logoIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className={styles.navLinksContainer}>
              <nav className={styles.navLinks}>
                <div className={styles.navText}>
                  <div className={styles.navText1}>
                    <a className={styles.text}>Find a Gig</a>
                  </div>
                  <div className={styles.hlColor} />
                </div>
                <div className={styles.navText2}>
                  <div className={styles.navText3}>
                    <a className={styles.text1}>Teams</a>
                  </div>
                  <div className={styles.hlColor1} />
                </div>
                <div className={styles.navText4}>
                  <div className={styles.navText5}>
                    <a className={styles.text2}>Dashboard</a>
                  </div>
                  <div className={styles.hlColor2} />
                </div>
              </nav>
            </div>
          </div>
          <div className={styles.pageContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <img
                  className={styles.notificationsIcon}
                  loading="lazy"
                  alt=""
                  src="/notifications.svg"
                />
                <div className={styles.notificationCount}>
                  <b className={styles.b}>+1</b>
                </div>
              </div>
              <div className={styles.balanceContainer}>
                <b className={styles.buidlerlens}>buidler.lens</b>
                <div className={styles.uSDCBalance}>
                  <a className={styles.uSD}>1000</a>
                  <a className={styles.usdc}>USDC</a>
                </div>
              </div>
              <img
                className={styles.contentWrapperChild}
                loading="lazy"
                alt=""
                src="/frame-1565@2x.png"
              />
            </div>
          </div>
        </header>
      </div>
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
              <div className={styles.may232024}>May 23, 2024</div>
            </div>
          </div>
          <div className={styles.earningsChart}>
            <div className={styles.chartContainer}>
              <div className={styles.earningsMetrics}>
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
              </div>
              <div className={styles.pendingJobs}>
                <div className={styles.pendingJobsContainer}>
                  <h1 className={styles.jobsToBe}>Jobs to be approved</h1>
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
            </div>
            <div className={styles.activeJobsContainerParent}>
              <div className={styles.activeJobsContainer}>
                <h1 className={styles.yourActiveJobs}>Your Active Jobs</h1>
              </div>
              <div className={styles.jobsList}>
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
                          Develop a DeFi Dashboard for Hamster Coins
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
                              <b className={styles.taskPlaceholderOne}>8</b>
                              <div className={styles.of}>of</div>
                              <b className={styles.taskPlaceholderTwo}>10</b>
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
                        onClick={onBtnChatContainerClick}
                      >
                        <div className={styles.iconChat}>
                          <img
                            className={styles.commentCircleChatMessage1Icon}
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
                <div className={styles.jobCards1}>
                  <div className={styles.frameGroup}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/frame-166@2x.png"
                    />
                    <b className={styles.carla}>Carla</b>
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.designAndCreativeWrapper}>
                          <div className={styles.designAndCreative}>
                            Design and Creative
                          </div>
                        </div>
                        <h2 className={styles.uiuxForECommerce}>
                          UI/UX for e-Commerce selling Tea
                        </h2>
                      </div>
                      <div className={styles.timerParent}>
                        <img
                          className={styles.timerIcon2}
                          alt=""
                          src="/timer-2.svg"
                        />
                        <div className={styles.d21h58m23s1}>
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
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.taskSquare1Parent}>
                          <img
                            className={styles.taskSquare1Icon1}
                            alt=""
                            src="/tasksquare-11.svg"
                          />
                          <div className={styles.tasksParent}>
                            <div className={styles.tasks1}>Tasks:</div>
                            <div className={styles.parent}>
                              <b className={styles.b3}>8</b>
                              <div className={styles.of1}>of</div>
                              <b className={styles.b4}>10</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.cloudUploadOutline1Parent}>
                          <img
                            className={styles.cloudUploadOutline1Icon1}
                            alt=""
                            src="/clouduploadoutline-11.svg"
                          />
                          <div className={styles.filesParent}>
                            <div className={styles.files1}>Files:</div>
                            <div className={styles.frameParent4}>
                              <div className={styles.container}>
                                <b className={styles.b5}>2</b>
                                <div className={styles.docs1}>Docs</div>
                              </div>
                              <div className={styles.parent1}>
                                <b className={styles.b6}>5</b>
                                <div className={styles.links1}>Links</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.btnChat1}>
                        <div className={styles.iconChat1}>
                          <img
                            className={styles.commentCircleChatMessage1Icon1}
                            alt=""
                            src="/commentcirclechatmessage-11.svg"
                          />
                          <div className={styles.iconChatItem} />
                        </div>
                        <b className={styles.chat1}>Chat</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.jobCards2}>
                  <div className={styles.frameParent5}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/frame-165-11@2x.png"
                    />
                    <b className={styles.carla1}>Carla</b>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameParent8}>
                        <div className={styles.aiServicesWrapper}>
                          <div className={styles.aiServices}>AI services</div>
                        </div>
                        <h2 className={styles.createProfilePictures}>
                          Create profile pictures for a Freelancer platform
                        </h2>
                      </div>
                      <div className={styles.timerGroup}>
                        <img
                          className={styles.timerIcon3}
                          alt=""
                          src="/timer-2.svg"
                        />
                        <div className={styles.d21h58m23s2}>
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
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.taskSquare1Group}>
                          <img
                            className={styles.taskSquare1Icon2}
                            alt=""
                            src="/tasksquare-11.svg"
                          />
                          <div className={styles.tasksGroup}>
                            <div className={styles.tasks2}>Tasks:</div>
                            <div className={styles.parent2}>
                              <b className={styles.b7}>8</b>
                              <div className={styles.of2}>of</div>
                              <b className={styles.b8}>10</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.cloudUploadOutline1Group}>
                          <img
                            className={styles.cloudUploadOutline1Icon2}
                            alt=""
                            src="/clouduploadoutline-11.svg"
                          />
                          <div className={styles.filesGroup}>
                            <div className={styles.files2}>Files:</div>
                            <div className={styles.frameParent11}>
                              <div className={styles.parent3}>
                                <b className={styles.b9}>2</b>
                                <div className={styles.docs2}>Docs</div>
                              </div>
                              <div className={styles.parent4}>
                                <b className={styles.b10}>5</b>
                                <div className={styles.links2}>Links</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.btnChat2}>
                        <div className={styles.iconChat2}>
                          <img
                            className={styles.commentCircleChatMessage1Icon2}
                            alt=""
                            src="/commentcirclechatmessage-11.svg"
                          />
                          <div className={styles.iconChatInner} />
                        </div>
                        <b className={styles.chat2}>Chat</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.jobCards3}>
                  <div className={styles.frameParent12}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/frame-166-1@2x.png"
                    />
                    <b className={styles.sophie}>Sophie</b>
                  </div>
                  <div className={styles.frameParent13}>
                    <div className={styles.frameParent14}>
                      <div className={styles.frameParent15}>
                        <div className={styles.salesMarketingWrapper}>
                          <div
                            className={styles.salesMarketing}
                          >{`Sales & Marketing`}</div>
                        </div>
                        <h2 className={styles.organizeMarketingStrategy}>
                          Organize Marketing strategy for Monkeys NFTs
                        </h2>
                      </div>
                      <div className={styles.timerParent1}>
                        <img
                          className={styles.timerIcon4}
                          alt=""
                          src="/timer-4.svg"
                        />
                        <div className={styles.d21h58m23s3}>
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
                    <div className={styles.frameParent16}>
                      <div className={styles.frameParent17}>
                        <div className={styles.taskSquare1Container}>
                          <img
                            className={styles.taskSquare1Icon3}
                            alt=""
                            src="/tasksquare-11.svg"
                          />
                          <div className={styles.tasksContainer}>
                            <div className={styles.tasks3}>Tasks:</div>
                            <div className={styles.parent5}>
                              <b className={styles.b11}>8</b>
                              <div className={styles.of3}>of</div>
                              <b className={styles.b12}>10</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.cloudUploadOutline1Container}>
                          <img
                            className={styles.cloudUploadOutline1Icon3}
                            alt=""
                            src="/clouduploadoutline-11.svg"
                          />
                          <div className={styles.filesContainer}>
                            <div className={styles.files3}>Files:</div>
                            <div className={styles.frameParent18}>
                              <div className={styles.parent6}>
                                <b className={styles.b13}>2</b>
                                <div className={styles.docs3}>Docs</div>
                              </div>
                              <div className={styles.parent7}>
                                <b className={styles.b14}>5</b>
                                <div className={styles.links3}>Links</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.btnChat3}>
                        <div className={styles.iconChat3}>
                          <img
                            className={styles.commentCircleChatMessage1Icon3}
                            alt=""
                            src="/commentcirclechatmessage-11.svg"
                          />
                          <div className={styles.iconChatChild1} />
                        </div>
                        <b className={styles.chat3}>Chat</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.jobCards4}>
                  <div className={styles.frameParent19}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame-165-21@2x.png"
                    />
                    <b className={styles.jake}>Jake</b>
                  </div>
                  <div className={styles.frameParent20}>
                    <div className={styles.frameParent21}>
                      <div className={styles.frameParent22}>
                        <div className={styles.writingAndTranslationWrapper}>
                          <div className={styles.writingAndTranslation}>
                            Writing and Translation
                          </div>
                        </div>
                        <h2 className={styles.organizeMarketingStrategy1}>
                          Organize Marketing strategy for Monkeys NFTs
                        </h2>
                      </div>
                      <div className={styles.timerParent2}>
                        <img
                          className={styles.timerIcon5}
                          alt=""
                          src="/timer-4.svg"
                        />
                        <div className={styles.d21h58m23s4}>
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
                    <div className={styles.frameParent23}>
                      <div className={styles.frameParent24}>
                        <div className={styles.taskSquare1Parent1}>
                          <img
                            className={styles.taskSquare1Icon4}
                            alt=""
                            src="/tasksquare-11.svg"
                          />
                          <div className={styles.tasksParent1}>
                            <div className={styles.tasks4}>Tasks:</div>
                            <div className={styles.parent8}>
                              <b className={styles.b15}>8</b>
                              <div className={styles.of4}>of</div>
                              <b className={styles.b16}>10</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.cloudUploadOutline1Parent1}>
                          <img
                            className={styles.cloudUploadOutline1Icon4}
                            alt=""
                            src="/clouduploadoutline-11.svg"
                          />
                          <div className={styles.filesParent1}>
                            <div className={styles.files4}>Files:</div>
                            <div className={styles.frameParent25}>
                              <div className={styles.parent9}>
                                <b className={styles.b17}>2</b>
                                <div className={styles.docs4}>Docs</div>
                              </div>
                              <div className={styles.parent10}>
                                <b className={styles.b18}>5</b>
                                <div className={styles.links4}>Links</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.btnChat4}>
                        <div className={styles.iconChat4}>
                          <img
                            className={styles.commentCircleChatMessage1Icon4}
                            alt=""
                            src="/commentcirclechatmessage-11.svg"
                          />
                          <div className={styles.iconChatChild2} />
                        </div>
                        <b className={styles.chat4}>Chat</b>
                      </div>
                    </div>
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
