"use client";
import styles from "./banner.module.css";

const Banner = ({ className = "" }) => {
  return (
    <div id="hero" className={[styles.maxScreen, styles.header].join(" ")}>
      <div className={styles.hello}>
        <hgroup className={styles.title}>
          <small className={styles.live}>
            Live Soon<span className={styles.dot}></span>
          </small>
          <div className={styles.bannerTitle}>
            GIG your
            <br />
            own way
          </div>
          <div className={styles.bannerSubTitle}>
            <strong>Remote work reimagined</strong>
          </div>
        </hgroup>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScgHKs2lfhTxbee4YThvvxMPD3bX7UHSFsysqfhwwBK3D1lxQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener"
        >
          <button className={styles.earlyBirdBtn} type="button">
            {" "}
            Join Early Bird
          </button>
        </a>
      </div>
      <div className={styles.slider}>
        <div className={styles.wrap}>
          <figure className={[styles.freelance, styles.one].join(" ")}>
            <img
              src="assets/freelancer1.webp"
              alt="Profile of a verified X.com Key Opinion Leader on GiG2Hire"
            />
            <figcaption>
              <div className={styles.description}>
                <h4>0xa8...CCcb</h4>
                <p>Key Opinion Leader</p>
              </div>
              <div className={styles.verified}>
                <p className={styles.social}>
                  <img src="assets/x.svg" alt="X.com logo" />
                  <span>X.com</span>
                </p>
                <p className={styles.check}>
                  <img src="assets/verified.svg" alt="Verified Profile Icon" />
                  <span>Verified</span>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className={[styles.freelance, styles.two].join(" ")}>
            <img
              src="assets/freelancer2.webp"
              alt="Profile of a verified Frontend Developer on GiG2Hire"
            />
            <figcaption>
              <div className={styles.description}>
                <h4>0x47...9F3D</h4>
                <p>Frontend Developer</p>
              </div>
              <div className={styles.verified}>
                <p className={styles.social}>
                  <img src="assets/github.svg" alt="Github logo" />
                  <span>Github</span>
                </p>
                <p className={styles.check}>
                  <img src="assets/verified.svg" alt="Verified Profile Icon" />
                  <span>Verified</span>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className={[styles.freelance, styles.three].join(" ")}>
            <img
              src="assets/freelancer3.webp"
              alt="Profile of a verified AI Engineer on GiG2Hire"
            />
            <figcaption>
              <div className={styles.description}>
                <h4>0xa8...CCcb</h4>
                <p>AI Engineer</p>
              </div>
              <div className={styles.verified}>
                <p className={styles.social}>
                  <img src="assets/github.svg" alt="Github logo" />
                  <span>Github</span>
                </p>
                <p className={styles.check}>
                  <img src="assets/verified.svg" alt="Verified Profile Icon" />
                  <span>Verified</span>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className={[styles.freelance, styles.four].join(" ")}>
            <img
              src="assets/freelancer4.webp"
              alt="Profile of a verified UX/UI Designer on GiG2Hire"
            />
            <div className={styles.figcaption}>
              <div className={styles.description}>
                <h4>0x4d...1658</h4>
                <p>UX/UI Designer</p>
              </div>
              <div className={styles.verified}>
                <p className={styles.social}>
                  <img src="assets/behance.svg" alt="Behance logo" />
                  <span>BeHance</span>
                </p>
                <p className={styles.check}>
                  <img src="assets/verified.svg" alt="Verified Profile Icon" />
                  <span>Verified</span>
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
