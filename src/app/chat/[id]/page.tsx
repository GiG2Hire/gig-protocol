import styles from "./freelancer-chat.module.css";
// import {chat} from "../../../constants/chat";
import ChatSentiment from "@/src/app/components/chat/chat-sentiment";
import { GIG_COMPLETION_STATUS } from "@/src/constants/appConstants";
import { closeProposal } from "../../actions/choose-and-open";
import ChatWindow from "@/src/app/components/chat/chat-window";
import ChatInput from "../../components/chat/chat-input";
import { prisma } from "../../lib/db";
import FileUpload from "../../components/chat/file-upload";

async function acceptGigInDatabase() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      gigId: 15,
      completionStatus: GIG_COMPLETION_STATUS.COMPLETE,
    }),
  };
  const acceptGigResponse = await fetch("/api/gig/status", options);
  if (acceptGigResponse.status == 200) {
    console.log("Gig marked as complete successfully!!");
  }
}

function acceptGig() {
  acceptGigInDatabase();
  closeProposal(15);
}

const FreelancerChat = async ({ params, searchParams }) => {
  console.log("----------------------", searchParams);
  console.log("params --0--------", params);

  //clientId-FreelancerId-GigId
  const id = params.id;
  const chatId: string = id;
  const currentUser: number = Number(searchParams.userId);
  let receiverUser: number;

  const client: number = Number(chatId.split("-")[0]);
  const freelancer: number = Number(chatId.split("-")[1]);
  if (currentUser == client) {
    receiverUser = freelancer;
  } else {
    receiverUser = client;
  }

  let sentimentText: string;
  let messages;

  /**
   * get initial messages to load in chat window
   */
  async function getChatMessages() {
    try {
      messages = await prisma.chatMessage.findMany({
        where: {
          chatId: chatId,
        },
        orderBy: {
          sentTimestamp: "asc",
        },
      });
    } catch (error) {
      console.log(error);
    }
    console.log(messages);
  }

  /**
   * get gemini api sentiment for exisiting chat messages
   */
  async function getGeminiSentiment() {
    try {
      const sentimentTextResponse = await prisma.chat.findUnique({
        where: { chatId: chatId },
        select: {
          geminiSentiment: true,
        },
      });
      console.log(sentimentTextResponse);
      sentimentText = sentimentTextResponse?.geminiSentiment;
    } catch (error) {
      console.log(error);
    }

    if (sentimentText == "null") {
      console.log("New chat, no sentiment has been generated");
      // Set sentiment indicator when no messages have been exchanged for a chat
      sentimentText = "neutral";
    } else {
      console.log("setting initial sentiment as:", sentimentText);
    }
  }

  await Promise.all([getChatMessages(), getGeminiSentiment()]);
  // await Promise.all([getChatMessages()]);

  // we can use gig id to get chat id or directly pass chat id in the http route query
  return (
    <div className={styles.freelancerChat}>
      <div className={styles.headerSpacer}></div>
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
              <FileUpload />
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
                  <ChatWindow
                    initialMessages={messages}
                    currentUser={currentUser}
                    chatId={chatId}
                  />
                  <div className={styles.chatInputContentInner}>
                    <ChatInput
                      currentUser={currentUser}
                      receiverUser={receiverUser}
                      chatId={chatId}
                      messages={messages}
                    />
                  </div>
                </div>
                <div className={styles.jobSubmissionContentParent}>
                  <div className={styles.jobSubmissionContent}>
                    <ChatSentiment
                      initialSentiment={sentimentText}
                      chatId={chatId}
                    />
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
                    <b className={styles.submitJob}>
                      {currentUser == client ? "Accept Gig" : "Submit Gig"}
                    </b>
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
