import { FunctionComponent } from "react";
import CompsubmitTasks from "./components/CompsubmitTasks";
import CompdeadlineBox from "./components/CompdeadlineBox";
import CompbudgetBox from "./components/CompbudgetBox";
import CompextraInfo from "./components/CompextraInfo";
import styles from "./ModalreviewOffer.module.css";

export type ModalreviewOfferType = {
  closeModalViewOffer: any;
  className?: string;
};

const ModalreviewOffer: FunctionComponent<ModalreviewOfferType> = ({
  closeModalViewOffer, className = "",
}) => {

  return (
    <div className={[styles.modalreviewOffer, className].join(" ")}>
      <div className={styles.viewOfferParent}>
        <a className={styles.viewOffer}>View Offer</a>
        <div className={styles.btnclose} onClick={closeModalViewOffer}>
          <img className={styles.iconclose} alt="" src="./iconclose.svg" />
        </div>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.developADefiDashboardForHParent}>
          <b className={styles.developADefi}>
            Develop a DeFi Dashboard for Hamster Coins
          </b>
          <blockquote className={styles.lookingForAn}>
            “Looking for an experienced Freelance that can deliver in a timely
            manner a clean and well designed Dashboard, to manage, swap and keep
            tracks of multiple Hamster Coins, we are a team of VCs looking to
            find long term collaborations. Messages are open on the global chat”
          </blockquote>
          <CompsubmitTasks />
          <div className={styles.compdeadlineBoxParent}>
            <CompdeadlineBox />
            <CompbudgetBox />
          </div>
        </div>
        <CompextraInfo />
        <footer className={styles.withdrawFromOfferParent}>
          <div className={styles.withdrawFromOffer}>Withdraw from offer</div>
          <div className={styles.btniconText}>
            <img
              className={styles.iconclose}
              loading="lazy"
              alt=""
              src="/iconcomments-disabled.svg"
            />
            <b className={styles.unavailable}>Unavailable</b>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ModalreviewOffer;
