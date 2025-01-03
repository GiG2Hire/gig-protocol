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
                            Mobile App Design - UI/UX Specialist
                        </h2>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.lookingForAn}>
                            Looking for an experienced UX/UI designer to design a stunning
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
                            <b className={styles.taskNumber1}>8</b>
                            <div className={styles.tasks1}>Tasks</div>
                        </div>
                        <div className={styles.taskItem}>
                            <div className={styles.taskElements}>
                                <Frametask
                                    propFlex="0.8788"
                                    propPadding="0px 67px 0px 0px"
                                    propMinWidth="161px"
                                    thisIsATask="Create a user dashboard"
                                    propDisplay="unset"
                                    propMinWidth1="unset"
                                />
                                <Frametask
                                    propFlex="0.8488"
                                    propPadding="0px 92px 0px 0px"
                                    propMinWidth="161px"
                                    thisIsATask="Create landing page"
                                    propDisplay="inline-block"
                                    propMinWidth1="118px"
                                />
                                <Frametask
                                    propFlex="0.6794"
                                    propPadding="0px 120px 0px 0px"
                                    propMinWidth="161px"
                                    thisIsATask="Create all icons"
                                    propDisplay="inline-block"
                                    propMinWidth1="90px"
                                />
                            </div>
                            <div className={styles.taskElements}>
                                <Frametask
                                    propFlex="0.8565"
                                    propPadding="0px 95px 0px 0px"
                                    propMinWidth="156px"
                                    thisIsATask="Create Marketplace"
                                    propDisplay="inline-block"
                                    propMinWidth1="115px"
                                />
                                <Frametask
                                    propFlex="1"
                                    propPadding="0px 72px 0px 0px"
                                    propMinWidth="156px"
                                    thisIsATask="Design Checkout Modal"
                                    propDisplay="unset"
                                    propMinWidth1="unset"
                                />
                                <Frametask
                                    propFlex="0.8628"
                                    propPadding="0px 94px 0px 0px"
                                    propMinWidth="156px"
                                    thisIsATask="Design User Creator"
                                    propDisplay="inline-block"
                                    propMinWidth1="116px"
                                />
                            </div>
                            <div className={styles.taskElements}>
                                <Frametask
                                    propFlex="0.5954"
                                    propPadding="0px 94px 0px 0px"
                                    propMinWidth="174px"
                                    thisIsATask="Create store builder"
                                    propDisplay="unset"
                                    propMinWidth1="unset"
                                />
                                <Frametask thisIsATask="Design User/Merchant chat" />
                                <div className={styles.spacerTask} />
                            </div>
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
                            <div className={styles.taskNumber}>5</div>
                        </div>
                        <div className={styles.metaIcons}>
                            <img
                                className={styles.iconevent}
                                loading="lazy"
                                alt=""
                                src={eventListLogo.src}
                            />
                            <b className={styles.taskNumber}>Tasks:</b>
                            <div className={styles.taskNumber}>8</div>
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
                        <b className={styles.applyText}>Apply Now</b>
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
