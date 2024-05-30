import type { NextPage } from "next";
import HeaderSpacer from "../components/header-spacer";
import styles from "./post-a-job.module.css";

const PostAJob: NextPagePostAJobType = () => {
  return (
    <div className={styles.postAJob}>
      <HeaderSpacer />
      <main className={styles.footerContentWrapper}>
        <section className={styles.footerContent}>
          <div className={styles.frameParent}>
            <button className={styles.postAGigWrapper}>
              <a className={styles.postAGig}>Post a GiG</a>
            </button>
            <h1 className={styles.hireJustVerified}>
              Hire just verified freelancers.
            </h1>
          </div>
          <div className={styles.jobForm}>
            <div className={styles.formFields}>
              <div className={styles.titleField}>
                <div className={styles.titleInput}>
                  <b className={styles.titleIcon}>1</b>
                </div>
                <b className={styles.headlineForYour}>
                  Headline for your Job post
                </b>
              </div>
              <div className={styles.nameField}>
                <div className={styles.nameInput}>
                  <b className={styles.addACatchy}>
                    Add a catchy name for your Job Post.
                  </b>
                  <input
                    className={styles.textInput}
                    placeholder="Add GiG title here"
                    type="text"
                  />
                </div>
                <div className={styles.titleExample}>
                  <b className={styles.exampleTitles}>Example titles:</b>
                  <p className={styles.buildAResponsiveContainer}>
                    <div className={styles.buildAResponsiveDappToTra}>
                      <li className={styles.buildAResponsive}>
                        Build a responsive dApp to trade Pokemonsta cards.
                      </li>
                      <li className={styles.designAnUi}>
                        Design an UI for a cooking social media.
                      </li>
                      <li>Create a video ad for YouClip Shorts.</li>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.descriptionField}>
              <div className={styles.descriptionInput}>
                <div className={styles.descriptionIcon}>
                  <b className={styles.descriptionLabel}>2</b>
                </div>
                <b className={styles.describeYourJob}>Describe your Job post</b>
              </div>
              <div className={styles.descriptionExample}>
                <div className={styles.exampleDescription}>
                  <b className={styles.addADescription}>
                    Add a description for your Job post.
                  </b>
                  <div className={styles.textInputParent}>
                    <div className={styles.textInput1}>
                      <div className={styles.searchInGlobal}>
                        Add GiG title here
                      </div>
                    </div>
                    <b className={styles.categoryField}>0/480</b>
                  </div>
                </div>
                <div className={styles.categorySelection}>
                  <b className={styles.exampleDescription1}>
                    Example Description:
                  </b>
                  <blockquote className={styles.lookingForAn}>
                    “Looking for an experienced Freelance that can deliver in a
                    timely manner a clean and well designed Dashboard, to
                    manage, swap and keep tracks of multiple Hamster Coins, we
                    are a team of VCs looking to find long term collaborations.
                    Messages are open on the global chat”
                  </blockquote>
                </div>
              </div>
            </div>
            <div className={styles.taskField}>
              <div className={styles.taskInput}>
                <div className={styles.taskIcon}>
                  <b className={styles.taskLabel}>3</b>
                </div>
                <b className={styles.chooseYourJob}>Choose your Job Category</b>
              </div>
              <div className={styles.taskInstructions}>
                <button className={styles.btnDevit}>
                  <img
                    className={styles.developerModeTvIcon}
                    alt=""
                    src="/developer-mode-tv.svg"
                  />
                  <div
                    className={styles.developmentIt}
                  >{`Development & IT`}</div>
                </button>
                <div className={styles.btnDesign}>
                  <img
                    className={styles.designServicesIcon}
                    loading="lazy"
                    alt=""
                    src="/design-services.svg"
                  />
                  <div
                    className={styles.designCreative}
                  >{`Design & Creative`}</div>
                </div>
                <button className={styles.btnAi}>
                  <img
                    className={styles.psychologyIcon}
                    alt=""
                    src="/psychology.svg"
                  />
                  <div className={styles.aiServices}>AI services</div>
                </button>
                <div className={styles.btnSales}>
                  <img
                    className={styles.storeIcon}
                    loading="lazy"
                    alt=""
                    src="/store.svg"
                  />
                  <div
                    className={styles.salesMarketing}
                  >{`Sales & Marketing`}</div>
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
            </div>
            <div className={styles.deliveryDateField}>
              <div className={styles.deliveryDateInput}>
                <div className={styles.deliveryDateIcon}>
                  <b className={styles.deliveryDateLabel}>4</b>
                </div>
                <b className={styles.describeTasks}>Describe Tasks</b>
              </div>
              <div className={styles.deliveryDateSelector}>
                <p className={styles.theFreelancerJob}>
                  *The freelancer Job will be reviewed based on these tasks. You
                  can add as much as you want, keep it straight and clear.
                </p>
                <div className={styles.dateSelector}>
                  <p className={styles.describeTheTasks}>
                    Describe the tasks or milestones that makes part of the job
                  </p>
                  <div className={styles.compAddtask}>
                    <div className={styles.textInputGroup}>
                      <div className={styles.textInput2}>
                        <b className={styles.addDashboardTo}>
                          Add dashboard to manage assets
                        </b>
                      </div>
                      <div className={styles.btnDelete}>
                        <img
                          className={styles.delete1Icon}
                          alt=""
                          src="/delete-1.svg"
                        />
                        <b className={styles.delete}>Delete</b>
                      </div>
                    </div>
                    <div className={styles.taskInputContainer}>
                      <input
                        className={styles.textInput3}
                        placeholder="e.g. Historical for the Hamster Coins swaps"
                        type="text"
                      />
                      <button className={styles.btnAdd}>
                        <img
                          className={styles.taskSquare1Icon}
                          alt=""
                          src="/tasksquare-12.svg"
                        />
                        <b className={styles.addTask}>Add Task</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.taskExample}>
                  <b className={styles.exampleTasks}>Example tasks:</b>
                  <p className={styles.theDashboardShouldContainer}>
                    <ul className={styles.theDashboardShouldIncludeA}>
                      <li className={styles.theDashboardShould}>
                        The dashboard should include a graphic on the PnL’s.
                      </li>
                      <li className={styles.itShouldBe}>
                        It should be yellow and black.
                      </li>
                      <li>It must include animations of Hamsters.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.budgetField}>
              <div className={styles.budgetInput}>
                <div className={styles.budgetIcon}>
                  <b className={styles.budgetLabel}>5</b>
                </div>
                <b className={styles.specifyDeliveryDate}>
                  Specify Delivery Date
                </b>
              </div>
              <div className={styles.budgetDescriptionParent}>
                <div className={styles.budgetDescription}>
                  <b className={styles.specifyTheDates}>
                    Specify the dates the freelancer must deliver the job.
                  </b>
                  <div className={styles.escrowExplanation}>
                    <b className={styles.toKeepIn}>To keep in mind:</b>
                    <p className={styles.deliveryLimitTimeContainer}>
                      <ul className={styles.deliveryLimitTimeIs2359T}>
                        <li>
                          Delivery limit time is 23:59 the chosen date. The time
                          is based on your location.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.monthSelector}>
                    <div className={styles.monthNavigation}>
                      <img
                        className={styles.chevronLeftIcon}
                        loading="lazy"
                        alt=""
                        src="/chevron-left.svg"
                      />
                    </div>
                    <b className={styles.february}>February</b>
                    <div className={styles.monthNavigation1}>
                      <img
                        className={styles.chevronRightIcon}
                        loading="lazy"
                        alt=""
                        src="/chevron-right.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.calendar1}>
                    <div className={styles.daysOfWeek}>
                      <b className={styles.s}>S</b>
                    </div>
                    <div className={styles.daysOfWeek1}>
                      <div className={styles.m}>M</div>
                    </div>
                    <div className={styles.daysOfWeek2}>
                      <div className={styles.t}>T</div>
                    </div>
                    <div className={styles.daysOfWeek3}>
                      <div className={styles.w}>W</div>
                    </div>
                    <div className={styles.daysOfWeek4}>
                      <div className={styles.t1}>T</div>
                    </div>
                    <div className={styles.daysOfWeek5}>
                      <div className={styles.f}>F</div>
                    </div>
                    <div className={styles.daysOfWeek6}>
                      <div className={styles.s1}>S</div>
                    </div>
                    <div className={styles.daysOfWeek7}>
                      <div className={styles.div}>1</div>
                    </div>
                    <div className={styles.daysOfWeek8}>
                      <div className={styles.div1}>1</div>
                    </div>
                    <div className={styles.daysOfWeek9}>
                      <div className={styles.div2}>1</div>
                    </div>
                    <div className={styles.daysOfWeek10}>
                      <div className={styles.div3}>1</div>
                    </div>
                    <div className={styles.daysOfWeek11}>
                      <div className={styles.div4}>2</div>
                    </div>
                    <div className={styles.daysOfWeek12}>
                      <div className={styles.div5}>3</div>
                    </div>
                    <div className={styles.daysOfWeek13}>
                      <div className={styles.div6}>4</div>
                    </div>
                    <div className={styles.daysOfWeek14}>
                      <div className={styles.div7}>5</div>
                    </div>
                    <div className={styles.daysOfWeek15}>
                      <div className={styles.div8}>6</div>
                    </div>
                    <div className={styles.daysOfWeek16}>
                      <div className={styles.div9}>7</div>
                    </div>
                    <div className={styles.daysOfWeek17}>
                      <div className={styles.div10}>8</div>
                    </div>
                    <div className={styles.daysOfWeek18}>
                      <div className={styles.div11}>9</div>
                    </div>
                    <div className={styles.daysOfWeek19}>
                      <div className={styles.div12}>10</div>
                    </div>
                    <div className={styles.daysOfWeek20}>
                      <div className={styles.div13}>11</div>
                    </div>
                    <div className={styles.daysOfWeek21}>
                      <div className={styles.div14}>12</div>
                    </div>
                    <div className={styles.daysOfWeek22}>
                      <div className={styles.div15}>13</div>
                    </div>
                    <div className={styles.daysOfWeek23}>
                      <div className={styles.div16}>14</div>
                    </div>
                    <div className={styles.daysOfWeek24}>
                      <div className={styles.div17}>15</div>
                    </div>
                    <div className={styles.daysOfWeek25}>
                      <div className={styles.div18}>16</div>
                    </div>
                    <div className={styles.daysOfWeek26}>
                      <div className={styles.div19}>17</div>
                    </div>
                    <div className={styles.daysOfWeek27}>
                      <div className={styles.div20}>18</div>
                    </div>
                    <div className={styles.daysOfWeek28}>
                      <div className={styles.div21}>19</div>
                    </div>
                    <div className={styles.daysOfWeek29}>
                      <div className={styles.div22}>20</div>
                    </div>
                    <div className={styles.daysOfWeek30}>
                      <div className={styles.div23}>21</div>
                    </div>
                    <div className={styles.daysOfWeek31}>
                      <div className={styles.div24}>22</div>
                    </div>
                    <div className={styles.daysOfWeek32}>
                      <div className={styles.div25}>23</div>
                    </div>
                    <div className={styles.daysOfWeek33}>
                      <div className={styles.div26}>24</div>
                    </div>
                    <div className={styles.daysOfWeek34}>
                      <div className={styles.div27}>25</div>
                    </div>
                    <div className={styles.daysOfWeek35}>
                      <div className={styles.div28}>26</div>
                    </div>
                    <div className={styles.daysOfWeek36}>
                      <div className={styles.div29}>27</div>
                    </div>
                    <div className={styles.daysOfWeek37}>
                      <div className={styles.div30}>28</div>
                    </div>
                    <div className={styles.daysOfWeek38}>
                      <div className={styles.div31}>29</div>
                    </div>
                    <div className={styles.daysOfWeek39}>
                      <div className={styles.div32}>30</div>
                    </div>
                    <div className={styles.daysOfWeek40}>
                      <div className={styles.div33}>31</div>
                    </div>
                    <div className={styles.daysOfWeek41}>
                      <div className={styles.div34}>1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.budgetTitleParent}>
              <div className={styles.budgetTitle}>
                <div className={styles.budgetIcon1}>
                  <b className={styles.piggyBank}>6</b>
                </div>
                <b className={styles.addTheProject}>Add the project Budget</b>
              </div>
              <div className={styles.budgetDescription1}>
                <div className={styles.escrowInfo}>
                  <b className={styles.theProjectBudget}>
                    The project Budget will be put on escrow.
                  </b>
                  <b className={styles.toKeepIn1}>To keep in mind:</b>
                  <p className={styles.theEscrowedBudgetContainer}>
                    <ul className={styles.theEscrowedBudgetWillBeKe}>
                      <li className={styles.theEscrowedBudget}>
                        The escrowed budget will be kept securely on an smart
                        contract while the freelance deliver the job.
                      </li>
                      <li>
                        You will have a private chat with the freelance of your
                        choice, here you both will be able to check tasks
                        completed, and a AI will also give an score based on
                        your chats and tasks created.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className={styles.budgetInput1}>
                  <b className={styles.projectBudget}>Project Budget</b>
                  <div className={styles.tokenSelection}>
                    <b className={styles.chooseYourPreferred}>
                      Choose your preferred token:
                    </b>
                    <div className={styles.tokenOptions}>
                      <div className={styles.availableTokens}>
                        <img
                          className={styles.usdcSimplified1Icon}
                          loading="lazy"
                          alt=""
                          src="/usdc-simplified-1.svg"
                        />
                      </div>
                      <img
                        className={styles.dai1Icon}
                        loading="lazy"
                        alt=""
                        src="/dai-1.svg"
                      />
                      <img
                        className={styles.availableTokensIcon}
                        loading="lazy"
                        alt=""
                        src="/frame-1581.svg"
                      />
                      <img
                        className={styles.availableTokensIcon1}
                        loading="lazy"
                        alt=""
                        src="/frame-1582.svg"
                      />
                    </div>
                    <div className={styles.tokenDetails}>
                      <img
                        className={styles.emojiObjectsIcon}
                        loading="lazy"
                        alt=""
                        src="/emoji-objects.svg"
                      />
                      <div className={styles.token1}>1 token = 1 US Dollar</div>
                    </div>
                  </div>
                  <input
                    className={styles.textInput4}
                    placeholder="Type amount"
                    type="text"
                  />
                  <button className={styles.btnApprove}>
                    <img
                      className={styles.thumbsUp1Icon}
                      alt=""
                      src="/thumbsup-1.svg"
                    />
                    <b className={styles.approveBudget}>Approve Budget</b>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.jobReview}>
              <div className={styles.reviewTitle}>
                <div className={styles.reviewIcon}>
                  <b className={styles.document}>7</b>
                </div>
                <b className={styles.reviewJobOffer}>
                  Review Job Offer and Deposit Escrowed Money
                </b>
              </div>
              <div className={styles.jobSummary}>
                <h2 className={styles.developADefi}>
                  Develop a DeFi Dashboard for Hamster Coins
                </h2>
                <blockquote className={styles.lookingForAn1}>
                  “Looking for an experienced Freelance that can deliver in a
                  timely manner a clean and well designed Dashboard, to manage,
                  swap and keep tracks of multiple Hamster Coins, we are a team
                  of VCs looking to find long term collaborations. Messages are
                  open on the global chat”
                </blockquote>
                <div className={styles.taskList}>
                  <div className={styles.taskHeader}>
                    <img
                      className={styles.taskSquare1Icon1}
                      loading="lazy"
                      alt=""
                      src="/tasksquare-1.svg"
                    />
                    <b className={styles.tasks}>10 Tasks</b>
                  </div>
                  <div className={styles.tasksCheckboxes}>
                    <div className={styles.frameGroup}>
                      <div className={styles.btnCheckParent}>
                        <input className={styles.btnCheck} type="checkbox" />
                        <div className={styles.includeGraphicsOn}>
                          Include graphics on the PNLs
                        </div>
                      </div>
                      <div className={styles.btnCheckGroup}>
                        <input className={styles.btnCheck1} type="checkbox" />
                        <div className={styles.yellowAndBlack}>
                          Yellow and Black for the UI
                        </div>
                      </div>
                      <div className={styles.btnCheckContainer}>
                        <input className={styles.btnCheck2} type="checkbox" />
                        <div className={styles.hamstersAnimations}>
                          Hamsters animations
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <input className={styles.btnCheck3} type="checkbox" />
                        <div className={styles.includeHistoricalSwaps}>
                          Include historical swaps
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.btnCheckParent1}>
                        <input className={styles.btnCheck4} type="checkbox" />
                        <div className={styles.includeSocialsSection}>
                          Include socials section
                        </div>
                      </div>
                      <div className={styles.btnCheckParent2}>
                        <input className={styles.btnCheck5} type="checkbox" />
                        <div className={styles.includeCoinTracker}>
                          Include coin tracker
                        </div>
                      </div>
                      <div className={styles.btnCheckParent3}>
                        <input className={styles.btnCheck6} type="checkbox" />
                        <div className={styles.addConversionRate}>
                          Add conversion rate to pounds
                        </div>
                      </div>
                      <div className={styles.btnCheckParent4}>
                        <input className={styles.btnCheck7} type="checkbox" />
                        <div className={styles.makeItResponsive}>
                          Make it responsive
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.btnCheckParent5}>
                        <input className={styles.btnCheck8} type="checkbox" />
                        <div className={styles.addSwapSection}>
                          Add Swap section
                        </div>
                      </div>
                      <div className={styles.btnCheckParent6}>
                        <input className={styles.btnCheck9} type="checkbox" />
                        <div className={styles.addBridgeSection}>
                          Add Bridge section
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.deliveryDate}>
                  <div className={styles.deliveryTitle}>
                    <div className={styles.deliveryIcon}>
                      <img
                        className={styles.eventIcon}
                        loading="lazy"
                        alt=""
                        src="/event2.svg"
                      />
                      <b className={styles.jobDeliveryDate}>
                        Job Delivery Date
                      </b>
                    </div>
                    <div className={styles.deliveryInfo}>
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
                  <div className={styles.budgetSummary}>
                    <div className={styles.budgetTitleIcon}>
                      <img
                        className={styles.moneyBag1Icon}
                        alt=""
                        src="/moneybag-11.svg"
                      />
                      <b className={styles.projectBudget1}>Project Budget</b>
                    </div>
                    <div className={styles.budgetAmountDetails}>
                      <div className={styles.tokenIconSummary}>
                        <img
                          className={styles.usdcSimplified1Icon1}
                          loading="lazy"
                          alt=""
                          src="/usdc-simplified-1.svg"
                        />
                      </div>
                      <b className={styles.amount}>250</b>
                      <div className={styles.usdc}>USDC</div>
                    </div>
                  </div>
                </div>
                <div className={styles.depositWarning}>
                  <p className={styles.reviewYourOffer}>
                    *Review your offer carefully as this action isn’t
                    reversible. You won’t be able to edit the description of the
                    job, you will be able to add tasks further on paying an
                    small fee. Check docs for further information.
                  </p>
                  <div className={styles.btnDeposit}>
                    <img
                      className={styles.briefcase1Icon}
                      loading="lazy"
                      alt=""
                      src="/briefcase-1.svg"
                    />
                    <b className={styles.depositBudgetAnd}>
                      Deposit Budget and Create GiG
                    </b>
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
        <div className={styles.socialMediaLinks}>
          <div className={styles.socialMedia}>
            <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
          </div>
        </div>
        <div className={styles.socialMedia1}>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default PostAJob;
