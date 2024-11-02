import Image from "next/image";
import styles from "./about-top.module.css";

const AboutTop = ({ className = "" }) => {
  return (
    <div className={[styles.maxScreen, styles.article].join(" ")}>
      <div className={[styles.details, styles.about].join(" ")}>
        <div className={styles.detDesc}>
          <h2>
            Talent speaks <br /> louder than words.
          </h2>
          <p className={styles.descNavy}>
            Hire frelancers with verified talent
            <br />
            No fancy profiles, just REAL talent
          </p>
        </div>
        <div className={styles.aside}>
          <div className={styles.card}>
            <p>A global network of developers with GitHub verified talent.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.svg}
            >
              <path
                d="M12,1c6.1,0,11,5,11,11.3c0,4.8-3,9.2-7.5,10.7c-0.5,0.1-0.8-0.2-0.8-0.5c0-0.4,0-1.6,0-3.1
                           c0-1.1-0.3-1.7-0.7-2.1c2.4-0.3,5-1.2,5-5.6c0-1.2-0.4-2.2-1.1-3c0.1-0.3,0.5-1.4-0.1-3c0,0-0.9-0.3-3,1.2C13.9,6.6,13,6.4,12,6.4
                           s-1.9,0.1-2.8,0.4c-2.1-1.5-3-1.2-3-1.2C5.6,7.2,6,8.4,6.1,8.7C5.4,9.4,5,10.5,5,11.7c0,4.3,2.6,5.3,5,5.6c-0.3,0.3-0.6,0.8-0.7,1.5
                           c-0.6,0.3-2.2,0.8-3.2-0.9c-0.2-0.3-0.8-1.2-1.7-1.2c-0.9,0-0.4,0.5,0,0.7c0.5,0.3,1,1.3,1.1,1.6c0.2,0.6,0.9,1.8,3.7,1.3
                           c0,0.9,0,1.8,0,2.1c0,0.3-0.2,0.6-0.8,0.5C4,21.4,1,17.1,1,12.3C1,6,5.9,1,12,1z"
              />
            </svg>
          </div>
          <div className={styles.card}>
            <p>Your brand on hands of verified X influencers and KOLs.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.svg}
            >
              <path
                className={styles.st0}
                d="M14,10.3l8-9.3h-1.9l-7,8.1L7.6,1H1.2l8.4,12.2L1.2,23h1.9l7.3-8.5l5.9,8.5h6.4L14,10.3L14,10.3z M11.4,13.3
                           l-0.9-1.2L3.8,2.4h2.9l5.5,7.8l0.9,1.2l7.1,10.2h-2.9L11.4,13.3L11.4,13.3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={[styles.details, styles.payments].join(" ")}>
        <div className={styles.imgCont}>
          <Image
            src="/assets/globe.webp"
            alt="A globe represeting fast paymebts with USD"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.detDesc}>
          <h2>Fast and secure payments worldwide.</h2>
          <p className={styles.descNavy}>
            Enjoy instant payment settlements and secure escrow with no hidden
            fees, powered by blockchain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
