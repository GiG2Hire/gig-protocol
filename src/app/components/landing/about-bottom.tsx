import { join } from "path";
import styles from "./about-bottom.module.css";
import Image from "next/image";

const AboutBottom = ({ className = "" }) => {
  return (
    <div
      id={styles.aboutBottom}
      className={[styles.maxScreen, styles.article].join(" ")}
    >
      <div className={[styles.details, styles.vaults].join(" ")}>
        <div className={styles.detDesc}>
          <h2 className={styles.h2}>Community Driven Verdict Vaults.</h2>
          <p className={styles.descNavy}>
            A self sustainable work ecosystem where truth and commitment is
            valued.
          </p>
        </div>
        <aside className={styles.aside}>
          <div className={styles.verdictPoints}>
            <h4>
              Earn redeemable points for anonymously arbitrating disputes.
            </h4>
            <p>
              You will earn reputation points for faithfully arbitrating
              disputes.
            </p>
          </div>
          <Image
            src="/assets/verdict-vault.webp"
            alt="A humanoid face representing Artificial Inteligence"
            width={300}
            height={300}
          />
          <div className={styles.verdictVault}>
            <h4>Arbitrating for:</h4>
            <p>A dashboard of kitty memecoins.</p>
            <div className={styles.evidence}>
              <Image
                src="/assets/evidence.svg"
                alt="Icon Representing Evidence"
                width={24}
                height={42}
              />
              <figcaption>This dispute has 5 evidence files.</figcaption>
            </div>
          </div>
        </aside>
      </div>
      <div className={[styles.details, styles.dao].join(" ")}>
        <div className={styles.imgCont}>
          <Image
            src="/assets/dao.webp"
            alt="A trasury building with coins hovering, representing a decentralized autonomous organization to govern GIG2Hire by users for users."
            width={300}
            height={300}
          />
        </div>
        <div className={styles.detDesc}>
          <h2 className={styles.h2}>Self governed by users, for users.</h2>
          <p className={styles.descNavy}>
            $GIG and LP staking for on-chain governance rights and extra perks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
