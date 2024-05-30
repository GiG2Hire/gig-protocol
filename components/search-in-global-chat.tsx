import type { NextPage } from "next";
import styles from "./search-in-global-chat.module.css";

export type SearchInGlobalChatType = {
  className?: string;
};

const SearchInGlobalChat: NextPage<SearchInGlobalChatType> = ({
  className = "",
}) => {
  return (
    <a className={[styles.searchInGlobal, className].join(" ")}>
      e.g Roaring Kitty
    </a>
  );
};

export default SearchInGlobalChat;
