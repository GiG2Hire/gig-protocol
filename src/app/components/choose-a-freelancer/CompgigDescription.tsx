import { FunctionComponent } from "react";
import styles from "./CompgigDescription.module.css";

export type CompgigDescriptionType = {
  className?: string;
  gigDescription?: string;

  /** Variant props */
  property1?: string;
};

const CompgigDescription: FunctionComponent<CompgigDescriptionType> = ({
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
        <img
          className={styles.iconkeyboardArrowDown}
          alt=""
          src="/iconkeyboard-arrow-down.svg"
        />
      </div>
      <div className={styles.gigdescription}>{gigDescription}</div>
    </div>
  );
};

export default CompgigDescription;
