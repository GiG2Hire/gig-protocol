import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ComptimeLeft.module.css";

export type ComptimeLeftType = {
  className?: string;
  iconclockLoader90?: string;
  timeLeftToDeliver?: string;

  /** Variant props */
  property1?: "lime";

  /** Style props */
  comptimeLeftHeight?: CSSProperties["height"];
};

const ComptimeLeft: FunctionComponent<ComptimeLeftType> = ({
  className = "",
  property1 = "lime",
  comptimeLeftHeight,
  iconclockLoader90,
  timeLeftToDeliver,
}) => {
  const comptimeLeftStyle: CSSProperties = useMemo(() => {
    return {
      height: comptimeLeftHeight,
    };
  }, [comptimeLeftHeight]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      style={comptimeLeftStyle}
    >
      <img
        className={styles.iconclockLoader90}
        alt=""
        src={iconclockLoader90}
      />
      <div className={styles.timeLeftInfo}>
        <a className={styles.timeLeftTo}>{timeLeftToDeliver}</a>
        <a className={styles.d21h58m23s}>
          <span>02</span>
          <b>D</b>
          <span>:21</span>
          <b>H</b>
          <span>:58</span>
          <b>M</b>
          <span>:23</span>
          <b>S</b>
        </a>
      </div>
    </div>
  );
};

export default ComptimeLeft;
