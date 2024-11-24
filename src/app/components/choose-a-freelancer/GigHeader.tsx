import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import CompgigDescription from "./CompgigDescription";
import Frametask from "./Frametask";
import CompbudgetBox from "./CompbudgetBox";
import Compchatbubble from "./Compchatbubble";
import ComptimeLeft from "./ComptimeLeft";
import CompppOnline from "./CompppOnline";
import Framebadge from "./Framebadge";
import styles from "./GigHeader.module.css";
import ChatWindow from "../chat/chat-window";

export type GigHeaderType = {
  className?: string;
};

const GigHeader: FunctionComponent<GigHeaderType> = ({ className = "" }) => {
  const messages: string[] = [];
  const currentUser: number = 1;
  const chatId = "";
  return (
    <div className={[styles.gigHeader, className].join(" ")}>
      <div className={styles.gigDetails}>
        <CompgigDescription
          property1="default"
          gigDescription="gigDescription"
        />
        <div className={styles.compsubmitTasks}>
          <div className={styles.userTasksParent}>
            <div className={styles.userTasks}>
              <img
                className={styles.iconeventList}
                loading="lazy"
                alt=""
                src="/iconevent-list.svg"
              />
              <h3 className={styles.tasks}>Tasks:</h3>
              <div className={styles.expandUser}>
                <div className={styles.parent}>
                  <b className={styles.b}>00</b>
                  <b className={styles.b1}>/</b>
                </div>
                <b className={styles.expandUserIcon}>00</b>
              </div>
            </div>
            <img
              className={styles.iconeventList}
              loading="lazy"
              alt=""
              src="/iconkeyboard-arrow-down.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frametaskWrapper}>
              <Frametask
                propFlex="unset"
                propPadding="unset"
                propMinWidth="unset"
                thisIsATask="taskText"
                propDisplay="inline-block"
                propMinWidth1="unset"
                property1="default"
                btncheckboxMargin="0"
                btncheckboxHeight="unset"
                btncheckboxWidth="18px"
                btncheckboxBackgroundColor="unset"
                btncheckboxDisplay="unset"
                btncheckboxFlexDirection="unset"
                btncheckboxAlignItems="unset"
                btncheckboxJustifyContent="unset"
                btncheckboxPadding="unset"
                thisIsAFontSize="12px"
                thisIsAFontFamily="'Space Grotesk'"
                thisIsAColor="#061543"
                thisIsATextAlign="left"
                thisIsAHeight="15px"
                thisIsAWidth="51px"
              />
            </div>
            <div className={styles.frametaskWrapper}>
              <Frametask
                propFlex="unset"
                propPadding="unset"
                propMinWidth="unset"
                thisIsATask="taskText"
                propDisplay="inline-block"
                propMinWidth1="unset"
                property1="default"
                btncheckboxMargin="0"
                btncheckboxHeight="unset"
                btncheckboxWidth="18px"
                btncheckboxBackgroundColor="unset"
                btncheckboxDisplay="unset"
                btncheckboxFlexDirection="unset"
                btncheckboxAlignItems="unset"
                btncheckboxJustifyContent="unset"
                btncheckboxPadding="unset"
                thisIsAFontSize="12px"
                thisIsAFontFamily="'Space Grotesk'"
                thisIsAColor="#061543"
                thisIsATextAlign="left"
                thisIsAHeight="15px"
                thisIsAWidth="51px"
              />
            </div>
          </div>
        </div>
        <div className={styles.compdeadlineBox}>
          <div className={styles.iconeventParent}>
            <img
              className={styles.iconeventList}
              loading="lazy"
              alt=""
              src="/iconevent.svg"
            />
            <div className={styles.deadline}>Deadline</div>
          </div>
          <div className={styles.yearParent}>
            <b className={styles.expandUserIcon}>Nov 16, 2024</b>
            <div className={styles.at2359Utc}>at 23:59 UTC.</div>
          </div>
        </div>
        <CompbudgetBox
          compbudgetBoxHeight="unset"
          budgetHeight="26px"
          budgetDisplay="inline-block"
          frameDivFlex="unset"
          budgetFlex="unset"
          budgetHeight1="31px"
          budgetDisplay1="inline-block"
          uSDCFlex="unset"
          uSDCMinWidth="unset"
          uSDCHeight="31px"
          compbudgetBoxWidth="unset"
          compbudgetBoxAlignSelf="stretch"
          budget="0000"
          uSDCMargin="0"
        />
        <div className={styles.offerActions}>
          <Button
            className={styles.btniconText}
            startIcon={
              <img width="24px" height="24px" src="/iconedit-square.svg" />
            }
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#3f5dba",
              fontSize: "16",
              borderColor: "#3f5dba",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { borderColor: "#3f5dba" },
            }}
          >
            Edit
          </Button>
          <Button
            className={styles.btniconText1}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#7f1111",
              fontSize: "16",
              background: "#f87a7a",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#f87a7a" },
              height: 40,
            }}
          >
            Cancel Offer
          </Button>
        </div>
        <h3 className={styles.applicants}>Applicants</h3>
        <div className={styles.applicantList}>
          <Compchatbubble
            property1="Default"
            freelancerName="Roaring Kitty"
            time="00:00"
            lastMessage="lastMessage"
            msgAmmount="0"
          />
          <div className={styles.compchatbubble}>
            <div className={styles.moreApplicantsPlaceholder}>
              More applicants Placeholder
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chatPlaceholderWrapper}>
        <div className={styles.moreApplicantsPlaceholder}>
          <ChatWindow
            initialMessages={messages}
            currentUser={currentUser}
            chatId={chatId}
            className=""
          />
        </div>
      </div>
      <div className={styles.gigDetails1}>
        <ComptimeLeft
          property1="red"
          comptimeLeftHeight="43px"
          iconclockLoader90="/iconclock-loader-90.svg"
          timeLeftToDeliver="Time Left to Deliver"
        />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.compppOnlineParent}>
              <CompppOnline property1="online-xl" />
              <div className={styles.userInfoWrapper}>
                <div className={styles.userInfo}>
                  <h3 className={styles.username}>userName</h3>
                  <div className={styles.userStats}>
                    <div className={styles.monthsOn}>
                      <div className={styles.monthsLabel}>6</div>
                      <div className={styles.monthsOnGig2hire}>
                        Months on GiG2Hire
                      </div>
                    </div>
                    <div className={styles.monthsOn}>
                      <div className={styles.monthsLabel}>5</div>
                      <div className={styles.jobsSuccessful}>
                        Jobs successful
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.freelancerdescription}>
              Freelancer description here.
            </div>
            <div className={styles.verification}>
              <div className={styles.btnVerify}>
                <div className={styles.userTasks}>
                  <img
                    className={styles.socialgithubIcon}
                    loading="lazy"
                    alt=""
                    src="/socialgithub@2x.png"
                  />
                  <div className={styles.github}>GitHub</div>
                </div>
                <div className={styles.btnCheck} />
                <Framebadge property1="navy" />
              </div>
              <div className={styles.githubCommits}>
                <b className={styles.githubCommits1}>Github commits:</b>
                <div className={styles.githubcommits}>25</div>
              </div>
            </div>
            <div className={styles.verification}>
              <div className={styles.btnVerify}>
                <div className={styles.userTasks}>
                  <img
                    className={styles.socialgithubIcon}
                    loading="lazy"
                    alt=""
                    src="/socialx@2x.png"
                  />
                  <div className={styles.xcom}>X.com</div>
                </div>
                <div className={styles.btnCheck} />
                <div className={styles.xBadge} />
              </div>
              <div className={styles.githubCommits}>
                <b className={styles.xFollowers1}>X followers:</b>
                <div className={styles.moreApplicantsPlaceholder}>1542</div>
              </div>
            </div>
          </div>
          <Button
            className={styles.btniconText2}
            startIcon={
              <img width="24px" height="24px" src="/iconperson-check.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fffcf0",
              fontSize: "24",
              background: "#6e83ff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#6e83ff" },
              width: 284,
              height: 47,
            }}
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GigHeader;
