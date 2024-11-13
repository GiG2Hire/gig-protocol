import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CompdeadlineBox.module.css";

export type CompdeadlineBoxType = {
  className?: string;

  /** Style props */
  compdeadlineBoxMinWidth?: CSSProperties["minWidth"];
  deadlineMinWidth?: CSSProperties["minWidth"];
  deadlineHeight?: CSSProperties["height"];
  frameDivMinHeight?: CSSProperties["minHeight"];
  frameDivGap?: CSSProperties["gap"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  dayHeight?: CSSProperties["height"];
  dayDisplay?: CSSProperties["display"];
  bMinWidth?: CSSProperties["minWidth"];
  bHeight?: CSSProperties["height"];
  monthHeight?: CSSProperties["height"];
  monthDisplay?: CSSProperties["display"];
  dayNumberMinWidth?: CSSProperties["minWidth"];
  dayNumberHeight?: CSSProperties["height"];
  bMinWidth1?: CSSProperties["minWidth"];
  bHeight1?: CSSProperties["height"];
  yearHeight?: CSSProperties["height"];
  yearDisplay?: CSSProperties["display"];
};

const CompdeadlineBox: FunctionComponent<CompdeadlineBoxType> = ({
  className = "",
  compdeadlineBoxMinWidth,
  deadlineMinWidth,
  deadlineHeight,
  frameDivMinHeight,
  frameDivGap,
  frameDivAlignSelf,
  frameDivWidth,
  dayHeight,
  dayDisplay,
  bMinWidth,
  bHeight,
  monthHeight,
  monthDisplay,
  dayNumberMinWidth,
  dayNumberHeight,
  bMinWidth1,
  bHeight1,
  yearHeight,
  yearDisplay,
}) => {
  const compdeadlineBoxStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: compdeadlineBoxMinWidth,
    };
  }, [compdeadlineBoxMinWidth]);

  const deadlineStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: deadlineMinWidth,
      height: deadlineHeight,
    };
  }, [deadlineMinWidth, deadlineHeight]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: frameDivMinHeight,
      gap: frameDivGap,
    };
  }, [frameDivMinHeight, frameDivGap]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  const dayStyle: CSSProperties = useMemo(() => {
    return {
      height: dayHeight,
      display: dayDisplay,
    };
  }, [dayHeight, dayDisplay]);

  const b2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: bMinWidth,
      height: bHeight,
    };
  }, [bMinWidth, bHeight]);

  const monthStyle: CSSProperties = useMemo(() => {
    return {
      height: monthHeight,
      display: monthDisplay,
    };
  }, [monthHeight, monthDisplay]);

  const dayNumberStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: dayNumberMinWidth,
      height: dayNumberHeight,
    };
  }, [dayNumberMinWidth, dayNumberHeight]);

  const b3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: bMinWidth1,
      height: bHeight1,
    };
  }, [bMinWidth1, bHeight1]);

  const yearStyle: CSSProperties = useMemo(() => {
    return {
      height: yearHeight,
      display: yearDisplay,
    };
  }, [yearHeight, yearDisplay]);

  return (
    <div
      className={[styles.compdeadlineBox, className].join(" ")}
      style={compdeadlineBoxStyle}
    >
      <div className={styles.iconeventParent}>
        <img
          className={styles.iconevent}
          loading="lazy"
          alt=""
          src="/iconevent.svg"
        />
        <div className={styles.deadline} style={deadlineStyle}>
          Deadline
        </div>
      </div>
      <div className={styles.frameParent} style={frameDiv2Style}>
        <div className={styles.frameGroup}>
          <div className={styles.dayParent} style={frameDiv3Style}>
            <b className={styles.day} style={dayStyle}>
              Fri
            </b>
            <b className={styles.b} style={b2Style}>
              ,
            </b>
          </div>
          <b className={styles.day} style={monthStyle}>
            Oct
          </b>
          <b className={styles.dayNumber} style={dayNumberStyle}>
            15
          </b>
          <b className={styles.b1} style={b3Style}>
            -
          </b>
          <b className={styles.day} style={yearStyle}>
            2024
          </b>
        </div>
        <div className={styles.at2359Utc}>at 23:59 UTC.</div>
      </div>
    </div>
  );
};

export default CompdeadlineBox;
