import { FunctionComponent } from "react";
import styles from "./CompbudgetBox.module.css";

export type CompbudgetBoxType = {
  className?: string;
};

const CompbudgetBox: FunctionComponent<CompbudgetBoxType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.compbudgetBox, className].join(" ")}>
      <div className={styles.iconmoneyBagParent}>
        <img
          className={styles.iconmoneyBag}
          loading="lazy"
          alt=""
          src="/iconmoney-bag.svg"
        />
        <div className={styles.budget}>Budget</div>
      </div>
      <div className={styles.compbudgetBoxInner}>
        <div className={styles.iconusdcParent}>
          <img
            className={styles.iconusdc}
            loading="lazy"
            alt=""
            src="/iconusdc@2x.png"
          />
          <b className={styles.budget1}>1000</b>
          <b className={styles.usdc}>USDC</b>
        </div>
      </div>
    </div>
  );
};

export default CompbudgetBox;
