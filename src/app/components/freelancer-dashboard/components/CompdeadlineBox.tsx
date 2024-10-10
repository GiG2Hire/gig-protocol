import { FunctionComponent } from "react";
import styles from "./CompdeadlineBox.module.css";

export type CompdeadlineBoxType = {
  className?: string;
};

const CompdeadlineBox: FunctionComponent<CompdeadlineBoxType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.compdeadlineBox, className].join(" ")}>
      <div className={styles.iconeventParent}>
        <img
          className={styles.iconevent}
          loading="lazy"
          alt=""
          src="/iconevent.svg"
        />
        <div className={styles.deadline}>Deadline</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.dayParent}>
            <b className={styles.day}>Fri</b>
            <b className={styles.b}>,</b>
          </div>
          <b className={styles.day}>Oct</b>
          <b className={styles.dayNumber}>15</b>
          <b className={styles.b1}>-</b>
          <b className={styles.day}>2024</b>
        </div>
        <div className={styles.at2359Utc}>at 23:59 UTC.</div>
      </div>
    </div>
  );
};

export default CompdeadlineBox;
