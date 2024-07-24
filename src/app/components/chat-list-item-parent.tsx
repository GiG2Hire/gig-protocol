import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./chat-list-item-parent.module.css";

export type ChatListItemParentType = {
  className?: string;
  emptyChatList?: string;
  rachel?: string;
  hamsterVentures?: string;
  emptyList?: string;
  deFiDashboardForHamsterCo?: string;
  timer?: string;
  hours?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propBorder?: CSSProperties["border"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor2?: CSSProperties["color"];
};

const ChatListItemParent: NextPage<ChatListItemParentType> = ({
  className = "",
  emptyChatList,
  rachel,
  hamsterVentures,
  emptyList,
  deFiDashboardForHamsterCo,
  timer,
  hours,
  propBackgroundColor,
  propPadding,
  propBorder,
  propMinWidth,
  propColor,
  propColor1,
  propMinWidth1,
  propColor2,
}) => {
  const chatListItemParentStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      border: propBorder,
    };
  }, [propBackgroundColor, propPadding, propBorder]);

  const emptyListStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const dueOnStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const hoursStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth1,
    };
  }, [propColor1, propMinWidth1]);

  const emptyTimerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className={[styles.chatListItemParent, className].join(" ")}
      style={chatListItemParentStyle}
    >
      <div className={styles.chatListItemChild}>
        <img
          className={styles.emptyChatList}
          loading="lazy"
          alt=""
          src={emptyChatList}
        />
        <div className={styles.chatListContent}>
          <b className={styles.rachel}>{rachel}</b>
          <div className={styles.hamsterVentures}>{hamsterVentures}</div>
        </div>
        <div className={styles.chatListIconsParent}>
          <img
            className={styles.commentCircleChatMessage1Icon}
            loading="lazy"
            alt=""
            src="/commentcirclechatmessage-1-1.svg"
          />
          <b className={styles.emptyList} style={emptyListStyle}>
            {emptyList}
          </b>
        </div>
      </div>
      <b className={styles.defiDashboardFor}>{deFiDashboardForHamsterCo}</b>
      <div className={styles.chatListTimers}>
        <img className={styles.timerIcon} loading="lazy" alt="" src={timer} />
        <b className={styles.dueOn} style={dueOnStyle}>
          Due on:
        </b>
        <b className={styles.hours} style={hoursStyle}>
          {hours}
        </b>
        <div className={styles.emptyTimer} style={emptyTimerStyle}>
          02.24.2024
        </div>
      </div>
    </div>
  );
};

export default ChatListItemParent;
