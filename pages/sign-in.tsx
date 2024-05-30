import type { NextPage } from "next";
import Navigation1 from "../components/navigation1";
import styles from "./sign-in.module.css";

const SignIn: NextPageSignInType = () => {
  return (
    <div className={styles.signIn}>
      <Navigation1 />
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.freelancerWrapper}>
                <h2 className={styles.freelancer}>Freelancer</h2>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.joinAndStartGettingGigsRiParent}>
                <div className={styles.joinAndStart}>
                  Join and Start getting GiGs Right Away
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.statusParent}>
                    <div className={styles.status}>
                      <img
                        className={styles.checkSmallIcon}
                        loading="lazy"
                        alt=""
                        src="/check-small-1.svg"
                      />
                    </div>
                    <div className={styles.joinForFree}>Join for free.</div>
                  </div>
                  <div className={styles.statusGroup}>
                    <div className={styles.status1}>
                      <img
                        className={styles.checkSmallIcon1}
                        loading="lazy"
                        alt=""
                        src="/check-small-1.svg"
                      />
                    </div>
                    <p className={styles.noFeesOn}>
                      No fees on completed jobs.
                    </p>
                  </div>
                  <div className={styles.statusContainer}>
                    <div className={styles.status2}>
                      <img
                        className={styles.checkSmallIcon2}
                        loading="lazy"
                        alt=""
                        src="/check-small-1.svg"
                      />
                    </div>
                    <div className={styles.manageYourGigs}>
                      Manage your gigs.
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.status3}>
                      <img
                        className={styles.checkSmallIcon3}
                        loading="lazy"
                        alt=""
                        src="/check-small-1.svg"
                      />
                    </div>
                    <div className={styles.getPaidAs}>
                      Get paid as soon you deliver.
                    </div>
                  </div>
                  <div className={styles.statusParent1}>
                    <div className={styles.status4}>
                      <img
                        className={styles.checkSmallIcon4}
                        loading="lazy"
                        alt=""
                        src="/check-small-1.svg"
                      />
                    </div>
                    <p className={styles.getTipsWithout}>
                      Get tips without comision.
                    </p>
                  </div>
                </div>
              </div>
              <button className={styles.btn}>
                <b className={styles.text}>Join as a Freelancer</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroChild}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.clientWrapper}>
                <h2 className={styles.client}>Client</h2>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.joinToFindVerifiedTalentParent}>
                <div className={styles.joinToFind}>
                  Join to find verified talent
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.statusParent2}>
                    <div className={styles.status5}>
                      <img
                        className={styles.checkSmallIcon5}
                        loading="lazy"
                        alt=""
                        src="/check-small-5.svg"
                      />
                    </div>
                    <div className={styles.joinForFree1}>Join for free.</div>
                  </div>
                  <div className={styles.statusParent3}>
                    <div className={styles.status6}>
                      <img
                        className={styles.checkSmallIcon6}
                        loading="lazy"
                        alt=""
                        src="/check-small-5.svg"
                      />
                    </div>
                    <div className={styles.payZeroTo}>
                      Pay zero to post jobs.
                    </div>
                  </div>
                  <div className={styles.statusParent4}>
                    <div className={styles.status7}>
                      <img
                        className={styles.checkSmallIcon7}
                        loading="lazy"
                        alt=""
                        src="/check-small-5.svg"
                      />
                    </div>
                    <div className={styles.getJustVerified}>
                      Get just verified talent.
                    </div>
                  </div>
                  <div className={styles.statusParent5}>
                    <div className={styles.status8}>
                      <img
                        className={styles.checkSmallIcon8}
                        loading="lazy"
                        alt=""
                        src="/check-small-5.svg"
                      />
                    </div>
                    <div className={styles.yourMoneySecured}>
                      Your money secured.
                    </div>
                  </div>
                  <div className={styles.statusParent6}>
                    <div className={styles.status9}>
                      <img
                        className={styles.checkSmallIcon9}
                        loading="lazy"
                        alt=""
                        src="/check-small-5.svg"
                      />
                    </div>
                    <div className={styles.findAnyTalent}>Find any talent</div>
                  </div>
                </div>
              </div>
              <button className={styles.btn1}>
                <b className={styles.text1}>Join as a Client</b>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
