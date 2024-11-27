import type { NextPage } from "next";
import Image from "next/image";
import styles from "./comptime-left.module.css";

export type ComptimeLeftType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ComptimeLeft: NextPage<ComptimeLeftType> = ({
  className = "",
  property1 = "red",
}) => {
  return (
    <div
      className={[styles.comptimeLeft, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.iconclockLoader90}
        width={32}
        height={32}
        alt=""
        src="/iconclock-loader-90.svg"
      />
      <div className={styles.timeLeft}>
        <div className={styles.timeLeftTo}>Time Left to Deliver</div>
        <div className={styles.d00h00m00s}>00D:00H:00M:00S</div>
      </div>
    </div>
  );
};

export default ComptimeLeft;
