import type { NextPage } from "next";
import NavbarSpacer from "@/src/app/components/navbar-spacer1";
import JobCategories from "@/src/app/components/job-categories";
import Footer from "@/src/app/components/footer1";
import styles from "./job-marketplace.module.css";

const JobMarketplace: NextPageJobMarketplaceType = () => {
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
          <JobCategories />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobMarketplace;
