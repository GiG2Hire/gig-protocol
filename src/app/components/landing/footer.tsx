import styles from "./footer.module.css";
import Image from "next/image";

const Footer = ({ className = "" }) => {
  return (
    <div id={styles.contact} className={styles.footer}>
      <section className={styles.maxScreen}>
        <div>
          <Image
            src="/assets/gig-logo.svg"
            alt="GIG2Hire Logo"
            width={84}
            height={32}
          />
          <p>
            <small>
              The trustless and zero-fees
              <br />
              freelance marketplace.
            </small>
          </p>
        </div>
        <div>
          <h5>Explore GIG2Hire</h5>
          <ul>
            <li>
              Whitepaper <span className={styles.soon}>SOON</span>
            </li>
            <li>
              Roadmap <span className={styles.soon}>SOON</span>
            </li>
            <li>
              Team <span className={styles.soon}>SOON</span>
            </li>
            <li>
              Tokenomics <span className={styles.soon}>SOON</span>
            </li>
          </ul>
        </div>
        <div>
          <h5>Get Started</h5>
          <ul>
            <li>
              <a href="https://medium.com/@gig2hire/is-the-gig-economy-fair-de401cb08922">
                Freelancing nowadays
              </a>
            </li>
            <li>
              Create a GIG <span className={styles.soon}>SOON</span>
            </li>
            <li>
              Apply for a GIG <span className={styles.soon}>SOON</span>
            </li>
            <li>
              Stake $GIG <span className={styles.soon}>SOON</span>
            </li>
            <li>
              Provide Liquidity <span className={styles.soon}>SOON</span>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact Us:</h5>
          <a href="mailto:hello@gig2hire.com" className={styles.email}>
            hello@gig2hire.com
          </a>
          <p>
            <em>Have questions? We’re here to help.</em>
          </p>
          <div className={styles.socials}>
            <a
              href="https://x.com/gig2hire"
              className={styles.socialBtn}
              target="_blank"
              title="x.com"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14,10.3l8-9.3h-1.9l-7,8.1L7.6,1H1.2l8.4,12.2L1.2,23h1.9l7.3-8.5l5.9,8.5h6.4L14,10.3L14,10.3z M11.4,13.3l-0.9-1.2L3.8,2.4h2.9l5.5,7.8l0.9,1.2l7.1,10.2h-2.9L11.4,13.3L11.4,13.3z" />
              </svg>
            </a>
            <a
              href="https://github.com/GiG2Hire"
              className={styles.socialBtn}
              target="_blank"
              title="Github"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  className={styles.st0}
                  d="M12,1c6.1,0,11,5,11,11.3c0,4.8-3,9.2-7.5,10.7c-0.5,0.1-0.8-0.2-0.8-0.5c0-0.4,0-1.6,0-3.1
                            c0-1.1-0.3-1.7-0.7-2.1c2.4-0.3,5-1.2,5-5.6c0-1.2-0.4-2.2-1.1-3c0.1-0.3,0.5-1.4-0.1-3c0,0-0.9-0.3-3,1.2C13.9,6.6,13,6.4,12,6.4
                            s-1.9,0.1-2.8,0.4c-2.1-1.5-3-1.2-3-1.2C5.6,7.2,6,8.4,6.1,8.7C5.4,9.4,5,10.5,5,11.7c0,4.3,2.6,5.3,5,5.6c-0.3,0.3-0.6,0.8-0.7,1.5
                            c-0.6,0.3-2.2,0.8-3.2-0.9c-0.2-0.3-0.8-1.2-1.7-1.2c-0.9,0-0.4,0.5,0,0.7c0.5,0.3,1,1.3,1.1,1.6c0.2,0.6,0.9,1.8,3.7,1.3
                            c0,0.9,0,1.8,0,2.1c0,0.3-0.2,0.6-0.8,0.5C4,21.4,1,17.1,1,12.3C1,6,5.9,1,12,1z"
                />
              </svg>
            </a>
            <a
              href="https://discord.gg/sFEZN2nFkV"
              className={styles.socialBtn}
              target="_blank"
              title="Discord"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M15.7,15.1c-1.1-0.1-2-1-2-2.1c0,0,0-0.1,0-0.1v0c0,0,0-0.1,0-0.1c0-1.1,0.9-2,2-2.1h0c1.1,0.1,2,1,2,2.1c0,0,0,0.1,0,0.1v0
                            c0,0,0,0.1,0,0.1C17.6,14.1,16.8,15,15.7,15.1L15.7,15.1L15.7,15.1z M8.4,15.1c-1.1-0.1-2-1-2-2.1c0,0,0-0.1,0-0.1v0
                            c0,0,0-0.1,0-0.1c0-1.1,0.9-2,2-2.1h0c1.1,0.1,2,1,2,2.1c0,0,0,0.1,0,0.1v0c0,0,0,0.1,0,0.1C10.3,14.1,9.5,15,8.4,15.1L8.4,15.1z
                            M19.6,5c-1.3-0.6-2.8-1.1-4.4-1.4l-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0l0,0c-0.2,0.3-0.4,0.7-0.5,1.1l0,0.1c-0.8-0.1-1.6-0.2-2.5-0.2
                            s-1.8,0.1-2.6,0.2l0.1,0C9.3,4.3,9.1,4,8.9,3.6l0,0.1c0,0,0,0-0.1,0c0,0,0,0,0,0h0C7.2,3.9,5.7,4.4,4.3,5.1l0.1,0c0,0,0,0,0,0l0,0
                            C2.3,8,1,11.7,1,15.7c0,0.7,0,1.3,0.1,2l0-0.1c0,0,0,0,0,0.1l0,0c1.6,1.2,3.4,2.1,5.4,2.7l0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0l0,0
                            c0.4-0.5,0.8-1.1,1.1-1.8l0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1h0c-0.7-0.3-1.2-0.5-1.8-0.8l0.1,0c0,0,0,0,0-0.1c0,0,0,0,0-0.1l0,0
                            c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0,0c0,0,0,0,0,0h0C8.1,18,10,18.5,12,18.5s3.9-0.5,5.6-1.3l-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0
                            c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0,0c-0.5,0.3-1,0.6-1.6,0.8l-0.1,0c0,0,0,0,0,0.1c0,0,0,0,0,0v0
                            c0.4,0.7,0.7,1.3,1.2,1.9l0,0c0,0,0,0,0.1,0c0,0,0,0,0,0h0c2.1-0.7,3.9-1.6,5.5-2.8l0,0c0,0,0,0,0-0.1l0,0C23,17,23,16.3,23,15.6
                            C23,11.7,21.7,8,19.6,5L19.6,5C19.6,5,19.6,5,19.6,5L19.6,5L19.6,5z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/gig2hire/"
              className={styles.socialBtn}
              target="_blank"
              title="Instagram"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  id="path26-2"
                  d="M12,1C9,1,8.6,1,7.5,1.1c-1.2,0.1-2,0.2-2.7,0.5C4.1,1.9,3.5,2.2,2.8,2.8c-0.6,0.6-1,1.2-1.3,1.9
                            C1.3,5.5,1.1,6.3,1.1,7.5C1,8.6,1,9,1,12s0,3.4,0.1,4.5c0.1,1.2,0.2,2,0.5,2.7c0.3,0.7,0.7,1.3,1.3,1.9c0.6,0.6,1.2,1,1.9,1.3
                            c0.7,0.3,1.5,0.5,2.7,0.5C8.6,23,9,23,12,23c3,0,3.4,0,4.5-0.1c1.2-0.1,2-0.2,2.7-0.5c0.7-0.3,1.3-0.7,1.9-1.3
                            c0.6-0.6,1-1.2,1.3-1.9c0.3-0.7,0.5-1.5,0.5-2.7C23,15.4,23,15,23,12s0-3.4-0.1-4.5c-0.1-1.2-0.2-2-0.5-2.7
                            c-0.3-0.7-0.7-1.3-1.3-1.9c-0.6-0.6-1.2-1-1.9-1.3c-0.7-0.3-1.5-0.5-2.7-0.5C15.4,1,15,1,12,1L12,1z M11,3c0.3,0,0.6,0,1,0
                            c2.9,0,3.3,0,4.4,0.1c1.1,0,1.7,0.2,2,0.4c0.5,0.2,0.9,0.4,1.3,0.8c0.4,0.4,0.6,0.8,0.8,1.3c0.2,0.4,0.3,1,0.4,2
                            C21,8.7,21,9.1,21,12s0,3.3-0.1,4.4c0,1.1-0.2,1.7-0.4,2c-0.2,0.5-0.4,0.9-0.8,1.3c-0.4,0.4-0.8,0.6-1.3,0.8c-0.4,0.2-1,0.3-2,0.4
                            C15.3,21,14.9,21,12,21c-2.9,0-3.3,0-4.4-0.1c-1.1,0-1.7-0.2-2-0.4c-0.5-0.2-0.9-0.4-1.3-0.8c-0.4-0.4-0.6-0.8-0.8-1.3
                            c-0.2-0.4-0.3-1-0.4-2C3,15.3,3,14.9,3,12S3,8.7,3,7.6c0-1.1,0.2-1.7,0.4-2C3.6,5,3.9,4.6,4.2,4.2S5,3.6,5.5,3.4
                            c0.4-0.2,1-0.3,2-0.4C8.6,3,9,3,11,3L11,3z M17.9,4.8c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3
                            S18.6,4.8,17.9,4.8L17.9,4.8z M12,6.4c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6S15.1,6.4,12,6.4L12,6.4z
                            M12,8.3c2,0,3.7,1.6,3.7,3.7c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7C8.3,10,10,8.3,12,8.3z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/gig2hire"
              className={styles.socialBtn}
              target="_blank"
              title="LinkedIn"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polygon points="2.4,22 6.6,22 6.6,22 6.6,8.7 2.4,8.7 " />
                <path d="M4.5,2C3.1,2,2,3.1,2,4.5S3.1,7,4.4,7s2.4-1.1,2.4-2.5S5.8,2,4.5,2z" />
                <path d="M17.2,8.3c-2.8,0-4,2.2-4,2.2V8.7h-4V22h3.9v-7c0-1.9,0.9-3,2.5-3c1.5,0,2.2,1.1,2.2,3v7H22v-8.4C22,10,20,8.3,17.2,8.3z" />
              </svg>
            </a>
            <a
              href="https://medium.com/@gig2hire"
              className={styles.socialBtn}
              target="_blank"
              title="Medium"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.4,12c0,3.5-2.8,6.2-6.2,6.2S1,15.4,1,12s2.8-6.2,6.2-6.2S13.4,8.5,13.4,12" />
                <path d="M20.2,12c0,3.2-1.4,5.9-3.1,5.9S14,15.2,14,12s1.4-5.9,3.1-5.9S20.2,8.8,20.2,12" />
                <path d="M23,12c0,2.9-0.5,5.3-1.1,5.3s-1.1-2.4-1.1-5.3s0.5-5.3,1.1-5.3C22.5,6.7,23,9.1,23,12" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <p className={styles.ip}>
        <small>© 2024 Gig2Hire. All Rights Reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
