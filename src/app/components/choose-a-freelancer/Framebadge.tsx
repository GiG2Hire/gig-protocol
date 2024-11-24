import { FunctionComponent } from "react";
import styles from "./Framebadge.module.css";

export type FramebadgeType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Framebadge: FunctionComponent<FramebadgeType> = ({
  className = "",
  property1 = "navy",
}) => {
  return (
    <div
      className={[styles.framebadge, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.iconnewReleases}
        loading="lazy"
        alt=""
        src="/iconnew-releases.svg"
      />
      <div className={styles.verified}>Verified</div>
    </div>
  );
};

export default Framebadge;
