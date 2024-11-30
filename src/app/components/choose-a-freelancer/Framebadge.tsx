import type { NextPage } from "next";
import Image from "next/image";
import styles from "./framebadge.module.css";

export type FramebadgeType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Framebadge: NextPage<FramebadgeType> = ({
  className = "",
  property1 = "navy",
}) => {
  return (
    <div
      className={[styles.framebadge, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.iconnewReleases}
        loading="lazy"
        width={16}
        height={16}
        alt=""
        src="/iconnew-releases.svg"
      />
      <div className={styles.verified}>Verified</div>
    </div>
  );
};

export default Framebadge;
