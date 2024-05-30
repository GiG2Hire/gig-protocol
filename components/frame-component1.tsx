import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <b className={styles.b}>2024</b>
            <div className={styles.frameContainer}>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <FrameComponent2
              q1="Q1"
              checkSmall="/check-small-1.svg"
              proofOfTechnology="Proof of technology"
              checkSmall1="/check-small-1.svg"
              ideaValidation="Idea validation"
              checkSmall2="/check-small-1.svg"
              proofOfConceptV1="Proof of Concept v1"
            />
            <FrameComponent2
              q1="Q2"
              checkSmall="/check-small-1.svg"
              proofOfTechnology="Landing page redesign."
              checkSmall1="/more-horiz1.svg"
              ideaValidation="Early bird interest."
              checkSmall2="/more-horiz1.svg"
              proofOfConceptV1="Yellow paper release."
              propBackgroundColor="#d6ea5e"
              propMinWidth="44px"
              propColor="#3f5dba"
              propBackgroundColor1="#d6ea5e"
              propMinWidth1="164px"
              propBackgroundColor2="#3f5dba"
              propMinWidth2="153px"
              propBackgroundColor3="#3f5dba"
              propMinWidth3="161px"
            />
            <FrameComponent2
              q1="Q3"
              checkSmall="/more-horiz1.svg"
              proofOfTechnology="Beta release."
              checkSmall1="/more-horiz1.svg"
              ideaValidation="White paper release."
              checkSmall2="/more-horiz1.svg"
              proofOfConceptV1="Security audit."
              propBackgroundColor="#3f5dba"
              propMinWidth="44px"
              propColor="#d6ea5e"
              propBackgroundColor1="#3f5dba"
              propMinWidth1="98px"
              propBackgroundColor2="#3f5dba"
              propMinWidth2="154px"
              propBackgroundColor3="#3f5dba"
              propMinWidth3="114px"
            />
            <div className={styles.frameParent1}>
              <button className={styles.q4Wrapper}>
                <b className={styles.q4}>Q4</b>
              </button>
              <div className={styles.frameParent2}>
                <div className={styles.statusParent}>
                  <div className={styles.status}>
                    <img
                      className={styles.moreHorizIcon}
                      alt=""
                      src="/more-horiz1.svg"
                    />
                  </div>
                  <div className={styles.closedBetaRelease}>
                    Closed beta release.
                  </div>
                </div>
                <div className={styles.statusGroup}>
                  <div className={styles.status1}>
                    <img
                      className={styles.moreHorizIcon1}
                      alt=""
                      src="/more-horiz1.svg"
                    />
                  </div>
                  <div className={styles.amasSeries}>AMA’s series.</div>
                </div>
                <div className={styles.statusContainer}>
                  <div className={styles.status2}>
                    <img
                      className={styles.moreHorizIcon2}
                      alt=""
                      src="/more-horiz1.svg"
                    />
                  </div>
                  <div className={styles.educationalInstitutionsEngagContainer}>
                    <p className={styles.educationalInstitutions}>
                      Educational institutions
                    </p>
                    <p className={styles.engagement}>engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <b className={styles.b1}>2025</b>
          <div className={styles.frameParent3}>
            <div className={styles.frameItem} />
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <button className={styles.q1Wrapper}>
                  <b className={styles.q1}>Q1</b>
                </button>
                <div className={styles.frameParent6}>
                  <div className={styles.statusParent1}>
                    <div className={styles.status3}>
                      <img
                        className={styles.moreHorizIcon3}
                        alt=""
                        src="/more-horiz1.svg"
                      />
                    </div>
                    <div className={styles.partnershipsWithTop}>
                      Partnerships with top freelance employers.
                    </div>
                  </div>
                  <div className={styles.statusParent2}>
                    <div className={styles.status4}>
                      <img
                        className={styles.moreHorizIcon4}
                        alt=""
                        src="/more-horiz1.svg"
                      />
                    </div>
                    <div className={styles.first1000UsersContainer}>
                      <p
                        className={styles.first1000Users}
                      >{`First 1000 users `}</p>
                      <p className={styles.onboard}>onboard.</p>
                    </div>
                  </div>
                  <div className={styles.statusParent3}>
                    <div className={styles.status5}>
                      <img
                        className={styles.moreHorizIcon5}
                        alt=""
                        src="/more-horiz1.svg"
                      />
                    </div>
                    <div className={styles.workGamifiedRelease}>
                      Work gamified release.
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent2
                q1="Q2"
                checkSmall="/more-horiz1.svg"
                proofOfTechnology="Partnerships with topfreelance employers."
                checkSmall1="/more-horiz1.svg"
                ideaValidation="AI work companion."
                checkSmall2="/more-horiz1.svg"
                proofOfConceptV1="Tokenomics release."
                propBackgroundColor="#3f5dba"
                propMinWidth="44px"
                propColor="#d6ea5e"
                propBackgroundColor1="#3f5dba"
                propMinWidth1="164px"
                propBackgroundColor2="#3f5dba"
                propMinWidth2="138px"
                propBackgroundColor3="#3f5dba"
                propMinWidth3="145px"
              />
              <FrameComponent2
                q1="Q3"
                checkSmall="/more-horiz1.svg"
                proofOfTechnology="Mobile version."
                checkSmall1="/more-horiz1.svg"
                ideaValidation="Partnerships with tech companies."
                checkSmall2="/more-horiz1.svg"
                proofOfConceptV1="GIG2Hire v2 release."
                propBackgroundColor="#3f5dba"
                propMinWidth="44px"
                propColor="#d6ea5e"
                propBackgroundColor1="#3f5dba"
                propMinWidth1="114px"
                propBackgroundColor2="#3f5dba"
                propMinWidth2="164px"
                propBackgroundColor3="#3f5dba"
                propMinWidth3="153px"
              />
              <FrameComponent2
                q1="Q4"
                checkSmall="/more-horiz1.svg"
                proofOfTechnology="First 10.000 users onboard."
                checkSmall1="/more-horiz1.svg"
                ideaValidation="G-Learn release."
                checkSmall2="/more-horiz1.svg"
                proofOfConceptV1="Top-G funds release."
                propBackgroundColor="#3f5dba"
                propMinWidth="44px"
                propColor="#d6ea5e"
                propBackgroundColor1="#3f5dba"
                propMinWidth1="139px"
                propBackgroundColor2="#3f5dba"
                propMinWidth2="122px"
                propBackgroundColor3="#3f5dba"
                propMinWidth3="153px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
