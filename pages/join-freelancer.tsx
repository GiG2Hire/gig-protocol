import type { NextPage } from "next";
import ProfileDescription from "./profile-description";
import styles from "./join-freelancer.module.css";
import { useRouter } from "next/router";
export type JoinFreelancerType = {
  className?: string;
};

const JoinFreelancer: NextPage<JoinFreelancerType> = ({ className = "" }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
    pathname: '/',
    query: {
      name: 'Source Freeze',
      count: 30,
    },
    });
    };
  // Handle login with github
  const githubLogin = () => {
    const clientId = 'Ov23liyKADrsIpbypKkj'; // Replace with your actual Client ID
    const redirectUri = 'http://localhost:3000/job-marketplace/'; // Replace with your callback URL
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  }
  return (
    <div className={styles.container23}>
    <div className={[styles.joinFreelancer, className].join(" ")}>
      <header className={styles.welcomeAbroadWrapper}>
        <h1 className={styles.welcomeAbroad}>Welcome abroad!</h1>
      </header>
      <section className={styles.profileSetup}>
        <span  className={styles.profilePicture}>Add Profile Picture
        
        <input className={styles.profilePicture}
          type="file"
          accept="image/*"
         
        />
        </span>
      
        <div className={styles.profileName}>
          <div className={styles.nameInput}>
            <b className={styles.howDoYou}>
              How do you want other freelanceres to call you?
            </b>
            <div className={styles.textInput}>
              <input
                className={styles.searchInGlobal}
                name="freelancer-name"
                id="freelancerId"
                placeholder="e.g Roaring Kitty"
                type="text"
              />
            </div>
          </div>
          <div className={styles.yourCompanyNameParent}>
            <b className={styles.yourCompanyName}>Your company Name</b>
            <div className={styles.textInput1}>
              <div className={styles.searchInGlobal1}>
                e.g. Kitty Productions
              </div>
            </div>
          </div>
          <ProfileDescription />
          <div className={styles.skillsVerification}>
            <b className={styles.verifyYourSkills}>Verify Your Skills</b>
            <div className={styles.verifyButton}>
                <button className={styles.btnVerify} id="btnverify" onClick={githubLogin}>
                  <div className={styles.iconsParent}>
                    <img className={styles.icons} alt="" src="/icons.svg" />
                    <button className={styles.github} id="github">
                      GitHub
                    </button>
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
                  <button className={styles.xcom} id="x">
                    x.com
                  </button>
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
                  <button className={styles.behance} id="behance">
                    BeHance
                  </button>
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
            <button onClick={handleClick} className={styles.back} id="back">
              Back
            </button>
            <button className={styles.btnJoingig} id="btnjoingig">
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
    </div>
  );
};

export default JoinFreelancer;
