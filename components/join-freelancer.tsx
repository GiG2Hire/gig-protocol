import type { NextPage } from "next";
import SearchInGlobalChat from "./search-in-global-chat";
import styles from "./join-freelancer.module.css";

export type JoinFreelancerType = {
  className?: string;
};

const JoinFreelancer: NextPage<JoinFreelancerType> = ({ className = "" }) => {
  return (
    <div className={[styles.joinFreelancer, className].join(" ")}>
      <header className={styles.welcomeAbroadWrapper}>
        <h1 className={styles.welcomeAbroad}>Welcome abroad!</h1>
      </header>
      <section className={styles.profileSetup}>
        <div className={styles.profilePicture}>
          <img
            className={styles.addPhotoAlternateIcon}
            loading="lazy"
            alt=""
            src="/add-photo-alternate.svg"
          />
          <b className={styles.addAProfile}>Add a Profile Picture</b>
        </div>
        <div className={styles.profileName}>
          <div className={styles.nameInput}>
            <b className={styles.howDoYou}>
              How do you want other freelanceres to call you?
            </b>
            <div className={styles.textInput}>
              <SearchInGlobalChat />
            </div>
          </div>
          <div className={styles.yourCompanyNameParent}>
            <b className={styles.yourCompanyName}>Your company Name</b>
            <div className={styles.textInput1}>
              <div className={styles.searchInGlobal}>
                e.g. Kitty Productions
              </div>
            </div>
          </div>
          <div className={styles.profileDescription}>
            <b className={styles.addADescription}>
              Add a description for your Profile
            </b>
            <div className={styles.descriptionInput}>
              <div className={styles.textInput2}>
                <p className={styles.searchInGlobal1}>
                  Looking for great feline minds, that are top notch at their
                  jobs
                </p>
              </div>
              <b className={styles.empty}>0/480</b>
            </div>
          </div>
          <div className={styles.skillsVerification}>
            <b className={styles.verifyYourSkills}>Verify Your Skills</b>
            <div className={styles.verifyButton}>
              <button className={styles.btnVerify}>
                <div className={styles.iconsParent}>
                  <img className={styles.icons} alt="" src="/icons.svg" />
                  <b className={styles.github}>GitHub</b>
                </div>
                <div className={styles.btnCheck}>
                  <img
                    className={styles.checkSmallIcon}
                    alt=""
                    src="/check-small2.svg"
                  />
                </div>
              </button>
              <div className={styles.btnVerify1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className={styles.xcom}>x.com</b>
                </div>
                <div className={styles.btnCheck1}>
                  <img
                    className={styles.checkSmallIcon1}
                    alt=""
                    src="/check-small2.svg"
                  />
                </div>
              </div>
              <div className={styles.btnVerify2}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group1.svg"
                  />
                  <b className={styles.behance}>BeHance</b>
                </div>
                <div className={styles.btnCheck2}>
                  <img
                    className={styles.checkSmallIcon2}
                    alt=""
                    src="/check-small2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <b className={styles.back}>Back</b>
            <button className={styles.btnJoingig}>
              <img
                className={styles.gig2hire1Icon}
                alt=""
                src="/gig2hire-111.svg"
              />
              <b className={styles.getStarted}>Find GiGs</b>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinFreelancer;
