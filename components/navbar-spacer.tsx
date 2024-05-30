import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./navbar-spacer.module.css";

export type NavbarSpacerType = {
  className?: string;
};

const NavbarSpacer: NextPage<NavbarSpacerType> = ({ className = "" }) => {
  const onGigLogotypeContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={[styles.navbarSpacer, className].join(" ")}>
      <div className={styles.navbar}>
        <div
          className={styles.gigLogotype}
          onClick={onGigLogotypeContainerClick}
        >
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
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          </div>
          <div className={styles.groupContainer}>
            <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
          </div>
          <div className={styles.groupFrame}>
            <img className={styles.groupIcon3} alt="" src="/group-3.svg" />
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.groupIcon4} alt="" src="/group-4.svg" />
          </div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon3} alt="" src="/vector-31.svg" />
          </div>
        </div>
        <div className={styles.menuParent}>
          <nav className={styles.menu}>
            <div className={styles.navText}>
              <div className={styles.navText1}>
                <b className={styles.text}>About</b>
              </div>
              <div className={styles.hlColor} />
            </div>
            <div className={styles.navText2}>
              <div className={styles.navText3}>
                <b className={styles.text1}>RoadMap</b>
              </div>
              <div className={styles.hlColor1} />
            </div>
            <div className={styles.navText4}>
              <div className={styles.navText5}>
                <b className={styles.text2}>Team</b>
              </div>
              <div className={styles.hlColor2} />
            </div>
          </nav>
          <button className={styles.btn}>
            <b className={styles.text3}>Contact Us</b>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarSpacer;
