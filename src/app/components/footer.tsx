import type { NextPage } from "next";
import styles from "./footer.module.css";
import Link from "next/link";

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
          <Link href="https://x.com/gig2hire">
            <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
          </Link>  
        </div>
      </div>
      <div className={styles.socialMedia1}>
        <Link href="https://discord.com/channels/1201947165455290409/1258067746126823456">
          <img className={styles.vectorIcon1} alt="" src="/vector-8.svg" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
