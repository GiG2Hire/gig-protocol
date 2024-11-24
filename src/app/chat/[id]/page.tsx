"use client";
import { useEffect, useState } from "react";
import styles from "./freelancer-chat.module.css";
// import {chat} from "../../../constants/chat";
//import ChatSentiment from "@/src/app/components/chat/chat-sentiment";
import { GIG_COMPLETION_STATUS } from "@/src/constants/appConstants";
import { closeProposal } from "../../actions/choose-and-open";
import ChatWindow from "@/src/app/components/chat/chat-window";
import ChatInput from "../../components/chat/chat-input";
import FileUpload from "../../components/chat/file-upload";
import FileList from "../../components/files/file-list";
import { getUserIdFromPayload } from "../../actions/login";
import { getFiles, getMessages } from "../../actions/get-messages";
import { getRoleFromPayload } from "../../actions/login";

// async function acceptGigInDatabase() {
//   const options = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//     body: JSON.stringify({
//       gigId: 15,
//       completionStatus: GIG_COMPLETION_STATUS.COMPLETE,
//     }),
//   };
//   const acceptGigResponse = await fetch("/api/gig/status", options);
//   if (acceptGigResponse.status == 200) {
//     console.log("Gig marked as complete successfully!!");
//   }
// }

const FreelancerChat = ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  console.log("----------------------", searchParams);
  console.log("params --0--------", params);

  //clientId-FreelancerId-GigId
  const id = params?.id;
  const chatId: string = id;
  const currentUser: number = Number(searchParams.userId);

  // TODO: Try to see if this is a secure way to get Gig Id
  const gigId: number = Number(chatId.split("-")[2]);
  console.log("Gig Id derived from chat Id: ", gigId);
  let receiverUser: number;

  const client: number = Number(chatId.split("-")[0]);
  const freelancer: number = Number(chatId.split("-")[1]);
  if (currentUser == client) {
    receiverUser = freelancer;
  } else {
    receiverUser = client;
  }

  //let sentimentText: string;
  let [messages, setMessages] = useState<any>();
  let submittedFiles: any[] = [];
  let [hasSubmitted, setSubmitStatus] = useState<boolean>();
  let [filesSharedByUser, setFilesSharedByUser] = useState([]);
  let [filesSharedByPartner, setFilesSharedByPartner] = useState([]);

  /**
   * get initial messages to load in chat window
   */
  async function getChatMessages() {
    try {
      //let messages = await fetch(`api/message/get-messages?chat_id=${chatId}`);    Have some troubles with it

      let messages = await getMessages(chatId);
      setMessages(messages);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * get gemini api sentiment for exisiting chat messages
   */
  // async function getGeminiSentiment() {
  //   try {
  //     const sentimentTextResponse = await prisma.chat.findUnique({
  //       where: { chatId: chatId },
  //       select: {
  //         geminiSentiment: true,
  //       },
  //     });
  //     console.log(sentimentTextResponse);
  //     sentimentText = sentimentTextResponse?.geminiSentiment!;
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   if (sentimentText == "null") {
  //     console.log("New chat, no sentiment has been generated");
  //     // Set sentiment indicator when no messages have been exchanged for a chat
  //     sentimentText = "neutral";
  //   } else {
  //     console.log("setting initial sentiment as:", sentimentText);
  //   }
  // }

  async function getSubmittedFiles() {
    try {
      submittedFiles = await getFiles(Number(gigId));
      console.log(submittedFiles);
    } catch (error) {
      console.log(error);
    }
    submittedFiles.forEach((file: any) => {
      if (file.uploadedBy == currentUser) {
        filesSharedByUser.push(file);
      } else {
        filesSharedByPartner.push(file);
      }
      console.log(filesSharedByPartner, filesSharedByUser);
    });
  }

  async function getGigStatus() {
    const response = await fetch(`/api/gig/get-status/?gig_id=${gigId}`);
    const status = await response.json();
    if (status == "SUBMITTED") {
      setSubmitStatus(true);
    }
  }

  const handleAcceptGig = async () => {
    // TODO: make functionalities for accept budget via API, assigned - @Horlarmmy
    const response = await fetch(`/api/gig/accept-budget`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  };

  const handleSubmitGig = async () => {
    // TODO: check if work submited and after that client can accept budget, before button should be inactive
    const freelancerId = await getUserIdFromPayload();
    const response = await fetch("/api/gig/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gigId, freelancerId }),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    console.log("All good");
    setSubmitStatus(true);
  };

  const removeFile = (index: any) => {
    return;
  };

  let currUserRole;
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          getChatMessages(),
          getSubmittedFiles(),
          getGigStatus(),

          (currUserRole = await getRoleFromPayload()),
        ]);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

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
            <div>
              <FileUpload gigId={gigId} />
              <FileList
                files={filesSharedByPartner}
                title={"Shared By Freelancer"}
                currentUser={currentUser}
              />
              <FileList
                files={filesSharedByUser}
                title={"Shared By Client"}
                currentUser={currentUser}
              />
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
                    className=""
                  />
                  <div className={styles.chatInputContentInner}>
                    <ChatInput
                      hasSubmitted={hasSubmitted}
                      userRole={currUserRole}
                      currentUser={currentUser}
                      receiverUser={receiverUser}
                      chatId={chatId}
                      messages={messages}
                    />
                  </div>
                </div>
                <div className={styles.jobSubmissionContentParent}>
                  <div className={styles.jobSubmissionContent}>
                    {/* <ChatSentiment
                      initialSentiment={sentimentText}
                      chatId={chatId}
                      className=""
                    /> */}
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
                    <div>
                      {currentUser === client ? (
                        <a
                          className={styles.acceptGig}
                          onClick={handleAcceptGig}
                        >
                          Accept Gig
                        </a>
                      ) : (
                        <a
                          className={styles.submitJob}
                          onClick={handleSubmitGig}
                        >
                          {hasSubmitted ? "Submitted" : "Submit Gig"}
                        </a>
                      )}
                    </div>
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
