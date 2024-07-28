import styles from "./chat-sentiment.module.css";
export default function ChatSentiment({ sentiment, className = "" }) {
  return (
    <div className={[styles.aiSentimentvariant6, className].join(" ")}>
      <a className={styles.aiSentiment}>AI sentiment:</a>
      <div className={styles.dissatisfiedSentimentParent}>
        <div className={styles.dissatisfiedSentiment}>
          <img
            className={styles.sentimentVeryDissatisfiedIcon}
            loading="lazy"
            alt=""
            src="/sentiment-very-dissatisfied.svg"
          />
        </div>
        <div className={styles.dissatisfiedSentiment1}>
          <img
            className={styles.sentimentDissatisfiedIcon}
            loading="lazy"
            alt=""
            src="/sentiment-dissatisfied.svg"
          />
        </div>
        <div className={styles.dissatisfiedSentiment2}>
          <img
            className={styles.sentimentNeutralIcon}
            loading="lazy"
            alt=""
            src="/sentiment-neutral.svg"
          />
        </div>
        <div className={styles.dissatisfiedSentiment3}>
          <img
            className={styles.sentimentSatisfiedIcon}
            loading="lazy"
            alt=""
            src="/sentiment-satisfied.svg"
          />
        </div>
        <img
          className={styles.sentimentExcitedIcon}
          loading="lazy"
          alt=""
          src="/sentiment-excited.svg"
        />
      </div>
      <div className={styles.everythingSeemsOn}>Everything seems on track!</div>
    </div>
  );
}
