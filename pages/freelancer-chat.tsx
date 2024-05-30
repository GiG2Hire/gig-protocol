import type { NextPage } from "next";
import styles from "./freelancer-chat.module.css";

const FreelancerChat: NextPageFreelancerChatType = () => {
  return (
    <div className={styles.freelancerChat}>
      <div className={styles.headerSpacer}>
        <header className={styles.navbar}>
          <div className={styles.groupParent}>
            <div className={styles.group}>
              <img className={styles.logoIcon} alt="" src="/vector.svg" />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className={styles.vectorIcon1}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.navTextParent}>
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
              </div>
            </div>
          </div>
          <div className={styles.navbarInner}>
            <div className={styles.profileContentParent}>
              <div className={styles.profileContent}>
                <img
                  className={styles.notificationsIcon}
                  loading="lazy"
                  alt=""
                  src="/notifications.svg"
                />
                <div className={styles.profilePlaceholderWrapper}>
                  <b className={styles.profilePlaceholder}>+1</b>
                </div>
              </div>
              <div className={styles.buidlerlensParent}>
                <b className={styles.buidlerlens}>buidler.lens</b>
                <div className={styles.uSDCBalanceParent}>
                  <a className={styles.uSD}>1000</a>
                  <a className={styles.usdc}>USDC</a>
                </div>
              </div>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-1565@2x.png"
              />
            </div>
          </div>
        </header>
      </div>
      <main className={styles.contentWrapper}>
        <section className={styles.content}>
          <div className={styles.frameParent}>
            <button className={styles.freelancerChatWrapper}>
              <b className={styles.freelancerChat1}>Freelancer Chat</b>
            </button>
            <div className={styles.chatNavbar}>
              <div className={styles.frameGroup}>
                <div className={styles.gig2hire1Parent}>
                  <img
                    className={styles.gig2hire1Icon}
                    loading="lazy"
                    alt=""
                    src="/gig2hire-1.svg"
                  />
                  <a className={styles.gigs}>5 gigs</a>
                </div>
                <a className={styles.ongoing}>ongoing</a>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.people1Parent}>
                  <img
                    className={styles.people1Icon}
                    loading="lazy"
                    alt=""
                    src="/people-1.svg"
                  />
                  <b className={styles.clients}>2 clients</b>
                </div>
                <div className={styles.online}>online</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.commentCircleChatMessage1Parent}>
                  <img
                    className={styles.commentCircleChatMessage1Icon}
                    loading="lazy"
                    alt=""
                    src="/commentcirclechatmessage-1.svg"
                  />
                  <b className={styles.new}>18 new</b>
                </div>
                <div className={styles.messages}>messages</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <button className={styles.ongoingGigsWrapper}>
                <b className={styles.ongoingGigs}>Ongoing GiGs</b>
              </button>
              <div className={styles.chatListItemsParent}>
                <div className={styles.chatListItems}>
                  <img
                    className={styles.chatListItemsChild}
                    loading="lazy"
                    alt=""
                    src="/frame-165@2x.png"
                  />
                  <div className={styles.chatListContent}>
                    <b className={styles.rachel}>Rachel</b>
                    <div className={styles.hamsterVentures}>
                      Hamster Ventures
                    </div>
                  </div>
                  <div className={styles.chatListMessages}>
                    <img
                      className={styles.commentCircleChatMessage1Icon1}
                      loading="lazy"
                      alt=""
                      src="/commentcirclechatmessage-1-1.svg"
                    />
                    <b className={styles.chatListEmpty}>10</b>
                  </div>
                </div>
                <b className={styles.defiDashboardFor}>
                  DeFi Dashboard for Hamster Coins
                </b>
                <div className={styles.timerParent}>
                  <img
                    className={styles.timerIcon}
                    loading="lazy"
                    alt=""
                    src="/timer.svg"
                  />
                  <b className={styles.dueOn}>Due on:</b>
                  <b className={styles.hours}>10 hours</b>
                  <div className={styles.chatListEmpty1}>02.24.2024</div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/frame-165-1@2x.png"
                  />
                  <div className={styles.dianaParent}>
                    <b className={styles.diana}>Diana</b>
                    <div className={styles.metaCosmetics}>Meta Cosmetics</div>
                  </div>
                  <div className={styles.commentCircleChatMessage1Group}>
                    <img
                      className={styles.commentCircleChatMessage1Icon2}
                      loading="lazy"
                      alt=""
                      src="/commentcirclechatmessage-1-1.svg"
                    />
                    <b className={styles.b}>4</b>
                  </div>
                </div>
                <b className={styles.eCommerceForBeauty}>
                  e-Commerce for beauty products
                </b>
                <div className={styles.timerGroup}>
                  <img
                    className={styles.timerIcon1}
                    loading="lazy"
                    alt=""
                    src="/timer-1.svg"
                  />
                  <b className={styles.dueOn1}>Due on:</b>
                  <b className={styles.days}>2 days</b>
                  <div className={styles.div}>02.24.2024</div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/frame-165-2@2x.png"
                  />
                  <div className={styles.tomParent}>
                    <b className={styles.tom}>Tom</b>
                    <div className={styles.unrealEstate}>UnReal Estate</div>
                  </div>
                  <div className={styles.commentCircleChatMessage1Container}>
                    <img
                      className={styles.commentCircleChatMessage1Icon3}
                      loading="lazy"
                      alt=""
                      src="/commentcirclechatmessage-1-1.svg"
                    />
                    <b className={styles.b1}>1</b>
                  </div>
                </div>
                <b className={styles.landingPageFor}>
                  Landing page for RWA platform
                </b>
                <div className={styles.timerContainer}>
                  <img
                    className={styles.timerIcon2}
                    alt=""
                    src="/timer-1.svg"
                  />
                  <b className={styles.dueOn2}>Due on:</b>
                  <b className={styles.days1}>3 days</b>
                  <div className={styles.div1}>02.24.2024</div>
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-165-3@2x.png"
                  />
                  <div className={styles.charlesParent}>
                    <b className={styles.charles}>Charles</b>
                    <div className={styles.intoDaPremium}>into DA premium</div>
                  </div>
                  <div className={styles.commentCircleChatMessage1Parent1}>
                    <img
                      className={styles.commentCircleChatMessage1Icon4}
                      alt=""
                      src="/commentcirclechatmessage-1-1.svg"
                    />
                    <b className={styles.b2}>4</b>
                  </div>
                </div>
                <b className={styles.defiDappFor}>
                  DeFi dApp for affinity groups with for Hamster Coins
                </b>
                <div className={styles.timerParent1}>
                  <img
                    className={styles.timerIcon3}
                    alt=""
                    src="/timer-3.svg"
                  />
                  <b className={styles.dueOn3}>Due on:</b>
                  <b className={styles.days2}>10 days</b>
                  <div className={styles.div2}>02.24.2024</div>
                </div>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent10}>
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/frame-165-4@2x.png"
                  />
                  <div className={styles.brendaParent}>
                    <b className={styles.brenda}>Brenda</b>
                    <div className={styles.chainLawy3rs}>Chain Lawy3rs</div>
                  </div>
                  <div className={styles.commentCircleChatMessage1Parent2}>
                    <img
                      className={styles.commentCircleChatMessage1Icon5}
                      alt=""
                      src="/commentcirclechatmessage-1-1.svg"
                    />
                    <b className={styles.b3}>4</b>
                  </div>
                </div>
                <b className={styles.landingPageFor1}>
                  Landing page for lawyers in the
                </b>
                <div className={styles.timerParent2}>
                  <img
                    className={styles.timerIcon4}
                    alt=""
                    src="/timer-3.svg"
                  />
                  <b className={styles.dueOn4}>Due on:</b>
                  <b className={styles.days3}>15 days</b>
                  <div className={styles.div3}>02.24.2024</div>
                </div>
              </div>
            </div>
            <div className={styles.ongoingGigContentParent}>
              <div className={styles.ongoingGigContent}>
                <div className={styles.ongoingGigDetails}>
                  <div className={styles.ongoingGigInfo}>
                    <img
                      className={styles.ongoingGigInfoChild}
                      loading="lazy"
                      alt=""
                      src="/frame-172@2x.png"
                    />
                    <b className={styles.sophie}>Sophie</b>
                  </div>
                  <h1 className={styles.defiDashboardForContainer}>
                    <b>{` `}</b>
                    <span>DeFi Dashboard for Hamster Coins</span>
                  </h1>
                </div>
                <div className={styles.timerParent3}>
                  <img
                    className={styles.timerIcon5}
                    alt=""
                    src="/timer-5.svg"
                  />
                  <div className={styles.ongoingGigTimeLeft}>
                    <div className={styles.timeLeftTo}>
                      Time Left to Deliver
                    </div>
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
              </div>
              <div className={styles.chatInputContentParent}>
                <div className={styles.chatInputContent}>
                  <div className={styles.freenalceemployerChat}>
                    <div className={styles.chatMessageItemsWrapper}>
                      <div className={styles.chatMessageItems}>
                        <p className={styles.hiSophieIve}>
                          Hi Sophie, I've started working on the "Dashboard for
                          Hamster Coins" project. I've outlined the initial
                          wireframes and planned the key functionalities. Any
                          specific features you're keen on including?
                        </p>
                        <b className={styles.emptyChatMessages}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner}>
                      <div className={styles.hiMaxGladToHearItItsParent}>
                        <p className={styles.hiMaxGlad}>
                          Hi Max, glad to hear it! It's crucial we have
                          real-time tracking of coin value and user portfolio
                          management. Can we also integrate notifications for
                          significant market movements?
                        </p>
                        <b className={styles.b4}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatChild}>
                      <div className={styles.absolutelyThoseFeaturesAreParent}>
                        <p className={styles.absolutelyThoseFeatures}>
                          Absolutely, those features are top of my list. For the
                          notifications, I'm thinking of customizable triggers
                          based on user preferences. Sound good?
                        </p>
                        <b className={styles.b5}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner1}>
                      <div className={styles.perfectCustomizableTriggersParent}>
                        <p className={styles.perfectCustomizableTriggers}>
                          Perfect! Customizable triggers will add great value.
                          How about security features? Given the nature of the
                          data, I want to ensure our users feel safe.
                        </p>
                        <b className={styles.b6}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner2}>
                      <div className={styles.securityIsAPriorityIllIParent}>
                        <p className={styles.securityIsA}>
                          Security is a priority. I'll implement encryption for
                          user data and two-factor authentication for login. I'm
                          also considering a secure API for the real-time data.
                        </p>
                        <b className={styles.b7}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner3}>
                      <div className={styles.excellentChoicesMaxTwoFaParent}>
                        <p className={styles.excellentChoicesMax}>
                          Excellent choices, Max. Two-factor authentication is a
                          must. How's the timeline looking? Are we on track?
                        </p>
                        <b className={styles.b8}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner4}>
                      <div className={styles.progressingWellImCurrentlParent}>
                        <p className={styles.progressingWellIm}>
                          Progressing well. I'm currently ahead of schedule.
                          Planning to start backend development tomorrow.
                        </p>
                        <b className={styles.b9}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner5}>
                      <div className={styles.maxRememberTheJobShouldBParent}>
                        <p className={styles.maxRememberThe}>
                          Max, remember the job should be delivered in 3 days.
                          Make sure everything is polished and functional!
                        </p>
                        <b className={styles.b10}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner6}>
                      <div className={styles.rachelIThinkYouMeantToSParent}>
                        <p className={styles.rachelIThink}>
                          Rachel, I think you meant to send that to another
                          freelancer, but no worries! Sophie, regarding the
                          timeline, we're looking good. Rachel's reminder was
                          for another project, but it's a good checkpoint for us
                          too.
                        </p>
                        <b className={styles.b11}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner7}>
                      <div className={styles.hahaGotALittleConfusedThParent}>
                        <p className={styles.hahaGotA}>
                          Haha, got a little confused there! Thanks for the
                          update, Max. With the 3-day mark in mind, do you
                          foresee any potential hurdles?
                        </p>
                        <b className={styles.b12}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner8}>
                      <div className={styles.noMajorHurdlesAnticipatedParent}>
                        <p className={styles.noMajorHurdles}>
                          No major hurdles anticipated. I've allocated extra
                          time for testing and refining the dashboard. I'll keep
                          you posted if anything comes up.
                        </p>
                        <b className={styles.b13}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner9}>
                      <div className={styles.soundsLikeYouveGotEverythParent}>
                        <p className={styles.soundsLikeYouve}>
                          Sounds like you've got everything under control. I
                          appreciate the frequent updates. Let's aim for a
                          smooth final delivery.
                        </p>
                        <b className={styles.b14}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner10}>
                      <div className={styles.definitelySophieIllEnsurParent}>
                        <p className={styles.definitelySophieIll}>
                          Definitely, Sophie. I'll ensure the dashboard not only
                          meets but exceeds our expectations. I'll send over the
                          next update by tomorrow evening.
                        </p>
                        <b className={styles.b15}>21:33</b>
                      </div>
                    </div>
                    <div className={styles.freenalceemployerChatInner11}>
                      <div className={styles.lookingForwardToItMaxThParent}>
                        <p className={styles.lookingForwardTo}>
                          Looking forward to it, Max. Thanks for your hard work
                          and dedication on this project!
                        </p>
                        <b className={styles.b16}>21:33</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatInputContentInner}>
                    <div className={styles.frameParent11}>
                      <input
                        className={styles.frameInput}
                        placeholder="Type your message..."
                        type="text"
                      />
                      <div className={styles.btnSend}>
                        <div className={styles.send21}>
                          <img
                            className={styles.sendButtonIcon}
                            alt=""
                            src="/vector-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.jobSubmissionContentParent}>
                  <div className={styles.jobSubmissionContent}>
                    <div className={styles.collectingContainer}>
                      <div className={styles.collectingHeader}>
                        <div className={styles.collecting}>Collecting:</div>
                        <div className={styles.collectingAmount}>
                          <b className={styles.emptyCollectingAmount}>2500</b>
                          <h1 className={styles.dai}>DAI</h1>
                        </div>
                      </div>
                      <div className={styles.btnUploadJob}>
                        <div className={styles.uploadButtonContent}>
                          <img
                            className={styles.cloudUploadOutline1Icon}
                            loading="lazy"
                            alt=""
                            src="/clouduploadoutline-1.svg"
                          />
                          <b className={styles.uploadFiles}>Upload Files</b>
                        </div>
                        <div className={styles.uploadedFiles}>
                          <b className={styles.filesUploaded}>
                            4 files uploaded
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.tasksContentParent}>
                      <div className={styles.tasksContent}>
                        <div className={styles.keepTrackOf}>
                          Keep track of your tasks
                        </div>
                        <div className={styles.tasksProgress}>
                          <img
                            className={styles.taskSquare1Icon}
                            loading="lazy"
                            alt=""
                            src="/tasksquare-1.svg"
                          />
                          <div className={styles.tasksFraction}>
                            <b className={styles.tasksFractionValue}>3</b>
                            <div className={styles.of}>of</div>
                            <b className={styles.tasksFractionValue1}>10</b>
                          </div>
                          <div className={styles.completed}>Completed</div>
                        </div>
                      </div>
                      <div className={styles.jobTasks}>
                        <div className={styles.taskItems}>
                          <div className={styles.btnCheck}>
                            <img
                              className={styles.moreHorizIcon}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.includeGraphicsOn}>
                            Include graphics on the PNLs
                          </div>
                        </div>
                        <div className={styles.taskItems1}>
                          <div className={styles.btnCheck1}>
                            <img
                              className={styles.moreHorizIcon1}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.yellowAndBlack}>
                            Yellow and Black for the UI
                          </div>
                        </div>
                        <div className={styles.taskItems2}>
                          <div className={styles.btnCheck2}>
                            <img
                              className={styles.moreHorizIcon2}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.hamstersAnimations}>
                            Hamsters animations
                          </div>
                        </div>
                        <div className={styles.taskItems3}>
                          <div className={styles.btnCheck3}>
                            <img
                              className={styles.moreHorizIcon3}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.includeHistoricalSwaps}>
                            Include historical swaps
                          </div>
                        </div>
                        <div className={styles.taskItems4}>
                          <div className={styles.btnCheck4}>
                            <img
                              className={styles.moreHorizIcon4}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.includeSocialsSection}>
                            Include socials section
                          </div>
                        </div>
                        <div className={styles.taskItems5}>
                          <div className={styles.btnCheck5}>
                            <img
                              className={styles.moreHorizIcon5}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <p className={styles.includeCoinTracker}>
                            Include coin tracker
                          </p>
                        </div>
                        <div className={styles.taskItems6}>
                          <div className={styles.btnCheck6}>
                            <img
                              className={styles.moreHorizIcon6}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.addConversionRate}>
                            Add conversion rate to pounds
                          </div>
                        </div>
                        <div className={styles.taskItems7}>
                          <div className={styles.btnCheck7}>
                            <img
                              className={styles.moreHorizIcon7}
                              loading="lazy"
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <p className={styles.makeItResponsive}>
                            Make it responsive
                          </p>
                        </div>
                        <div className={styles.taskItems8}>
                          <div className={styles.btnCheck8}>
                            <img
                              className={styles.moreHorizIcon8}
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.addSwapSection}>
                            Add Swap section
                          </div>
                        </div>
                        <div className={styles.taskItems9}>
                          <div className={styles.btnCheck9}>
                            <img
                              className={styles.moreHorizIcon9}
                              alt=""
                              src="/more-horiz.svg"
                            />
                          </div>
                          <div className={styles.addBridgeSection}>
                            Add Bridge section
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.btnSubmit}>
                    <img
                      className={styles.factCheckIcon}
                      alt=""
                      src="/fact-check.svg"
                    />
                    <b className={styles.submitJob}>Submit Job</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <img
          className={styles.gig2hire1Icon1}
          loading="lazy"
          alt=""
          src="/gig2hire-11.svg"
        />
        <div className={styles.gig2hireAllRightsReservedWrapper}>
          <div className={styles.gig2hireAllRights}>
            © 2024 Gig2Hire. All Rights reserved.
          </div>
        </div>
        <div className={styles.socialMediaLinks}>
          <div className={styles.socialMedia}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-7.svg"
            />
          </div>
        </div>
        <div className={styles.socialMedia1}>
          <img
            className={styles.vectorIcon3}
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default FreelancerChat;
