import type { NextPage } from "next";
import styles from "./header-spacer1.module.css";

export type HeaderSpacer1Type = {
  className?: string;
};

const HeaderSpacer1: NextPage<HeaderSpacer1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.headerSpacer, className].join(" ")}>
      <header className={styles.navbar}>
        <div className={styles.groupParent}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.frameWrapper}>
            <nav className={styles.navTextParent}>
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
            </nav>
          </div>
        </div>
        <div className={styles.navbarInner}>
          <div className={styles.frameParent}>
            <div className={styles.notificationsParent}>
              <img
                className={styles.notificationsIcon}
                loading="lazy"
                alt=""
                src="/notifications.svg"
              />
              <div className={styles.wrapper}>
                <b className={styles.b}>+1</b>
              </div>
            </div>
            <div className={styles.buidlerlensParent}>
              <b className={styles.buidlerlens}>buidler.lens</b>
              <div className={styles.parent}>
                <a className={styles.a}>1000</a>
                <a className={styles.usdc}>USDC</a>
              </div>
            </div>
            <img
              className={styles.frameChild}
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

export default HeaderSpacer1;
