import type { NextPage } from "next";
import styles from "./join-client.module.css";

export type JoinClientType = {
  className?: string;
};

const JoinClient: NextPage<JoinClientType> = ({ className = "" }) => {
  return (
    <div className={[styles.joinClient, className].join(" ")}>
      <div className={styles.welcomeAbroadWrapper}>
        <h1 className={styles.welcomeAbroad}>Welcome abroad!</h1>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.addPhotoAlternateParent}>
          <img
            className={styles.addPhotoAlternateIcon}
            loading="lazy"
            alt=""
            src="/add-photo-alternate1.svg"
          />
          <b className={styles.addAProfile}>Add a Profile Picture</b>
        </div>
        <div className={styles.nameInputFieldsParent}>
          <div className={styles.nameInputFields}>
            <b className={styles.howDoYou}>
              How do you want other freelanceres to call you?
            </b>
            <div className={styles.textInput}>
              <a className={styles.searchInGlobal}>e.g Roaring Kitty</a>
            </div>
          </div>
          <div className={styles.nameInputFields1}>
            <b className={styles.yourCompanyName}>Your company Name</b>
            <input
              className={styles.textInput1}
              placeholder="e.g Roaring Production"
              type="text"
            />
          </div>
          <div className={styles.yourCompanyNameParent}>
            <b className={styles.yourCompanyName1}>Your company Name</b>
            <div className={styles.textInput2}>
              <div className={styles.searchInGlobal1}>
                e.g. Kitty Productions
              </div>
            </div>
          </div>
          <div className={styles.addADescriptionForYourProParent}>
            <b className={styles.addADescription}>
              Add a description for your Profile
            </b>
            <div className={styles.textInputParent}>
              <div className={styles.textInput3}>
                <p className={styles.searchInGlobal2}>
                  Looking for great feline minds, that are top notch at their
                  jobs
                </p>
              </div>
              <b className={styles.b}>0/480</b>
            </div>
          </div>
          <div className={styles.backParent}>
            <b className={styles.back}>Back</b>
            <button className={styles.btnJoingig}>
              <img
                className={styles.gig2hire1Icon}
                alt=""
                src="/gig2hire-111.svg"
              />
              <b className={styles.getStarted}>Create GiGs</b>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinClient;
