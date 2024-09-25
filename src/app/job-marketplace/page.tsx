"use client";
import type { NextPage } from "next";
<<<<<<< HEAD
import JobCategories from "@/src/app/components/job-categories";
import Footer from "@/src/app/components/footer1";
import styles from "./job-marketplace.module.css";
import { getActiveOffers } from "../actions/read-gigs";
=======
import NavbarSpacer from "@/src/app/components/navbar-spacer1";
import Footer from "@/src/app/components/footer1";
import styles from "./job-marketplace.module.css";
import GitHubProcess from "../components/github-process";
import { getActiveProposals } from "../actions/read-gigs";
import JobCategories from "@/src/app/components/job-marketplace/job-categories";
import JobList from "../components/job-marketplace/job-list";
import { useState } from "react";
>>>>>>> 9e0afd57f33c436018edebc04e784702c3908ae3

const INITIAL_OFFERS_AMOUNT = 10;

<<<<<<< HEAD
const JobMarketplace: NextPage = async () => {
  const initialData = await getActiveOffers(0, INITIAL_OFFERS_AMOUNT); // fetch latest 10 Offers
=======
const JobMarketplace: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = [];

  const changeCategory = (category: number) => {
    setSelectedCategory(category);
  };
>>>>>>> 9e0afd57f33c436018edebc04e784702c3908ae3

  return (
    <div className={styles.jobMarketplace}>
      <main className={styles.pageContent}>
<<<<<<< HEAD
=======
        {/* <GitHubProcess /> */}
        {/* Load Github process from different file with Client Component flag */}
>>>>>>> 9e0afd57f33c436018edebc04e784702c3908ae3
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
