import BtniconText from "./btnicon-text";
import ComptimeLeft from "./comptime-left";
import CompppOnline from "./comppp-online";
import Image from "next/image";
import Framebadge from "./framebadge";
import styles from "./freelancer-details.module.css";

const FreelancerDetails = ({ freelancerId }) => {
  return (
    <div className={styles.gigDetails1}>
      <ComptimeLeft property1="red" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.compppOnlineParent}>
            <CompppOnline property1="online-xl" />
            <div className={styles.userInfoWrapper}>
              <div className={styles.userInfo}>
                <h1 className={styles.username}>userName</h1>
                <div className={styles.userStats}>
                  <div className={styles.monthsOn}>
                    <div className={styles.monthsLabel}>6</div>
                    <div className={styles.monthsOnGig2hire}>
                      Months on GiG2Hire
                    </div>
                  </div>
                  <div className={styles.monthsOn}>
                    <div className={styles.monthsLabel}>5</div>
                    <div className={styles.jobsSuccessful}>Jobs successful</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.freelancerdescription}>
            Freelancer description here.
          </div>
          <div className={styles.verification}>
            <div className={styles.btnVerify}>
              <div className={styles.githubInfo}>
                <Image
                  className={styles.socialgithubIcon}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/socialgithub@2x.png"
                />
                <h2 className={styles.github}>GitHub</h2>
              </div>
              <div className={styles.btnCheck} />
              <Framebadge property1="navy" />
            </div>
            <div className={styles.githubCommits}>
              <b className={styles.githubCommits1}>Github commits:</b>
              <div className={styles.githubcommits}>25</div>
            </div>
          </div>
          <div className={styles.verification}>
            <div className={styles.btnVerify}>
              <div className={styles.githubInfo}>
                <Image
                  className={styles.socialgithubIcon}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/socialx@2x.png"
                />
                <h2 className={styles.xcom}>X.com</h2>
              </div>
              <div className={styles.btnCheck} />
              <div className={styles.xBadge} />
            </div>
            <div className={styles.githubCommits}>
              <b className={styles.xFollowers1}>X followers:</b>
              <div className={styles.moreApplicantsPlaceholder}>1542</div>
            </div>
          </div>
        </div>
        <BtniconText
          buttonVariables="navy-m-def"
          iconHide
          button="Approve"
          btniconTextFlex="unset"
          btniconTextAlignSelf="stretch"
          iconeditSquare="/iconperson-check.svg"
        />
      </div>
    </div>
  );
};

export default FreelancerDetails;
