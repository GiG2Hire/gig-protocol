import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./comppp-online.module.css";

export type CompppOnlineType = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  compppOnlineWidth?: CSSProperties["width"];
  compppOnlineHeight?: CSSProperties["height"];
  onlineTextDecoration?: CSSProperties["textDecoration"];
  statusIconHeight?: CSSProperties["height"];
  statusIconWidth?: CSSProperties["width"];
};

const CompppOnline: NextPage<CompppOnlineType> = ({
  className = "",
  property1 = "offline-xl",
  compppOnlineWidth,
  compppOnlineHeight,
  onlineTextDecoration,
  statusIconHeight,
  statusIconWidth,
}) => {
  const compppOnlineStyle: CSSProperties = useMemo(() => {
    return {
      width: compppOnlineWidth,
      height: compppOnlineHeight,
    };
  }, [compppOnlineWidth, compppOnlineHeight]);

  const onlineStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: onlineTextDecoration,
    };
  }, [onlineTextDecoration]);

  const statusIconStyle: CSSProperties = useMemo(() => {
    return {
      height: statusIconHeight,
      width: statusIconWidth,
    };
  }, [statusIconHeight, statusIconWidth]);

  return (
    <div
      className={[styles.compppOnline, className].join(" ")}
      data-property1={property1}
      style={compppOnlineStyle}
    >
      <div className={styles.onlineParent}>
        <div className={styles.online} style={onlineStyle}>
          Online
        </div>
        <div className={styles.statusIcon} style={statusIconStyle} />
      </div>
    </div>
  );
};

export default CompppOnline;
