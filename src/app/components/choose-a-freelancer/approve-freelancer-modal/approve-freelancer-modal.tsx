import type { NextPage } from "next";
import Btnclose from "./btnclose";
import CompppOnline from "./comppp-online";
import IconG from "./icon-g";
import styles from "./approve-freelancer-modal.module.css";

const ApproveFreelancerModal: NextPage = () => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalapproveFreelancer}>
        <div className={styles.approveFreelancerModal}>
          <a className={styles.approveFreelancer}>Approve Freelancer</a>
          <div className={styles.btncloseWrapper}>
            <Btnclose property1="navy" />
          </div>
        </div>
        <section className={styles.freelancerInfo}>
          <form className={styles.freelancerDetails}>
            <div className={styles.freelancerStatus}>
              <div className={styles.frameParent}>
                <div className={styles.compppOnlineParent}>
                  <CompppOnline
                    property1="online-xl"
                    compppOnlineWidth="5rem"
                    compppOnlineHeight="5rem"
                    onlineTextDecoration="none"
                    statusIconHeight="0.375rem"
                    statusIconWidth="0.375rem"
                  />
                  <div className={styles.experience}>
                    <div className={styles.experienceDetails}>
                      <a className={styles.roaringKitty}>
                        <p className={styles.roaring}>Roaring</p>
                        <p className={styles.roaring}>Kitty</p>
                      </a>
                      <div className={styles.experienceLabels}>
                        <a className={styles.months}>6 Months</a>
                        <div className={styles.onGig2hire}>on GiG2Hire</div>
                      </div>
                      <div className={styles.experienceLabels}>
                        <div className={styles.jobs}>5 Jobs</div>
                        <div className={styles.successful}>successful</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.projectDetails}>
                  <div className={styles.youAreApproving}>
                    You are approving a freelancer for:
                  </div>
                  <h1
                    className={styles.developADefi}
                  >{`Develop a DeFi Dashboard to trade kitty coins `}</h1>
                </div>
              </div>
              <blockquote className={styles.lookingForAn}>
                “Looking for an experienced Freelance that can deliver in a
                timely manner a clean and well designed Dashboard, to manage,
                swap and keep tracks of multiple Hamster Coins, we are a team of
                VCs looking to find long term collaborations. Messages are open
                on the global chat”
              </blockquote>
              <div className={styles.compsubmitTasks}>
                <input
                  className={styles.tasksPlaceholderUse}
                  placeholder="Tasks Placeholder, use the same as Applicant Chat"
                  type="text"
                />
              </div>
              <div className={styles.compdeadlineBoxParent}>
                <div className={styles.compdeadlineBox}>
                  <input
                    className={styles.deadlinePlaceHolder}
                    placeholder="Deadline place holder, use the same component as Applicant Chat"
                    type="text"
                  />
                </div>
                <div className={styles.compbudgetBox}>
                  <div className={styles.budgetPlaceholderUse}>
                    Budget placeholder, use the same component as Applicant Chat
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.backWrapper}>
                <h2 className={styles.back}>Back</h2>
              </div>
              <button className={styles.btniconText}>
                <IconG property1="ice" />
                <b className={styles.button}>Approve Freelancer</b>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ApproveFreelancerModal;
