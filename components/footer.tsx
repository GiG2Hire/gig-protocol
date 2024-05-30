import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <img
        className={styles.gig2hire1Icon}
        loading="lazy"
        alt=""
        src="/gig2hire-11.svg"
      />
      <div className={styles.gig2hireAllRightsReservedWrapper}>
        <div className={styles.gig2hireAllRights}>
          © 2024 Gig2Hire. All Rights reserved.
        </div>
      </div>
      <div className={styles.socialMediaWrapper}>
        <div className={styles.socialMedia}>
          <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
        </div>
      </div>
      <div className={styles.socialMedia1}>
        <img className={styles.vectorIcon1} alt="" src="/vector-8.svg" />
      </div>
    </footer>
  );
};

export default Footer;
