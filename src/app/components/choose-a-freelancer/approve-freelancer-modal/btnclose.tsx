import type { NextPage } from "next";
import Image from "next/image";
import styles from "./btnclose.module.css";

export type BtncloseType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Btnclose: NextPage<BtncloseType> = ({
  className = "",
  property1 = "navy",
}) => {
  return (
    <div
      className={[styles.btnclose, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.iconclose}
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/iconclose.svg"
      />
    </div>
  );
};

export default Btnclose;
