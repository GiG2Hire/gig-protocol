import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
  q1?: string;
  checkSmall?: string;
  proofOfTechnology?: string;
  checkSmall1?: string;
  ideaValidation?: string;
  checkSmall2?: string;
  proofOfConceptV1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propMinWidth1?: CSSProperties["minWidth"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propMinWidth2?: CSSProperties["minWidth"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  q1,
  checkSmall,
  proofOfTechnology,
  checkSmall1,
  ideaValidation,
  checkSmall2,
  proofOfConceptV1,
  propBackgroundColor,
  propMinWidth,
  propColor,
  propBackgroundColor1,
  propMinWidth1,
  propBackgroundColor2,
  propMinWidth2,
  propBackgroundColor3,
  propMinWidth3,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const q1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      color: propColor,
    };
  }, [propMinWidth, propColor]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const proofOfTechnologyStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const status1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const ideaValidationStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const status2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const proofOfConceptStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <button className={styles.q1Wrapper} style={frameButtonStyle}>
        <b className={styles.q1} style={q1Style}>
          {q1}
        </b>
      </button>
      <div className={styles.frameGroup}>
        <div className={styles.statusParent}>
          <div className={styles.status} style={statusStyle}>
            <img className={styles.checkSmallIcon} alt="" src={checkSmall} />
          </div>
          <div
            className={styles.proofOfTechnology}
            style={proofOfTechnologyStyle}
          >
            {proofOfTechnology}
          </div>
        </div>
        <div className={styles.statusGroup}>
          <div className={styles.status1} style={status1Style}>
            <img className={styles.checkSmallIcon1} alt="" src={checkSmall1} />
          </div>
          <div className={styles.ideaValidation} style={ideaValidationStyle}>
            {ideaValidation}
          </div>
        </div>
        <div className={styles.statusContainer}>
          <div className={styles.status2} style={status2Style}>
            <img className={styles.checkSmallIcon2} alt="" src={checkSmall2} />
          </div>
          <div className={styles.proofOfConcept} style={proofOfConceptStyle}>
            {proofOfConceptV1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
