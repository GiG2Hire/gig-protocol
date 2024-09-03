"use Client";
import { MONTH_NAMES, WEEK_DAYS } from "@/src/constants/appConstants";
import styles from "./review-job-offer.module.css";

const ReviewJobOffer = ({
  gigTitle,
  gigDescription,
  tasks,
  deliveryDate,
  className = "",
}) => {
  // Function to chunk the tasks array into arrays of 5
  const chunkArray = (array: GigTask[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Get the tasks in chunks of 5
  const taskChunks = chunkArray(tasks, 5);

  return (
    <div className={styles.jobReview}>
      <div className={styles.reviewTitle}>
        <div className={styles.reviewIcon}>
          <b className={styles.document}>7</b>
        </div>
        <b className={styles.reviewJobOffer}>
          Review Job Offer and Deposit Escrowed Money
        </b>
      </div>
      <div className={styles.jobSummary}>
        <h2 className={styles.developADefi}>{gigTitle}</h2>
        <blockquote className={styles.lookingForAn1}>
          “{gigDescription}”
        </blockquote>
        <div className={styles.taskList}>
          <div className={styles.taskHeader}>
            <img
              className={styles.taskSquare1Icon1}
              loading="lazy"
              alt=""
              src="/tasksquare-1.svg"
            />
            <b className={styles.tasks}>10 Tasks</b>
          </div>
          <div className={styles.tasksCheckboxes}>
            {taskChunks.map((chunk, index) => (
              <div className={styles.frameGroup}>
                {chunk.map((task) => (
                  <div className={styles.btnCheckParent} key={task.taskId}>
                    <input
                      className={styles.btnCheck}
                      type="checkbox"
                      checked
                    />
                    <div className={styles.includeGraphicsOn}>
                      {task.description}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {/* <div className={styles.frameGroup}>
              <div className={styles.btnCheckParent}>
                <input className={styles.btnCheck} type="checkbox" />
                <div className={styles.includeGraphicsOn}>
                  Include graphics on the PNLs
                </div>
              </div>

              <div className={styles.btnCheckGroup}>
                <input className={styles.btnCheck1} type="checkbox" />
                <div className={styles.yellowAndBlack}>
                  Yellow and Black for the UI
                </div>
              </div>
              <div className={styles.btnCheckContainer}>
                <input className={styles.btnCheck2} type="checkbox" />
                <div className={styles.hamstersAnimations}>
                  Hamsters animations
                </div>
              </div>
              <div className={styles.frameDiv}>
                <input className={styles.btnCheck3} type="checkbox" />
                <div className={styles.includeHistoricalSwaps}>
                  Include historical swaps
                </div>
              </div>
            </div> */}
            {/* <div className={styles.frameContainer}>
              <div className={styles.btnCheckParent1}>
                <input className={styles.btnCheck4} type="checkbox" />
                <div className={styles.includeSocialsSection}>
                  Include socials section
                </div>
              </div>
              <div className={styles.btnCheckParent2}>
                <input className={styles.btnCheck5} type="checkbox" />
                <div className={styles.includeCoinTracker}>
                  Include coin tracker
                </div>
              </div>
              <div className={styles.btnCheckParent3}>
                <input className={styles.btnCheck6} type="checkbox" />
                <div className={styles.addConversionRate}>
                  Add conversion rate to pounds
                </div>
              </div>
              <div className={styles.btnCheckParent4}>
                <input className={styles.btnCheck7} type="checkbox" />
                <div className={styles.makeItResponsive}>
                  Make it responsive
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.btnCheckParent5}>
                <input className={styles.btnCheck8} type="checkbox" />
                <div className={styles.addSwapSection}>Add Swap section</div>
              </div>
              <div className={styles.btnCheckParent6}>
                <input className={styles.btnCheck9} type="checkbox" />
                <div className={styles.addBridgeSection}>
                  Add Bridge section
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.deliveryDate}>
          <div className={styles.deliveryTitle}>
            <div className={styles.deliveryIcon}>
              <img
                className={styles.eventIcon}
                loading="lazy"
                alt=""
                src="/event2.svg"
              />
              <b className={styles.jobDeliveryDate}>Job Delivery Date</b>
            </div>
            <div className={styles.deliveryInfo}>
              <div className={styles.saturday17OfContainer}>
                <span>{WEEK_DAYS[deliveryDate.getDay()] + ` `}</span>
                <b>
                  {deliveryDate.getDate()} of{" "}
                  {MONTH_NAMES[deliveryDate.getMonth()]}
                </b>
                <span>, {deliveryDate.getFullYear()}</span>
              </div>
              <div className={styles.at2359Of}>
                *at 23:59 of the specified date.
              </div>
            </div>
          </div>
          <div className={styles.budgetSummary}>
            <div className={styles.budgetTitleIcon}>
              <img
                className={styles.moneyBag1Icon}
                alt=""
                src="/moneybag-11.svg"
              />
              <b className={styles.projectBudget1}>Project Budget</b>
            </div>
            <div className={styles.budgetAmountDetails}>
              <div className={styles.tokenIconSummary}>
                <img
                  className={styles.usdcSimplified1Icon1}
                  loading="lazy"
                  alt=""
                  src="/usdc-simplified-1.svg"
                />
              </div>
              <b className={styles.amount}>250</b>
              <div className={styles.usdc}>USDC</div>
            </div>
          </div>
        </div>
        <div className={styles.depositWarning}>
          <p className={styles.reviewYourOffer}>
            *Review your offer carefully as this action isn’t reversible. You
            won’t be able to edit the description of the job, you will be able
            to add tasks further on paying an small fee. Check docs for further
            information.
          </p>
          <button className={styles.btnDeposit} type="submit">
            <img
              className={styles.briefcase1Icon}
              loading="lazy"
              alt=""
              src="/briefcase-1.svg"
            />
            <b className={styles.depositBudgetAnd}>
              Deposit Budget and Create GiG
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewJobOffer;
