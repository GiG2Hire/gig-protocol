import { FunctionComponent } from "react";
import submitLogo from "../iconfact-check.svg";
import styles from "./chat-notify-folder.module.css";

export type ChatStatusNotificationType = {
    className?: string;
    role?: "Freelancer" | "Client";
    property1?: "submitted";
};

const ChatStatusNotification: FunctionComponent<ChatStatusNotificationType> = ({
    className = "",
    role,
    property1 = "submitted",
}) => {
    const titleText =
        role === "Freelancer"
            ? "You’ve successfully submitted your job"
            : "Freelancer has submitted your job";
    console.log("Role", role);
            const messageText =
        role === "Client"
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
