import type { NextPage } from "next";
import Image from "next/image";
import styles from "./compchatbubble.module.css";

export type CompchatbubbleType = {
  className?: string;
  msgAmmount?: string;
  lastMessage?: string;
  freelancerName?: string;
  time?: string;

  /** Variant props */
  property1?: string;
};

const Compchatbubble: NextPage<CompchatbubbleType> = ({
  className = "",
  property1 = "Default",
  msgAmmount = "0",
  lastMessage = "lastMessage",
  freelancerName = "Roaring Kitty",
  time = "00:00",
}) => {
  return (
    <div
      className={[styles.compchatbubble, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.freelacepicIcon}
        loading="lazy"
        width={48}
        height={48}
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
