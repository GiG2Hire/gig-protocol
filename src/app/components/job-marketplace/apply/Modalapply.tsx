import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import CompsubmitTasks from "./CompsubmitTasks";
import FrameComponent from "./FrameComponent";
import styles from "./Modalapply.module.css";

export type ModalapplyType = {
  className?: string;
};

const Modalapply: FunctionComponent<ModalapplyType> = ({ className = "" }) => {
  return (
    <div className={[styles.modalapply, className].join(" ")}>
      <div className={styles.congratsYouAppliedToAGigWrapper}>
        <b className={styles.congratsYouApplied}>
          Congrats! You applied to a gig 🪅
        </b>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.developADefiDashboardToTrParent}>
          <b
            className={styles.developADefi}
          >{`Develop a DeFi Dashboard to trade kitty coins `}</b>
          <div className={styles.youJoinedA}>
            You joined a pool of interested freelancers, and will get news soon
            from the client.
          </div>
          <CompsubmitTasks
            property1="default"
            compsubmitTasksMinHeight="unset"
            frameDivGap="unset"
            tasksMinWidth="unset"
            tasksHeight="31px"
            bMinWidth="unset"
            bHeight="31px"
            bMinWidth1="unset"
            frameDivAlignSelf="unset"
            frameDivPadding="unset"
            frameDivWidth="654px"
          />
          <FrameComponent />
        </div>
        <div className={styles.backToOffersParent}>
          <div className={styles.backToOffers}>Back to Offers</div>
          <Button
            startIcon={
              <img width="24px" height="24px" src="/icondashboard.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#3f5dba",
              fontSize: "24",
              background: "#d6ea5e",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#d6ea5e" },
            }}
          >
            Go to Dashboard
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Modalapply;
