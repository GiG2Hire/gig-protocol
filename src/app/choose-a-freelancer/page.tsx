"use client";
import { FunctionComponent } from "react";
import FrameComponent1 from "../components/choose-a-freelancer/FrameComponent1";
import GigHeader from "../components/choose-a-freelancer/GigHeader";
import styles from "./ScreenchatApplicants.module.css";

const ScreenchatApplicants: FunctionComponent = () => {
  return (
    <div className={styles.screenchatApplicants}>
      <header className={styles.compnavbar}>
        <a className={styles.navbarPlaceholder}>NAVBAR PLACEHOLDER</a>
      </header>
      <FrameComponent1 />
      <section className={styles.gigHeaderWrapper}>
        <GigHeader />
      </section>
      <footer className={styles.compfooter}>
        <div className={styles.footerPlaceholder}>FOOTER PLACEHOLDER</div>
      </footer>
    </div>
  );
};

export default ScreenchatApplicants;
