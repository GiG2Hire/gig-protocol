import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Frametask from "./Frametask";
import styles from "./CompsubmitTasks.module.css";

export type CompsubmitTasksType = {
  className?: string;

  /** Variant props */
  property1?: "default";

  /** Style props */
  compsubmitTasksMinHeight?: CSSProperties["minHeight"];
  frameDivGap?: CSSProperties["gap"];
  tasksMinWidth?: CSSProperties["minWidth"];
  tasksHeight?: CSSProperties["height"];
  bMinWidth?: CSSProperties["minWidth"];
  bHeight?: CSSProperties["height"];
  bMinWidth1?: CSSProperties["minWidth"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivWidth?: CSSProperties["width"];
};

const CompsubmitTasks: FunctionComponent<CompsubmitTasksType> = ({
  className = "",
  property1 = "default",
  compsubmitTasksMinHeight,
  frameDivGap,
  tasksMinWidth,
  tasksHeight,
  bMinWidth,
  bHeight,
  bMinWidth1,
  frameDivAlignSelf,
  frameDivPadding,
  frameDivWidth,
}) => {
  const compsubmitTasksStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: compsubmitTasksMinHeight,
    };
  }, [compsubmitTasksMinHeight]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const tasksStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: tasksMinWidth,
      height: tasksHeight,
    };
  }, [tasksMinWidth, tasksHeight]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: bMinWidth,
      height: bHeight,
    };
  }, [bMinWidth, bHeight]);

  const b1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: bMinWidth1,
    };
  }, [bMinWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      padding: frameDivPadding,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivPadding, frameDivWidth]);

  return (
    <div
      className={[styles.compsubmitTasks, className].join(" ")}
      data-property1={property1}
      style={compsubmitTasksStyle}
    >
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.iconeventListParent}>
          <img
            className={styles.iconeventList}
            loading="lazy"
            alt=""
            src="/iconevent-list.svg"
          />
          <b className={styles.tasks} style={tasksStyle}>
            Tasks:
          </b>
          <b className={styles.b} style={bStyle}>
            10
          </b>
          <b className={styles.b1} style={b1Style}>
            /
          </b>
          <b className={styles.b2}>10</b>
        </div>
        <img
          className={styles.iconkeyboardArrowDown}
          loading="lazy"
          alt=""
          src="/iconkeyboard-arrow-down.svg"
        />
      </div>
      <div className={styles.frameGroup} style={frameDiv1Style}>
        <div className={styles.frametaskParent}>
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            thisIsATask="Include historical swaps"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="0"
            btncheckboxHeight="18px"
            btncheckboxWidth="18px"
            btncheckboxBackgroundColor="unset"
            btncheckboxDisplay="unset"
            btncheckboxFlexDirection="unset"
            btncheckboxAlignItems="unset"
            btncheckboxJustifyContent="unset"
            btncheckboxPadding="unset"
            thisIsAFontSize="12px"
            thisIsAFontFamily="'Space Grotesk'"
            thisIsAColor="#061543"
            thisIsATextAlign="left"
            thisIsAHeight="unset"
            thisIsAWidth="unset"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
        </div>
        <div className={styles.frametaskGroup}>
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            thisIsATask="Make it responsive"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="0"
            btncheckboxHeight="18px"
            btncheckboxWidth="18px"
            btncheckboxBackgroundColor="unset"
            btncheckboxDisplay="unset"
            btncheckboxFlexDirection="unset"
            btncheckboxAlignItems="unset"
            btncheckboxJustifyContent="unset"
            btncheckboxPadding="unset"
            thisIsAFontSize="12px"
            thisIsAFontFamily="'Space Grotesk'"
            thisIsAColor="#061543"
            thisIsATextAlign="left"
            thisIsAHeight="unset"
            thisIsAWidth="unset"
          />
          <Frametask
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propDisplay="unset"
            propMinWidth1="unset"
            property1="default"
            btncheckboxMargin="unset"
            btncheckboxHeight="unset"
            btncheckboxWidth="unset"
            btncheckboxBackgroundColor="#596eec"
            btncheckboxDisplay="flex"
            btncheckboxFlexDirection="row"
            btncheckboxAlignItems="center"
            btncheckboxJustifyContent="flex-start"
            btncheckboxPadding="1px"
            thisIsAFontSize="unset"
            thisIsAFontFamily="unset"
            thisIsAColor="unset"
            thisIsATextAlign="unset"
            thisIsAHeight="16px"
            thisIsAWidth="16px"
          />
        </div>
      </div>
    </div>
  );
};

export default CompsubmitTasks;
