"use client";
import type { NextPage } from "next";
import styles from "./job-categories.module.css";

export type JobCategoriesType = {
  className?: string;
  initialData: any[]; // Further replace any[] with Gig[] type from @types
};

const JobCategories = ({
  selectedCategory,
  changeCategory,
  className = "",
}) => {
  return (
    <div className={styles.categoryButtons}>
      <div className={styles.btnDevit} onClick={changeCategory}>
        <img
          className={styles.developerModeTvIcon}
          loading="lazy"
          alt=""
          src="/developer-mode-tv.svg"
        />
        <div className={styles.developmentIt}>{`Development & IT`}</div>
      </div>
      <div className={styles.btnDesign} onClick={changeCategory}>
        <img
          className={styles.designServicesIcon}
          loading="lazy"
          alt=""
          src="/design-services.svg"
        />
        <div className={styles.designCreative}>{`Design & Creative`}</div>
      </div>
      <div className={styles.btnAi} onClick={changeCategory}>
        <img
          className={styles.psychologyIcon}
          loading="lazy"
          alt=""
          src="/psychology.svg"
        />
        <div className={styles.aiServices}>AI services</div>
      </div>
      <div className={styles.btnSales} onClick={changeCategory}>
        <img
          className={styles.storeIcon}
          loading="lazy"
          alt=""
          src="/store.svg"
        />
        <div className={styles.salesMarketing}>{`Sales & Marketing`}</div>
      </div>
      <div className={styles.btnAdmin} onClick={changeCategory}>
        <img
          className={styles.supportAgentIcon}
          loading="lazy"
          alt=""
          src="/support-agent.svg"
        />
        <div className={styles.adminCustomer}>{`Admin & Customer Support`}</div>
      </div>
      <div className={styles.btnLanguages} onClick={changeCategory}>
        <img
          className={styles.translateIcon}
          loading="lazy"
          alt=""
          src="/translate.svg"
        />
        <div
          className={styles.writingTranslation}
        >{`Writing & Translation`}</div>
      </div>
    </div>
  );
};

export default JobCategories;
