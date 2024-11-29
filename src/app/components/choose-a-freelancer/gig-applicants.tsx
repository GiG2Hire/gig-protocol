import Compchatbubble from "./compchatbubble";
import styles from "./gig-applicants.module.css";

const GigApplicants = ({ applicants, switchOfferContext }) => {
  return (
    <div className={styles.gigDetails}>
      <h1 className={styles.applicants}>Applicants</h1>
      <div className={styles.applicantList}>
        {applicants.map((offer: GigOffer) => {
          return (
            <div
              key={offer.offerId}
              className={styles.applicantDiv}
              onClick={switchOfferContext(offer.freelancerId)}
            >
              <Compchatbubble
                property1="Default"
                msgAmmount="0"
                lastMessage="lastMessage"
                freelancerName="Roaring Kitty"
                time="00:00"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GigApplicants;
