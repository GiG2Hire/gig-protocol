import type { NextPage } from "next";
import Image from "next/image";
import styles from "./compgig-description.module.css";

export type CompgigDescriptionType = {
  className?: string;
  gigDescription?: string;

  /** Variant props */
  property1?: string;
};

const CompgigDescription: NextPage<CompgigDescriptionType> = ({
  className = "",
  property1 = "default",
  gigDescription = "gigDescription",
}) => {
  return (
    <div
      className={[styles.compgigDescription, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.gigDescription1}>
        <b className={styles.gigDescription}>GIG Description</b>
        <Image
          className={styles.iconkeyboardArrowDown}
          width={24}
          height={24}
          alt=""
          src="/iconkeyboard-arrow-down.svg"
        />
      </div>
      <div className={styles.gigdescription}>{gigDescription}</div>
    </div>
  );
};

export default CompgigDescription;
