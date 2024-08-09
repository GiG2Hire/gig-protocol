"use client";

import { useCallback } from "react";
import styles from "./job-card-module.css";
import { useRouter } from "next/navigation";

const JobCard = (
  { initialMessages, sessionId, chatId, chatPartner },
  { className = "" }
) => {
  const router = useRouter();
  const onBtnChatContainerClick = useCallback(() => {
    router.push("/chat/123/");
  }, [router]);
  return (
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
              <img className={styles.timerIcon1} alt="" src="/timer-11.svg" />
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
            <div className={styles.btnChat} onClick={onBtnChatContainerClick}>
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
    </div>
  );
};
export default JobCard;
