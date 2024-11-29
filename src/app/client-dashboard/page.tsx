//@ts-nocheck
"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./client-dashboard.module.css";
import { usdcAddresses } from "@/src/constants/usdcConstants";
import { getTime } from "@/src/utils/getCurrTime";
import { useAuth } from "../providers/auth";
import { client } from "../lib/client";
import {
  useActiveAccount,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
  useWalletBalance,
} from "thirdweb/react";


const ClientDashboard = () => {
  const router = useRouter();
  const { userId, role } = useAuth();
  const [walletBalance, setWalletBalance] = useState("N/A");
  const [activeGigs, setActiveGigs] = useState([]);

  const walletStatus = useActiveWalletConnectionStatus();
  const walletAddress = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const timeNow = getTime();

  let completedGigs: any[] = [];
  let offers: any[] = [];


  const getClientData = async () => {
    try {
      const [responseComplete, responseActive] = await Promise.all([
        fetch(`api/gig/get-applications/completed-gigs/?user_id=${userId}`),
        fetch(`api/gig/get-applications/active-gigs/?user_id=${userId}`)
      ]);

      if (/*!responseCompleted.ok ||  */!responseActive.ok) {
        throw new Error("Failed to fetch data");
      }

      //const completedGigsData = JSON.parse(await responseCompleted.json());
      //completedGigs = completedGigsData;

      const activeGigsData = JSON.parse(await responseActive.json());


      for (let gigIndex = 0; gigIndex < activeGigsData.length; gigIndex++) {
        let tasksLength = 0;
        Object(activeGigsData[gigIndex].gig_task).forEach((gigObj, idx) => {
          if (gigObj.status == "DONE") {
            tasksLength++;
          }
          activeGigsData[gigIndex]["completed_tasks"] = tasksLength;
        });
      }

      setActiveGigs(activeGigsData);

      console.log(completedGigs, activeGigsData, tasksLength);
    } catch (error) {
      console.log(error)
    }

    // for (let i = 0; i < data.length; i++) {
    //   const offersResponse = await fetch(`/api/gig/get-offers/?gig_id=${data[i].gigId}`);

    //   if (!offersResponse.ok) {
    //     if (offersResponse.status == 404) {
    //       data[i]["offersCount"] = 0; // mark offers as 0
    //       continue; // go to next iteration of offers
    //     }
    //     else {
    //       throw new Error(`HTTP error! status: ${offersResponse.status}`);
    //     }
    //   }

    //   const offersCount = JSON.parse(await offersResponse.json()).length; // parse data from response and then get length
    //   data[i]["offersCount"] = offersCount;
    // }
    //setClientProposals(data);


  }

  const usdcAddress = usdcAddresses[walletChain?.id];
  const { data, isLoading, isError } = useWalletBalance({
    chain: walletChain,
    address: walletAddress?.address,
    client,
    tokenAddress: usdcAddress,
  });

  useEffect(() => {
    if (walletStatus == "connected") {
      setWalletBalance(data?.displayValue);
    }
    if (walletStatus == "disconnected") {
      setWalletBalance("N/A");
    }
    const fetchData = async () => {
      await getClientData();
    };
    fetchData();
  }, []);

  const onBtnChatContainerClick = useCallback(async () => {
    router.push("/chat/17-1-1/");
  }, [router]);

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
                    <b className={styles.b1}>{walletBalance}</b>
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
                  <h1 className={styles.yourActiveJobs}>Active Proposals</h1>
                </div>
                <div className={styles.jobsList}>
                  {activeGigs.map((gig, index) => (
                    <div className={styles.jobCards}>
                      <div className={styles.jobCardOne}>
                        {/* <Image
                          className={styles.cardOneTopRow}
                          alt=""
                          src={gig.user.profileImage}
                          height={45}
                          width={45}
                          loading="lazy"
                        /> */}
                        <b className={styles.max}>{gig.user.username}</b>
                      </div>
                      <div className={styles.cardOneSecondRow}>
                        <div className={styles.cardOneJobCategories}>
                          <div className={styles.cardOneJobTitles}>
                            <div className={styles.cardOneCategoryNames}>
                              {/* <div className={styles.developmentAndIt}>
                                {JOB_CATEGORIES[gig.category]}
                              </div> */}
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
                              {/* {getRemainingTime(gig.expectedDeliveryDate)} */}
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
                                    {gig.completed_tasks}
                                  </b>
                                  <div className={styles.of}>of</div>
                                  <b className={styles.taskPlaceholderTwo}>
                                    {gig.gig_task.length}
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
                                    <b className={styles.docsWordRow}>
                                      {gig.gig_file.length}
                                    </b>
                                    {/* <div className={styles.docs}>Docs</div> */}
                                  </div>
                                  <div className={styles.docsPlaceholderTwo}>
                                    <b className={styles.linksWordRow}>
                                      {/* {gig.gig_file.length -
                                        getGigDocs(gig.gig_file).length} */}
                                    </b>
                                    {/* <div className={styles.links}>Links</div> */}
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
                  )
                  )}
                </div>
              </div>
              <div className={styles.activeJobsContainerParent}>
                <div className={styles.activeJobsContainer}>
                  <h1 className={styles.yourActiveJobs}>Completed Proposals</h1>
                </div>
                <div className={styles.jobsList}>
                  {!completedGigs ? completedGigs.map((gig) => {
                    return (
                      <div className={styles.jobCards}>
                        <div className={styles.jobCardOne}>
                          <Image
                            className={styles.cardOneTopRow}
                            alt=""
                            src={gig.user.profileImage}
                            height={45}
                            width={45}
                            loading="lazy"
                          />
                          <b className={styles.max}>{gig.user.username}</b>
                        </div>
                        <div className={styles.cardOneSecondRow}>
                          <div className={styles.cardOneJobCategories}>
                            <div className={styles.cardOneJobTitles}>
                              <div className={styles.cardOneCategoryNames}>
                                <div className={styles.developmentAndIt}>
                                  {JOB_CATEGORIES[gig.category]}
                                </div>
                              </div>
                              <h2 className={styles.developADefi1}>
                                {gig.title}
                              </h2>
                            </div>
                            <div className={styles.cardOneBudget}>
                              <img
                                className={styles.timerIcon1}
                                alt=""
                                src="/icon/usdc.svg"
                              />
                              <div className={styles.d21h58m23s}>
                                {gig.gigBudget}
                                {/* <span>00</span>
                                <b>D:</b>
                                <span>21</span>
                                <b>H:</b>
                                <span>58</span>
                                <b>M:</b>
                                <span>23</span>
                                <b>S</b> */}
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
                                      {/* {getCompletedTasks(gig.gig_task).length} */}
                                    </b>
                                    <div className={styles.of}>of</div>
                                    <b className={styles.taskPlaceholderTwo}>
                                      {gig.gig_task.length}
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
                                      <b className={styles.docsWordRow}>
                                        HELLO I"M HERE IN DOCS
                                        {/* {getGigDocs(gig.gig_file).length} */}
                                      </b>
                                      <div className={styles.docs}>Docs</div>
                                    </div>
                                    <div className={styles.docsPlaceholderTwo}>
                                      <b className={styles.linksWordRow}>
                                        {/* {gig.gig_file.length -
                                          getGigDocs(gig.gig_file).length} */}
                                      </b>
                                      <div className={styles.links}>Links</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.btnChat}>
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
                  }) : <div>You don't have completed proposals.</div>}
                </div>
              </div>
            </div>
            <div className={styles.disputeAndApplicationsContainer}>
              <div className={styles.chartContainer}>
                <div className={styles.pendingJobs}>
                  <div className={styles.pendingJobsContainer}>
                    <h1 className={styles.jobsToBe}>Applications</h1>
                    <div className={styles.pendingJobsCount}>
                      <b className={styles.pendingJobsNumber}>{offers.length}</b>
                      <div className={styles.pending}>pending</div>
                    </div>
                  </div>
                  {offers.map((offer) => {
                    return (
                      <div className={styles.featuredJob}>
                        <div className={styles.jobContainer}>
                          <div className={styles.btnDevit}>
                            <img
                              className={styles.developerModeTvIcon}
                              loading="lazy"
                              alt=""
                              src="/developer-mode-tv1.svg"
                            />
                            <div className={styles.developmentIt}>
                              {JOB_CATEGORIES[offer.gig.category]}
                            </div>
                          </div>
                          <h1 className={styles.developADefi}>
                            {offer.gig.title}
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
                                <div className={styles.interested}>
                                  Interested:
                                </div>
                                <div className={styles.jobCategory}>
                                  <b className={styles.categoryIcon}>5</b>
                                  <div className={styles.freelance}>
                                    Freelance
                                  </div>
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
                    );
                  })}
                </div>
                <div className={styles.openDisputes}>
                  <div className={styles.openDisputesContainer}>
                    <h1 className={styles.jobsToBe}>Open Disputes</h1>
                    <div className={styles.pendingJobsCount}>
                      <b className={styles.pendingJobsNumber}>0</b>
                      <div className={styles.pending}>pending</div>
                    </div>
                  </div>
                  <div>Soon in Production..</div>
                  {/* <div className={styles.featuredDispute}>
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
                  </div> */}
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
          <a className={styles.socialMedia} href="https://x.com/gig2hire">
            <img className={styles.socialIconOne} alt="" src="/vector-7.svg" />
          </a>
          <a className={styles.socialMedia1} href="https://discord.com/invite/sFEZN2nFkV">
            <img className={styles.socialIconTwo} alt="" src="/vector-8.svg" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ClientDashboard;
