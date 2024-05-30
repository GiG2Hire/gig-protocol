import type { NextPage } from "next";
import styles from "./footer1.module.css";

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
      <div className={styles.footerCopyright}>
        <div className={styles.gig2hireAllRights}>
          © 2024 Gig2Hire. All Rights reserved.
        </div>
      </div>
      <div className={styles.footerSocialMedia}>
        <div className={styles.socialMedia}>
          <img
            className={styles.socialMediaIconFirst}
            loading="lazy"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <div className={styles.socialMedia1}>
        <img
          className={styles.socialMediaIconSecond}
          loading="lazy"
          alt=""
          src="/vector-8.svg"
        />
      </div>
    </footer>
  );
};

export default Footer;
