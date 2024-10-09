"use client";
import type { NextPage } from "next";
import styles from "./job-categories.module.css";
import { JOB_CATEGORIES_INFO } from "@/src/constants/appConstants";
export type JobCategoriesType = {
  className?: string;
  initialData: any[]; // Further replace any[] with Gig[] type from @types
};
const JobCategories = ({
  selectedCategory,
  changeCategory,
  className = "",
}) => {
  const jobCategories = JOB_CATEGORIES_INFO;

  return (
    <div className={styles.categoryButtons}>
      {jobCategories.map((category, index) => {
        return (
          <div
            key={category.id}
            className={`${styles.btnDevit} ${
              selectedCategory === category.id ? styles.activeBtnDevit : ""
            }`}
            onClick={() => {
              changeCategory(category.id);
            }}
          >
            <img
              className={styles.developerModeTvIcon}
              loading="lazy"
              alt=""
              src={category.imgSrc}
            />
            <div className={styles.developmentIt}>{category.text}</div>
          </div>
        );
      })}
    </div>
  );
};
export default JobCategories;
