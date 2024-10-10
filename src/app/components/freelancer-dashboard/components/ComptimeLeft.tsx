import { FunctionComponent } from "react";
import styles from "./ComptimeLeft.module.css";

export type ComptimeLeftType = {
  className?: string;
};

const ComptimeLeft: FunctionComponent<ComptimeLeftType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.comptimeLeft, className].join(" ")}>
      <img
        className={styles.iconclockLoader90}
        alt=""
        src="/iconclock-loader-90.svg"
      />
      <div className={styles.timeLeftInfo}>
        <a className={styles.timeLeftTo}>Time Left to Apply</a>
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
