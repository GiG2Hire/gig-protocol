import { FunctionComponent } from "react";
import styles from "./CompextraInfo.module.css";

export type CompextraInfoType = {
  className?: string;
};

const CompextraInfo: FunctionComponent<CompextraInfoType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.compextraInfo, className].join(" ")}>
      <img
        className={styles.iconemergencyHome}
        loading="lazy"
        alt=""
        src="/iconemergency-home.svg"
      />
      <div className={styles.duisAuteIrureDolorInRepreWrapper}>
        <div className={styles.duisAuteIrureContainer}>
          <b>Alert:</b>
          <span>
            {" "}
            This action can’t be undone and you wont be able to reapply to this
            GIG!
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompextraInfo;
