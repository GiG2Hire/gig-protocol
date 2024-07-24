import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
  upworkLogo1?: string;
  upTo10?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({
  className = "",
  upworkLogo1,
  upTo10,
  propWidth,
}) => {
  const upworkLogo1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.upworkLogo1Wrapper}>
        <img
          className={styles.upworkLogo1Icon}
          loading="lazy"
          alt=""
          src={upworkLogo1}
          style={upworkLogo1IconStyle}
        />
      </div>
      <div className={styles.upTo10Parent}>
        <b className={styles.upTo10}>{upTo10}</b>
        <div className={styles.ofEarningsWrapper}>
          <div className={styles.ofEarnings}>of earnings</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
