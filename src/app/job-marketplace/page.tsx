import type { NextPage } from "next";
import JobCategories from "@/src/app/components/job-categories";
import Footer from "@/src/app/components/footer1";
import styles from "./job-marketplace.module.css";
import { getActiveOffers } from "../actions/read-gigs";

const INITIAL_OFFERS_AMOUNT = 10;

const JobMarketplace: NextPage = async () => {
  const initialData = await getActiveOffers(0, INITIAL_OFFERS_AMOUNT); // fetch latest 10 Offers

  return (
    <div className={styles.jobMarketplace}>
      <main className={styles.pageContent}>
        <section className={styles.contentHeader}>
          <div className={styles.pageTitleContainerParent}>
            <button className={styles.pageTitleContainer}>
              <div className={styles.gigsMarketplace}>GiGs Marketplace</div>
            </button>
            <h1 className={styles.workWithNo}>
              Work with no fees, as it must.
            </h1>
          </div>
          <JobCategories initialData={initialData} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobMarketplace;