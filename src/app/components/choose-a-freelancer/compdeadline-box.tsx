import type { NextPage } from "next";
import Image from "next/image";
import styles from "./compdeadline-box.module.css";

export type CompdeadlineBoxType = {
  className?: string;
  date?: string;
};

const CompdeadlineBox: NextPage<CompdeadlineBoxType> = ({
  className = "",
  date = "Nov 16, 2024",
}) => {
  return (
    <div className={[styles.compdeadlineBox, className].join(" ")}>
      <div className={styles.iconeventParent}>
        <Image
          className={styles.iconevent}
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/iconevent.svg"
        />
        <h2 className={styles.deadline}>Deadline</h2>
      </div>
      <div className={styles.yearParent}>
        <b className={styles.year}>{date}</b>
        <div className={styles.at2359Utc}>at 23:59 UTC.</div>
      </div>
    </div>
  );
};

export default CompdeadlineBox;
