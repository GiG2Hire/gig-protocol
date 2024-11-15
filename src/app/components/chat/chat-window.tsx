"use client";
import { pusherClient } from "../../lib/pusher";
import styles from "./chat-window.module.css";
import { useEffect, useState } from "react";
const ChatWindow = ({
  initialMessages,
  currentUser,
  chatId,
  className = "",
}: {
  initialMessages: any;
  currentUser: number;
  chatId: string;
  className: string;
}) => {
  const [messages, setMessages] = useState(initialMessages);

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
      setMessages((prev: any) => [...prev, data]);
      console.log(messages);
      // getGeminiSentimentForReceivedMessage();
    });

    return () => {
      console.log("flush previous channel!!");
      pusherClient.unsubscribe("chat-messages");
      channel.unbind(`chat__${chatId}`);
    };
  }, [chatId]);
  return (
    <div>
      <div className={styles.freelancerClientChatMsgBox}>
        {initialMessages?.length > 0 ? (
          initialMessages.map((message) => {
            if (message.senderId !== currentUser) {
              return (
                <div
                  key={message.id} // Ensure unique key for each message
                  className={styles.freenalceemployerChatInner11}
                >
                  <div className={styles.lookingForwardToItMaxThParent}>
                    <p className={styles.lookingForwardTo}>{message.message}</p>
                    <b className={styles.b16}>21:33</b>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={message.id}
                  className={styles.freenalceemployerChatInner10}
                >
                  <div className={styles.definitelySophieIllEnsurParent}>
                    <p className={styles.definitelySophieIll}>{message.message}</p>
                    <b className={styles.b15}>21:33</b>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <p>No messages available</p>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
