"use client";
import { useEffect, useState } from "react";
import styles from "./chat-sentiment.module.css";
import { SENTIMENT_TO_CODE_MAPPING } from "@/src/constants/appConstants";
import { pusherClient } from "../lib/pusher";
export default function ChatSentiment({
  initialSentiment,
  chatId,
  className = "",
}: {
  initialSentiment: string;
  chatId: string;
  className: string;
}) {
  let [sentiment, setSentiment] = useState<string>(initialSentiment);

  const sentimentToCodeMapping: any = SENTIMENT_TO_CODE_MAPPING;

  const code = sentimentToCodeMapping[sentiment][0];
  const displayMessage = sentimentToCodeMapping[sentiment][1];

  /**
   * chatId dependency ensures new messages corresponding to new chat id are loaded.
   * channel object:to bind to events on a particular channel.
   * pusherClient object: to bind to events on all subscribed channels simultaneously.
   */
  useEffect(() => {
    // pusher client subscribes to a channel
    const channel = pusherClient.subscribe("chat-messages");
    console.log("bind to event completed");

    //bind function to event to  listen to published events
    channel.bind(`chat__${chatId}`, (data: PusherMessage) => {
      // Method to be dispatched on trigger.
      console.log("Listener received chat message");
      console.log(data);

      console.log("Messages List Updated - line 48");
      // set function only updates the state variable for the next render.
      // If you read the state variable after calling the set function, you will still get the old value
      setSentiment(data.sentiment);
    });

    return () => {
      console.log("flush previous channel!!");
      pusherClient.unsubscribe("chat-messages");
      channel.unbind(`chat__${chatId}`);
    };
  }, [chatId]);

  /**
   * get gemini api sentiment for exisiting chat messages
   */
  async function getGeminiSentimentForReceivedMessage() {
    console.log("Get gemini sentiment from!!");
    console.log(`${chatId}`);
    const geminiSentimentResponse: Response = await fetch(
      `/api/chat/sentiment/gemini/retrieve?chatId=${chatId}`
    );

    if (geminiSentimentResponse.status == 200) {
      const geminiSentiment = await geminiSentimentResponse.json();
      if (geminiSentiment.length == 0) {
        console.log("New chat, no sentiment has been generated");
        // Set sentiment indicator when no messages have been exchanged for a chat
      } else {
        console.log(
          "sentiment received from database when message is received",
          geminiSentiment
        );
        // don't mutate existing objects to pass in set state, react will ignore it
        // instead create new object
        const sentimentText = geminiSentiment[0].gemini_sentiment;
        let updatedSentimentDetails: any = {};
        updatedSentimentDetails.code = sentimentToCodeMapping[sentimentText][0];
        updatedSentimentDetails.sentiment = sentimentText;
        updatedSentimentDetails.explanation = "";
        updatedSentimentDetails.displayMessage =
          sentimentToCodeMapping[sentimentText][1];
        setSentiment(updatedSentimentDetails);
        console.log(
          "setting sentiment upon receiving message:",
          updatedSentimentDetails
        );
      }
    }
  }

  console.log("Current sentiment number:", sentiment);
  const sentimentBgColor = () => {
    if (code == "1") {
      return styles.sentimentExcited;
    } else if (code == "2") {
      return styles.sentimentSatisfied;
    } else if (code == "3") {
      return styles.sentimentNeutral;
    } else if (code == "4") {
      return styles.sentimentDissatisfied;
    } else if (code == "5") {
      return styles.sentimentVeryDissatisfied;
    } else {
      return styles.sentimentNeutral;
    }
  };

  return (
    <div
      className={[
        styles.aiSentimentvariant6,
        className,
        sentimentBgColor(),
      ].join(" ")}
    >
      <a className={styles.aiSentiment}>AI sentiment:</a>
      <div className={styles.dissatisfiedSentimentParent}>
        <div className={styles.dissatisfiedSentiment}>
          <img
            // className={styles.sentimentVeryDissatisfiedIcon}
            loading="lazy"
            alt=""
            src={
              code == "5"
                ? "/sentiment-very-dissatisfied-lg.svg"
                : "/sentiment-very-dissatisfied.svg"
            }
          />
        </div>
        <div className={styles.dissatisfiedSentiment1}>
          <img
            // className={styles.sentimentDissatisfiedIcon}
            loading="lazy"
            alt=""
            src={
              code == "4"
                ? "/sentiment-dissatisfied-lg.svg"
                : "/sentiment-dissatisfied.svg"
            }
          />
        </div>
        <div className={styles.dissatisfiedSentiment2}>
          <img
            // className={styles.sentimentNeutralIcon}
            loading="lazy"
            alt=""
            src={
              code == "3"
                ? "/sentiment-neutral-lg.svg"
                : "/sentiment-neutral.svg"
            }
          />
        </div>
        <div className={styles.dissatisfiedSentiment3}>
          <img
            // className={styles.sentimentSatisfiedIcon}
            loading="lazy"
            alt=""
            src={
              code == "2"
                ? "/sentiment-satisfied-lg.svg"
                : "/sentiment-satisfied.svg"
            }
          />
        </div>
        <div className={styles.dissatisfiedSentiment3}>
          <img
            // className={styles.sentimentExcitedIcon}
            loading="lazy"
            alt=""
            src={
              code == "1"
                ? "/sentiment-excited-lg.svg"
                : "/sentiment-excited.svg"
            }
          />
        </div>
      </div>
      <div className={styles.everythingSeemsOn}>{displayMessage}</div>
    </div>
  );
}
