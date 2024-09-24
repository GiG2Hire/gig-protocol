"use client";
import type { NextPage } from "next";
import NavbarSpacer from "@/src/app/components/navbar-spacer1";
import Footer from "@/src/app/components/footer1";
import styles from "./job-marketplace.module.css";
import GitHubProcess from "../components/github-process";
import { getActiveProposals } from "../actions/read-gigs";
import JobCategories from "@/src/app/components/job-marketplace/job-categories";
import JobList from "../components/job-marketplace/job-list";
import { useState } from "react";

const INITIAL_PROPOSALS_AMOUNT = 10;

const JobMarketplace: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = [];

  const changeCategory = (category: number) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.jobMarketplace}>
      <main className={styles.pageContent}>
        {/* <GitHubProcess /> */}
        {/* Load Github process from different file with Client Component flag */}
        <section className={styles.contentHeader}>
          <div className={styles.pageTitleContainerParent}>
            <button className={styles.pageTitleContainer}>
              <div className={styles.gigsMarketplace}>GiGs Marketplace</div>
            </button>
            <h1 className={styles.workWithNo}>
              Work with no fees, as it must.
            </h1>
          </div>
          {/* <JobCategories initialData={initialData} /> */}
          <div className={styles.jobCategories}>
            <JobCategories
              selectedCategory={selectedCategory}
              changeCategory={changeCategory}
            />
            <JobList selectedCategory={selectedCategory} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobMarketplace;
