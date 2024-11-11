import { FunctionComponent, useState } from "react";
import styles from "./comp-joboffer.module.css";
import Frametask from "./Frametask";
import usdcLogo from "./usdc-logo.png";
import personHandLogo from "./iconperson-raised.svg";
import groupLogo from "./icongroup.svg";
import eventListLogo from "./iconevent.svg";
import calendarLogo from "./iconcalendar.svg";
import arrowUp from "./arrow-up.svg";

export type CompjobofferVType = {
    gigId: number,
    title: string,
    description: string,
    tasks: any[],
    budget: number,
    className?: string;
};

const CompjobofferV: FunctionComponent<CompjobofferVType> = ({
    gigId,
    title,
    description,
    tasks1,
    budget,
    className = "",
}) => {
    const [isApplied, setIsApplied] = useState(false);
    // remove by actual tasks
    const tasks = [
        "Create a user btn",
        "Create landing page",
        "Create drug shop",
        "Create Marketplace",
        "Design Checkout Modal",
        "Design User Creator",
        "Create store builder",
        "Design Merchant chat"
    ];
    console.log(tasks1, gigId, title)

    const handleApplyForGig = async () => {
        setIsApplied(true);

        // make it for POST request
        const response = await fetch(`/api/gig/apply/gig_id=${gigId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log(response)

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
    }

    return (
        <div className={[styles.compjobofferV2, className].join(" ")}>
            <section className={styles.contentParent}>
                <div className={styles.content}>
                    <div className={styles.jobInfoParent}>
                        <div className={styles.jobInfo}>
                            <a className={styles.posted}>Posted</a>
                            <a className={styles.timePosted}>6h ago</a>
                            <a className={styles.by}>by</a>
                            <a className={styles.timePosted}>Client</a>
                        </div>
                        <h2 className={styles.offerTitle}>
                            {title}
                        </h2>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.lookingForAn}>
                            {description}
                        </p>
                        <p className={styles.lookingForAn}>&nbsp;</p>
                    </div>
                    <div className={styles.tasks}>
                        <div className={styles.taskHeader}>
                            <b className={styles.taskNumber1}>{tasks.length}</b>
                            <div className={styles.tasks1}>Tasks</div>
                        </div>
                        <div className={styles.taskContainer}>
                            {tasks.map((task, index) => (
                                <div className={styles.taskItem} key={index}>
                                    <Frametask
                                        propFlex="1"
                                        propPadding="0px 20px"
                                        propMinWidth="160px"
                                        thisIsATask={task}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.tags}>
                        <div className={styles.iconeventParent}>
                            <img
                                className={styles.iconevent}
                                loading="lazy"
                                alt=""
                                src={calendarLogo.src}
                            />
                            <b className={styles.taskNumber}>Deadline:</b>
                            <div className={styles.taskNumber}>30</div>
                            <div className={styles.taskNumber}>days</div>
                        </div>
                        <div className={styles.metaIcons}>
                            <img
                                className={styles.iconevent}
                                loading="lazy"
                                alt=""
                                src={groupLogo.src}
                            />
                            <b className={styles.candidates}>Candidates:</b>
                            <div className={styles.taskNumber}>0</div> {/* change to `offers.lenght` */}
                        </div>
                        <div className={styles.metaIcons}>
                            <img
                                className={styles.iconevent}
                                loading="lazy"
                                alt=""
                                src={eventListLogo.src}
                            />
                            <b className={styles.taskNumber}>Tasks:</b>
                            <div className={styles.taskNumber}>{tasks.length}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.clock}>
                    <div className={styles.jobListingApplicationTimeL}>
                        <img className={styles.timerIcon} alt="" src="/timer1.svg" />
                        <div className={styles.jobListingApplicationTimeL1}>
                            <div className={styles.timeLeftTo}>Time Left to Apply</div>
                            <div className={styles.d21h58m23s}>
                                <span>02</span>
                                <b>D:</b>
                                <span>21</span>
                                <b>H:</b>
                                <span>58</span>
                                <b>M:</b>
                                <span>23</span>
                                <b>S</b>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnDetails}>
                        <div className={styles.taskNumber}>GIG Details</div>
                        <img
                            className={styles.iconkeyboardArrowDown}
                            loading="lazy"
                            alt=""
                            src={arrowUp.src}
                        />
                    </div>
                </div>
            </section>
            <div className={styles.apply}>
                <div className={styles.earningsInfo}>
                    <div className={styles.youWillCollect}>You will collect:</div>
                    <div className={styles.earningsAmount}>
                        <img
                            className={styles.iconusdc}
                            loading="lazy"
                            alt=""
                            src={usdcLogo.src}
                        />
                        <b className={styles.earningsSeparator}>250</b>
                        <h1 className={styles.usdc}>USDC</h1>
                    </div>
                </div>
                <div className={styles.btniconText} >
                    <label className={styles.label}>
                        <img
                            className={styles.iconpersonRaisedHand}
                            alt=""
                            src={personHandLogo.src}
                        />
                        <b className={styles.applyText} onClick={handleApplyForGig}>{isApplied ? "Applied" : "Apply Now"}</b>
                    </label>
                    <input
                        className={styles.input}
                        type="file"
                        id="file-I2856:6431;2216:12597"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompjobofferV;
