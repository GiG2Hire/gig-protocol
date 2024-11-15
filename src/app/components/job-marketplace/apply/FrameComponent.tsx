import { FunctionComponent } from "react";
import CompdeadlineBox from "./CompdeadlineBox";
import CompbudgetBox from "./CompbudgetBox";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.compdeadlineBoxParent, className].join(" ")}>
      <CompdeadlineBox />
      <CompbudgetBox />
    </div>
  );
};

export default FrameComponent;
