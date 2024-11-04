import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Frametask.module.css";

export type FrametaskType = {
  className?: string;
  thisIsATask?: string;

  /** Variant props */
  property1?: "expanded" | "default";

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  btncheckboxMargin?: CSSProperties["margin"];
  btncheckboxHeight?: CSSProperties["height"];
  btncheckboxWidth?: CSSProperties["width"];
  btncheckboxBackgroundColor?: CSSProperties["backgroundColor"];
  btncheckboxDisplay?: CSSProperties["display"];
  btncheckboxFlexDirection?: CSSProperties["flexDirection"];
  btncheckboxAlignItems?: CSSProperties["alignItems"];
  btncheckboxJustifyContent?: CSSProperties["justifyContent"];
  btncheckboxPadding?: CSSProperties["padding"];
  thisIsAFontSize?: CSSProperties["fontSize"];
  thisIsAFontFamily?: CSSProperties["fontFamily"];
  thisIsAColor?: CSSProperties["color"];
  thisIsATextAlign?: CSSProperties["textAlign"];
  thisIsAHeight?: CSSProperties["height"];
  thisIsAWidth?: CSSProperties["width"];
};

const Frametask: FunctionComponent<FrametaskType> = ({
  className = "",
  property1 = "expanded",
  propFlex,
  propPadding,
  propMinWidth,
  thisIsATask,
  propDisplay,
  propMinWidth1,
  btncheckboxMargin,
  btncheckboxHeight,
  btncheckboxWidth,
  btncheckboxBackgroundColor,
  btncheckboxDisplay,
  btncheckboxFlexDirection,
  btncheckboxAlignItems,
  btncheckboxJustifyContent,
  btncheckboxPadding,
  thisIsAFontSize,
  thisIsAFontFamily,
  thisIsAColor,
  thisIsATextAlign,
  thisIsAHeight,
  thisIsAWidth,
}) => {
  const frametaskStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propFlex, propPadding, propMinWidth]);

  const thisIsAStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      fontSize: thisIsAFontSize,
      fontFamily: thisIsAFontFamily,
      color: thisIsAColor,
      textAlign: thisIsATextAlign,
      height: thisIsAHeight,
      width: thisIsAWidth,
    };
  }, [
    propDisplay,
    propMinWidth1,
    thisIsAFontSize,
    thisIsAFontFamily,
    thisIsAColor,
    thisIsATextAlign,
    thisIsAHeight,
    thisIsAWidth,
  ]);

  const btncheckboxStyle: CSSProperties = useMemo(() => {
    return {
      margin: btncheckboxMargin,
      height: btncheckboxHeight,
      width: btncheckboxWidth,
      backgroundColor: btncheckboxBackgroundColor,
      display: btncheckboxDisplay,
      flexDirection: btncheckboxFlexDirection,
      alignItems: btncheckboxAlignItems,
      justifyContent: btncheckboxJustifyContent,
      padding: btncheckboxPadding,
    };
  }, [
    btncheckboxMargin,
    btncheckboxHeight,
    btncheckboxWidth,
    btncheckboxBackgroundColor,
    btncheckboxDisplay,
    btncheckboxFlexDirection,
    btncheckboxAlignItems,
    btncheckboxJustifyContent,
    btncheckboxPadding,
  ]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      style={frametaskStyle}
      data-property1={property1}
    >
      <input
        className={styles.btncheckbox}
        type="checkbox"
        style={btncheckboxStyle}
      />
      <div className={styles.thisIsA} style={thisIsAStyle}>
        {thisIsATask}
      </div>
    </div>
  );
};

export default Frametask;
