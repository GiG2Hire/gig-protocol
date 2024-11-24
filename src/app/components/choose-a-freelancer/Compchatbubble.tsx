import { FunctionComponent } from "react";
import styles from "./Compchatbubble.module.css";

export type CompchatbubbleType = {
  className?: string;
  freelancerName?: string;
  time?: string;
  lastMessage?: string;
  msgAmmount?: string;

  /** Variant props */
  property1?: string;
};

const Compchatbubble: FunctionComponent<CompchatbubbleType> = ({
  className = "",
  property1 = "Default",
  freelancerName = "Roaring Kitty",
  time = "00:00",
  lastMessage = "lastMessage",
  msgAmmount = "0",
}) => {
  return (
    <div
      className={[styles.compchatbubble, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.freelacepicIcon}
        loading="lazy"
        alt=""
        src="/freelacepic@2x.png"
      />
      <div className={styles.applicantDetails}>
        <div className={styles.applicantName}>
          <div className={styles.freelancername}>{freelancerName}</div>
          <div className={styles.namePlaceholder}>{time}</div>
        </div>
        <div className={styles.lastMessage}>
          <div className={styles.lastmessage}>{lastMessage}</div>
          <div className={styles.messageTimestamp}>
            <b className={styles.timestampPlaceholder}>{msgAmmount}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compchatbubble;
