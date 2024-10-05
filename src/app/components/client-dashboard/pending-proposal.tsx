import type { NextPage } from "next";
import styles from "../../client-dashboard/freelancer-dashboard.module.css";

export type PendingProposalType = {
    category: string;
    description: string;
    freelancersOffers: number;
    className?: string;
};

const PendingProposal: NextPage<PendingProposalType> = ({ category, description, freelancersOffers }) => {
    return (
        <div className={styles.featuredJob}>
            <div className={styles.jobContainer}>
                <div className={styles.btnDevit}>
                    <img
                        className={styles.developerModeTvIcon}
                        loading="lazy"
                        alt=""
                        src="/developer-mode-tv1.svg"
                    />
                    <div
                        className={styles.developmentIt}
                    >{`${category}`}</div>
                </div>
                <h1 className={styles.developADefi}>
                    {description}
                </h1>
            </div>
            <div className={styles.jobActions}>
                <div className={styles.jobApplication}>
                    <div className={styles.applyButton}>
                        <img
                            className={styles.gig2hire2Icon}
                            loading="lazy"
                            alt=""
                            src="/gig2hire-2.svg"
                        />
                        <div className={styles.applicationStatus}>
                            <div className={styles.interested}>Interested:</div>
                            <div className={styles.jobCategory}>
                                <b className={styles.categoryIcon}>{freelancersOffers}</b>
                                <div className={styles.freelance}>Freelance</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.approvalTimer}>
                        <div className={styles.toBeApproved}>
                            To Be approved in:
                        </div>
                        <div className={styles.timerContainer}>
                            <img
                                className={styles.timerIcon}
                                alt=""
                                src="/timer2.svg"
                            />
                            <div className={styles.h58m23s}>
                                <span>48</span>
                                <b>H:</b>
                                <span>58</span>
                                <b>M:</b>
                                <span>23</span>
                                <b>S</b>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.btn}>
                    <b className={styles.viewMoreLabel}>View Offer</b>
                </button>
            </div>
        </div>
    )
}

export default PendingProposal;