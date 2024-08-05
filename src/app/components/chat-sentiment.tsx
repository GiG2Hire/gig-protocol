import styles from "./chat-sentiment.module.css";
export default function ChatSentiment({ sentiment, className = "" }) {
  console.log("Current sentiment number:", sentiment);
  const sentimentBgColor = () => {
    if (sentiment.code == "1") {
      return styles.sentimentExcited;
    } else if (sentiment.code == "2") {
      return styles.sentimentSatisfied;
    } else if (sentiment.code == "3") {
      return styles.sentimentNeutral;
    } else if (sentiment.code == "4") {
      return styles.sentimentDissatisfied;
    } else if (sentiment.code == "5") {
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
              sentiment.code == "5"
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
              sentiment.code == "4"
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
              sentiment.code == "3"
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
              sentiment.code == "2"
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
              sentiment.code == "1"
                ? "/sentiment-excited-lg.svg"
                : "/sentiment-excited.svg"
            }
          />
        </div>
      </div>
      <div className={styles.everythingSeemsOn}>{sentiment.displayMessage}</div>
    </div>
  );
}
