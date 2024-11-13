import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CompbudgetBox.module.css";

export type CompbudgetBoxType = {
  className?: string;

  /** Style props */
  compbudgetBoxHeight?: CSSProperties["height"];
  budgetHeight?: CSSProperties["height"];
  budgetDisplay?: CSSProperties["display"];
  frameDivFlex?: CSSProperties["flex"];
  budgetFlex?: CSSProperties["flex"];
  budgetHeight1?: CSSProperties["height"];
  budgetDisplay1?: CSSProperties["display"];
  uSDCFlex?: CSSProperties["flex"];
  uSDCMinWidth?: CSSProperties["minWidth"];
  uSDCHeight?: CSSProperties["height"];
};

const CompbudgetBox: FunctionComponent<CompbudgetBoxType> = ({
  className = "",
  compbudgetBoxHeight,
  budgetHeight,
  budgetDisplay,
  frameDivFlex,
  budgetFlex,
  budgetHeight1,
  budgetDisplay1,
  uSDCFlex,
  uSDCMinWidth,
  uSDCHeight,
}) => {
  const compbudgetBoxStyle: CSSProperties = useMemo(() => {
    return {
      height: compbudgetBoxHeight,
    };
  }, [compbudgetBoxHeight]);

  const budgetStyle: CSSProperties = useMemo(() => {
    return {
      height: budgetHeight,
      display: budgetDisplay,
    };
  }, [budgetHeight, budgetDisplay]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const budget1Style: CSSProperties = useMemo(() => {
    return {
      flex: budgetFlex,
      height: budgetHeight1,
      display: budgetDisplay1,
    };
  }, [budgetFlex, budgetHeight1, budgetDisplay1]);

  const uSDCStyle: CSSProperties = useMemo(() => {
    return {
      flex: uSDCFlex,
      minWidth: uSDCMinWidth,
      height: uSDCHeight,
    };
  }, [uSDCFlex, uSDCMinWidth, uSDCHeight]);

  return (
    <div
      className={[styles.compbudgetBox, className].join(" ")}
      style={compbudgetBoxStyle}
    >
      <div className={styles.iconmoneyBagParent}>
        <img
          className={styles.iconmoneyBag}
          loading="lazy"
          alt=""
          src="/iconmoney-bag.svg"
        />
        <div className={styles.budget} style={budgetStyle}>
          Budget
        </div>
      </div>
      <div className={styles.compbudgetBoxInner} style={frameDiv4Style}>
        <div className={styles.iconusdcParent}>
          <img
            className={styles.iconusdc}
            loading="lazy"
            alt=""
            src="/iconusdc@2x.png"
          />
          <b className={styles.budget1} style={budget1Style}>
            1000
          </b>
          <b className={styles.usdc} style={uSDCStyle}>
            USDC
          </b>
        </div>
      </div>
    </div>
  );
};

export default CompbudgetBox;
