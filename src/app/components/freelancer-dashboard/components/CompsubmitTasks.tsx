import { FunctionComponent } from "react";
import styles from "./CompsubmitTasks.module.css";

export type CompsubmitTasksType = {
  className?: string;
};

const CompsubmitTasks: FunctionComponent<CompsubmitTasksType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.compsubmitTasks, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.iconeventListParent}>
          <img
            className={styles.iconeventList}
            loading="lazy"
            alt=""
            src="/iconevent-list.svg"
          />
          <b className={styles.tasks}>Tasks:</b>
          <b className={styles.b}>10</b>
          <b className={styles.b1}>/</b>
          <b className={styles.b2}>10</b>
        </div>
        <img
          className={styles.iconeventList}
          loading="lazy"
          alt=""
          src="/iconkeyboard-arrow-down.svg"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frametaskParent}>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Include graphics on the PNLs</div>
          </div>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Yellow and Black for the UI</div>
          </div>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Hamsters animations</div>
          </div>
          <div className={styles.frametask}>
            <input className={styles.btncheckbox3} type="checkbox" />
            <div className={styles.thisIsA}>Include historical swaps</div>
          </div>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Add Swap section</div>
          </div>
        </div>
        <div className={styles.frametaskParent}>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Include socials section</div>
          </div>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Include coin tracker</div>
          </div>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Add conversion rate to pounds</div>
          </div>
          <div className={styles.frametask}>
            <input className={styles.btncheckbox3} type="checkbox" />
            <div className={styles.thisIsA}>Make it responsive</div>
          </div>
          <div className={styles.frametask}>
            <div className={styles.btncheckbox}>
              <img className={styles.iconcheck} alt="" src="/iconcheck.svg" />
            </div>
            <div className={styles.thisIsA}>Add Bridge section</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompsubmitTasks;
