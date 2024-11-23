"use client";
import { useState } from "react";
import styles from "./chat-input.module.css";
import { prepareConversation } from "@/src/utils/prepare-conversation";
import ChatStatusNotification from "./chat-notify-folder";
import { STATUS_200 } from "@/src/constants/appConstants";

const ChatInput = ({
  hasSubmitted,
  userRole,
  currentUser,
  receiverUser,
  chatId,
  messages,
}: {
  hasSubmitted: boolean;
  userRole: string;
  currentUser: number;
  receiverUser: number;
  chatId: string;
  messages: any;
}) => {
  const [chatMsg, setChatMsg] = useState<string>("");

  /**
   * Store message in database and publish message to pusher to enable realtime communication
   * @notice prioritize storing message in database over sending to pusher to enable future retrieval of sent
   * messages even in case of pusher failure
   * @dev enable database persistence and pusher publish asynchronously
   * @param chatMsg message to be sent to receiver user
   * @author mgroovyank (Mayank Chhipa)
   */
  const sendChatMsg = async () => {
    if (chatMsg == "") {
      return;
    }
    // TODO: enable database persistence and pusher publish asynchronously
    console.log("Sending chat message");
    console.log(chatMsg);
    console.log("receiver user:--------------", receiverUser);
    const sendChatMsgOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        senderId: currentUser,
        receiverId: receiverUser,
        chatMsg: chatMsg,
        sentTimestamp: new Date(),
        chatId: chatId,
      }),
    };
    console.log(sendChatMsgOptions);
    const sendChatMsgResponse = await fetch(
      "/api/chat/send",
      sendChatMsgOptions
    );

    let conversation;

    if (sendChatMsgResponse.status == STATUS_200) {
      console.log("Message stored in database successfully");
      const sentMessage = await sendChatMsgResponse.json();
      console.log("messages list updated - line 145");
      conversation = prepareConversation([...messages, sentMessage], true);
    } else {
      console.log("Failed to store message in database!!");
    }
    console.log("----conversation------", conversation);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        chatId: chatId,
        conversation: conversation,
      }),
    };

    console.log("Determining chat sentiment via Gemini API");

    let geminiSentimentResponse = await fetch(
      "/api/chat/sentiment/gemini",
      options
    );

    if (geminiSentimentResponse.status == STATUS_200) {
      console.log("Got sentiment from gemini api");
      console.log(geminiSentimentResponse);
    }

    const geminiSentiment = await geminiSentimentResponse.json();
    console.log(geminiSentiment);
    console.log(geminiSentiment.response.candidates[0].content.parts[0].text);

    // contains sentiment type and explanation
    const actualGeminiSentiment = JSON.parse(
      geminiSentiment.response.candidates[0].content.parts[0].text
    );

    // positive, negative, neutral etc.
    const sentimentType: string = actualGeminiSentiment["sentiment"];

    const storeSentimentoptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        chatId: chatId,
        sentiment: sentimentType,
      }),
    };

    const storeSentimentResponse = await fetch(
      "/api/chat/sentiment/gemini/store",
      storeSentimentoptions
    );

    if (storeSentimentResponse.status == 201) {
      console.log("Successfully stored sentiment in database!!");
    }

    const sendPusherOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        senderId: currentUser,
        receiverId: receiverUser,
        chatMsg: chatMsg,
        sentTimestamp: new Date(),
        chatId: chatId,
        sentiment: actualGeminiSentiment["sentiment"],
      }),
    };

    let res = await fetch("/api/message/send", sendPusherOptions);

    if (res.status == 200) {
      setChatMsg("");
      console.log("Published event successfully to pusher!!");
    }
  };
  console.log("User Role", userRole);

  return (
    <>
      {hasSubmitted && <ChatStatusNotification role={userRole} />}
      <div className={styles.frameParent11}>
        <input
          className={styles.frameInput}
          placeholder="Type your message..."
          type="text"
          onChange={(e) => setChatMsg(e.target.value)}
        />
        <div className={styles.sendChatMsgBtn} onClick={sendChatMsg}>
          <div className={styles.send21}>
            <img className={styles.sendButtonIcon} alt="" src="/vector-3.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
