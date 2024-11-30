import type { NextPage } from "next";
import Image from "next/image";
import styles from "./icon-g.module.css";

export type IconGType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const IconG: NextPage<IconGType> = ({
  className = "",
  property1 = "color",
}) => {
  return (
    <div
      className={[styles.icong, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.groupIcon}
        width={20}
        height={20}
        alt=""
        src="/group@2x.png"
      />
    </div>
  );
};

export default IconG;
