"use client";
import NavbarSpacer from "./components/navbar-spacer";
import FrameComponent9 from "./components/frame-component9";
import FrameComponent7 from "./components/frame-component7";
import FrameComponent5 from "./components/frame-component5";
import FrameComponent3 from "./components/frame-component3";
import FrameComponent1 from "./components/frame-component1";
import FrameComponent from "./components/frame-component";
import Footer from "./components/footer";
import styles from "./index.module.css";
import { useActiveAccount } from "thirdweb/react";

const NewlandingDesktop = () => {
  const account = useActiveAccount();
  console.log("Account:" + account?.address);
  return (
    <div className={styles.newlandingDesktop}>
      {/* <NavbarSpacer /> */}
      <FrameComponent9 />
      <main className={styles.newlandingDesktopInner}>
        <section className={styles.frameParent}>
          <FrameComponent7 />
          <FrameComponent5 />
          <FrameComponent3 />
          <div id="roadmap" className={styles.roadMapWrapper}>
            <h1 className={styles.roadMap}>Road Map</h1>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewlandingDesktop;
