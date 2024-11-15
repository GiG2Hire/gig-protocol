import { FunctionComponent } from "react";
import submitLogo from "../iconfact-check.svg";
import styles from "./chat-notify-folder.module.css";

export type ChatStatusNotificationType = {
    className?: string;
    role?: "freelancer" | "client";
    property1?: "submitted";
};

const ChatStatusNotification: FunctionComponent<ChatStatusNotificationType> = ({
    className = "",
    role,
    property1 = "submitted",
}) => {
    const titleText =
        role === "freelancer"
            ? "Freelancer has submitted your job"
            : "You’ve successfully submitted your job";
    const messageText =
        role === "client"
            ? "You need to accept it."
            : "Client need to accept it.";

    return (
        <div
            className={[styles.compchatUpdates, className].join(" ")}
            data-property1={property1}
        >
            <img
                className={styles.iconfactCheck}
                loading="lazy"
                alt=""
                src={submitLogo.src}
            />
            <div className={styles.youveSuccessfullySubmittedParent}>
                <b className={styles.youveSuccessfullySubmitted}>
                    {titleText}
                </b>
                <div className={styles.clientTextParent}>
                    <a className={styles.clientText}>{messageText}</a>
                </div>
            </div>
        </div>
    );
};

export default ChatStatusNotification;
