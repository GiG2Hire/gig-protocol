"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./btnicon-text.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export type BtniconTextType = {
  className?: string;
  iconHide?: boolean;
  button?: string;
  iconeditSquare: string;

  /** Variant props */
  buttonVariables?: "red-m-def" | "navy-st-m-def" | "navy-m-def";

  /** Style props */
  btniconTextFlex?: CSSProperties["flex"];
  btniconTextAlignSelf?: CSSProperties["alignSelf"];
  clickAction: () => {};
};

const BtniconText: NextPage<BtniconTextType> = ({
  className = "",
  buttonVariables = "red-m-def",
  iconHide = false,
  button = "Cancel",
  btniconTextFlex,
  btniconTextAlignSelf,
  iconeditSquare,
  clickAction,
}) => {
  const btniconTextStyle: CSSProperties = useMemo(() => {
    return {
      flex: btniconTextFlex,
      alignSelf: btniconTextAlignSelf,
    };
  }, [btniconTextFlex, btniconTextAlignSelf]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-buttonVariables={buttonVariables}
      style={btniconTextStyle}
      onClick={clickAction}
    >
      {iconHide && (
        <Image
          className={styles.iconeditSquare}
          width={24}
          height={24}
          alt=""
          src={iconeditSquare}
        />
      )}
      <b className={styles.button}>{button}</b>
    </button>
  );
};

export default BtniconText;
