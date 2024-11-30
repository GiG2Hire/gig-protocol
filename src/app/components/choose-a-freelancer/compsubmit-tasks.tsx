import type { NextPage } from "next";
import Image from "next/image";
import styles from "./compsubmit-tasks.module.css";
import { useState } from "react";

export type CompsubmitTasksType = {
  className?: string;
  taskCompletedHide?: boolean;
  taskCompleted?: string;
  taskTotal?: string;

  /** Variant props */
  property1?: string;
};

const CompsubmitTasks: NextPage<CompsubmitTasksType> = ({
  className = "",
  property1 = "default",
  taskCompletedHide = false,
  taskCompleted = "00",
  tasks,
}) => {
  const [showTasks, setShowTasks] = useState<boolean>(false);
  return (
    <div
      className={[styles.compsubmitTasks, className].join(" ")}
      onClick={() => {
        setShowTasks(!showTasks);
      }}
    >
      <div className={styles.userTasksParent}>
        <div className={styles.userTasks}>
          <Image
            className={styles.iconeventList}
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/iconevent-list.svg"
          />
          <h1 className={styles.tasks}>Tasks:</h1>
          <div className={styles.expandUser}>
            {taskCompletedHide && (
              <div className={styles.parent}>
                <b className={styles.b}>{taskCompleted}</b>
                <b className={styles.b1}>/</b>
              </div>
            )}
            <b className={styles.expandUserIcon}>{tasks.length}</b>
          </div>
        </div>
        <Image
          className={styles.iconkeyboardArrowDown}
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/iconkeyboard-arrow-down.svg"
        />
      </div>
      {showTasks && (
        <div className={styles.frameParent}>
          {tasks.map((task: any) => {
            return (
              <div className={styles.frametaskWrapper}>
                <div className={styles.frametask}>
                  <input
                    className={styles.btncheckbox}
                    type="checkbox"
                    checked
                  />
                  <div className={styles.tasktext}>taskText</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CompsubmitTasks;
