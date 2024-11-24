import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CompbudgetBox.module.css";

export type CompbudgetBoxType = {
  className?: string;
  budget?: string;

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
  compbudgetBoxWidth?: CSSProperties["width"];
  compbudgetBoxAlignSelf?: CSSProperties["alignSelf"];
  uSDCMargin?: CSSProperties["margin"];
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
  compbudgetBoxWidth,
  compbudgetBoxAlignSelf,
  budget,
  uSDCMargin,
}) => {
  const compbudgetBoxStyle: CSSProperties = useMemo(() => {
    return {
      height: compbudgetBoxHeight,
      width: compbudgetBoxWidth,
      alignSelf: compbudgetBoxAlignSelf,
    };
  }, [compbudgetBoxHeight, compbudgetBoxWidth, compbudgetBoxAlignSelf]);

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
      margin: uSDCMargin,
    };
  }, [uSDCFlex, uSDCMinWidth, uSDCHeight, uSDCMargin]);

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
            {budget}
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
