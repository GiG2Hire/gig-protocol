import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./header-spacer.module.css";

export type HeaderSpacerType = {
  className?: string;

  /** Style props */
  navbarTop?: CSSProperties["top"];
  navbarPosition?: CSSProperties["position"];
  navbarOverflow?: CSSProperties["overflow"];
  navButtonsIconDebugCommit?: CSSProperties["debugCommit"];
  navLinksMinWidth?: CSSProperties["minWidth"];
  navTextDebugCommit?: CSSProperties["debugCommit"];
};

const HeaderSpacer: NextPage<HeaderSpacerType> = ({
  className = "",
  navbarTop,
  navbarPosition,
  navbarOverflow,
  navButtonsIconDebugCommit,
  navLinksMinWidth,
  navTextDebugCommit,
}) => {
  const headerSpacerStyle: CSSProperties = useMemo(() => {
    return {
      top: navbarTop,
      position: navbarPosition,
      overflow: navbarOverflow,
    };
  }, [navbarTop, navbarPosition, navbarOverflow]);

  const groupStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: navButtonsIconDebugCommit,
    };
  }, [navButtonsIconDebugCommit]);

  const navigationContentStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: navLinksMinWidth,
    };
  }, [navLinksMinWidth]);

  const navLinksStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: navTextDebugCommit,
    };
  }, [navTextDebugCommit]);

  return (
    <div
      className={[styles.headerSpacer, className].join(" ")}
      style={headerSpacerStyle}
    >
      <header className={styles.navbar}>
        <div className={styles.groupParent}>
          <div className={styles.group} style={groupStyle}>
            <img className={styles.navButtonsIcon} alt="" src="/vector.svg" />
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.logoIcon1}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div
            className={styles.navigationContent}
            style={navigationContentStyle}
          >
            <div className={styles.navLinks} style={navLinksStyle}>
              <div className={styles.navText}>
                <div className={styles.navText1}>
                  <a className={styles.text}>Find a Gig</a>
                </div>
                <div className={styles.hlColor} />
              </div>
              <div className={styles.navText2}>
                <div className={styles.navText3}>
                  <a className={styles.text1}>Teams</a>
                </div>
                <div className={styles.hlColor1} />
              </div>
              <div className={styles.navText4}>
                <div className={styles.navText5}>
                  <a className={styles.text2}>Dashboard</a>
                </div>
                <div className={styles.hlColor2} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pageContent}>
          <div className={styles.mainContent}>
            <div className={styles.notificationsParent}>
              <img
                className={styles.notificationsIcon}
                loading="lazy"
                alt=""
                src="/notifications.svg"
              />
              <div className={styles.search}>
                <b className={styles.searchInput}>+1</b>
              </div>
            </div>
            <div className={styles.profile}>
              <b className={styles.buidlerlens}>buidler.lens</b>
              <div className={styles.balance}>
                <a className={styles.balanceAmount}>1000</a>
                <a className={styles.usdc}>USDC</a>
              </div>
            </div>
            <img
              className={styles.mainContentChild}
              loading="lazy"
              alt=""
              src="/frame-1565@2x.png"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSpacer;
