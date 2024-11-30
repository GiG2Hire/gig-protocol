import type { NextPage } from "next";
import Image from "next/image";
import styles from "./compbudget-box.module.css";

export type CompbudgetBoxType = {
  className?: string;
  budget?: string;
};

const CompbudgetBox: NextPage<CompbudgetBoxType> = ({
  className = "",
  budget = "0000",
}) => {
  return (
    <div className={[styles.compbudgetBox, className].join(" ")}>
      <div className={styles.budgetValue}>
        <Image
          className={styles.iconmoneyBag}
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/iconmoney-bag.svg"
        />
        <h2 className={styles.budget}>Budget</h2>
      </div>
      <div className={styles.budgetAmount}>
        <div className={styles.amountDetails}>
          <Image
            className={styles.iconusdc}
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/iconusdc@2x.png"
          />
          <b className={styles.budget1}>{budget}</b>
          <h1 className={styles.usdc}>USDC</h1>
        </div>
      </div>
    </div>
  );
};

export default CompbudgetBox;
