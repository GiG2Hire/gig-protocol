"use client";
import styles from "./job-categories.module.css";
import { useEffect, useState } from "react";
import { getActiveProposals } from "../../actions/read-gigs";
import CompJoboffer from "../comp-joboffer";

const INITIAL_PROPOSALS_AMOUNT = 10;

const JobList = ({ selectedCategory, className = "" }) => {
  const [gigData, setGigData] = useState([]);

  useEffect(() => {
    const fetchGigs = async () => {
      const res = await getActiveProposals(0, INITIAL_PROPOSALS_AMOUNT);
      setGigData(res);
    };
    fetchGigs();
  }, []);

  console.log(gigData)

  return (
    <div className={styles.jobListings}>
      {gigData.map((singleGig) => (
        <CompJoboffer
          gigId={singleGig.gigId}
          title={singleGig.title}
          description={singleGig.description}
          budget={singleGig.budget}
          freelancerCount={0}
          tasks1={singleGig.gig_task}
          jobCategory={singleGig.category}
        />
      ))}
    </div>
  );
};
export default JobList;
