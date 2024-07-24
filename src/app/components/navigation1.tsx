import type { NextPage } from "next";
import styles from "./navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.group}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.logoIcons}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.logoIcons1}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group.svg"
        />
      </div>
    </header>
  );
};

export default Navigation1;
