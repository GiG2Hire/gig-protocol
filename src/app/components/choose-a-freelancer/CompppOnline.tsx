import { FunctionComponent } from "react";
import styles from "./CompppOnline.module.css";

export type CompppOnlineType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const CompppOnline: FunctionComponent<CompppOnlineType> = ({
  className = "",
  property1 = "offline-xl",
}) => {
  return (
    <div
      className={[styles.compppOnline, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.onlineParent}>
        <div className={styles.online}>Online</div>
        <div className={styles.statusIcon} />
      </div>
    </div>
  );
};

export default CompppOnline;
