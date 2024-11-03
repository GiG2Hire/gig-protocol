import { FunctionComponent } from "react";
import styles from "./comp-joboffer.module.css";
import Frametask from "./Frametask";
import usdcLogo from "./usdc-logo.png";
import personHandLogo from "./iconperson-raised.svg";
import groupLogo from "./icongroup.svg";
import eventListLogo from "./iconevent.svg";
import calendarLogo from "./iconcalendar.svg";
import arrowUp from "./arrow-up.svg";

export type CompjobofferVType = {
    className?: string;
};

const CompjobofferV: FunctionComponent<CompjobofferVType> = ({
    className = "",
}) => {
    // remove by actual tasks
    const tasks = [
        "Create a user cock",
        "Create landing page",
        "Create drug shop",
        "Create Marketplace",
        "Design Checkout Modal",
        "Design User Creator",
        "Create store builder",
        "Design Merchant chat"
    ];

    const handleApplyForGig = async () => {
        const response = await fetch(`/api/gig/apply?gig_id=${gigId}`); // TODO: add gigId

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
                            <a className={styles.timePosted}>Andriy</a>
                        </div>
                        <h2 className={styles.offerTitle}>
                            Mobile App Design - UI/UX Specialist {/* change to `job_title` */}
                        </h2>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.lookingForAn}>
                            Looking for an experienced UX/UI designer to design a stunning {/* change to `description` */}
                            e-Commerce platform.  This platform will be designed as a PWA app
                            meaning it will render on regular desktops as well as smart
                            devices (phones/tablets).
                        </p>
                        <p className={styles.lookingForAn}>&nbsp;</p>
                        <p className={styles.lookingForAn}>
                            You must have created similar projects in the past to be
                            considered.  when replying to this post please confirm that you
                            are available on a full-time basis for this project.  We are
                            looking for talented individuals to join our growing team.
                        </p>
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
                            <div className={styles.taskNumber}>5</div> {/* change to `offers.lenght` */}
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
                        <b className={styles.earningsSeparator}>250</b> {/* change to `budget` */}
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
                        <b className={styles.applyText} onClick={handleApplyForGig}>Apply Now</b>
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
