import FrameComponent from "../../components/choose-a-freelancer/frame-component";
import styles from "./ScreenchatApplicants.module.css";
import GigDescription from "../../components/choose-a-freelancer/gig-description";
import FreelancerDetails from "../../components/choose-a-freelancer/freelancer-details";
import ChatWindow from "../../components/chat/chat-window";
import ChatInput from "../../components/chat/chat-input";

export type GigHeaderType = {
  className?: string;
};

const ScreenchatApplicants = ({ params }: { params: any }) => {
  const gigId: number = params.id;
  const messages: any[] = [];
  const currentUser = 1;
  const chatId = "";
  const currUserRole = "Client";
  const hasSubmitted = true;
  const receiverUser = 1;
  return (
    <div className={styles.screenchatApplicants}>
      <FrameComponent />
      <section className={styles.gigHeaderWrapper}>
        <div className={[styles.gigHeader].join(" ")}>
          <GigDescription />
          <div className={styles.chatInputContent}>
            <ChatWindow
              initialMessages={messages}
              currentUser={currentUser}
              chatId={chatId}
              className=""
            />
            <div className={styles.chatInputContentInner}>
              <ChatInput
                hasSubmitted={hasSubmitted}
                userRole={currUserRole}
                currentUser={currentUser}
                receiverUser={receiverUser}
                chatId={chatId}
                messages={messages}
              />
            </div>
          </div>
          <FreelancerDetails />
        </div>
      </section>
    </div>
  );
};

export default ScreenchatApplicants;
