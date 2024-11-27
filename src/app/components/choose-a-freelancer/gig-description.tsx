import styles from "./gig-description.module.css";
import CompgigDescription from "./compgig-description";
import CompsubmitTasks from "./compsubmit-tasks";
import CompdeadlineBox from "./compdeadline-box";
import CompbudgetBox from "./compbudget-box";
import Compchatbubble from "./compchatbubble";
import BtniconText from "./btnicon-text";
const GigDescription = () => {
  return (
    <div className={styles.gigDetails}>
      <CompgigDescription property1="default" gigDescription="gigDescription" />
      <CompsubmitTasks
        property1="default"
        taskCompletedHide={false}
        taskCompleted="00"
        taskTotal="00"
      />
      <CompdeadlineBox date="Nov 16, 2024" />
      <CompbudgetBox budget="0000" />
      <div className={styles.offerActions}>
        <BtniconText
          buttonVariables="navy-st-m-def"
          iconHide
          button="Edit"
          btniconTextFlex="1"
          btniconTextAlignSelf="unset"
          iconeditSquare="/iconedit-square.svg"
        />
        <BtniconText
          buttonVariables="red-m-def"
          iconHide={false}
          button="Cancel"
          iconeditSquare="/iconedit-square.svg"
        />
      </div>
      <h1 className={styles.applicants}>Applicants</h1>
      <div className={styles.applicantList}>
        <Compchatbubble
          property1="Default"
          msgAmmount="0"
          lastMessage="lastMessage"
          freelancerName="Roaring Kitty"
          time="00:00"
        />
        <div className={styles.compchatbubble}>
          <div className={styles.moreApplicantsPlaceholder}>
            More applicants Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDescription;
