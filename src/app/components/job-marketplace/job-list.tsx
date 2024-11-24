"use client";
import styles from "./job-categories.module.css";
import { useEffect, useState } from "react";
import { getActiveProposals } from "../../actions/read-gigs";
import { getUserIdFromPayload } from "../../actions/login";
import CompJoboffer from "../comp-joboffer";

const INITIAL_PROPOSALS_AMOUNT = 10;

const JobList = ({ selectedCategory, className = "" }) => {
  const [gigData, setGigData] = useState([]);
  const [appliedStatuses, setAppliedStatuses] = useState({});

  useEffect(() => {
    const fetchGigs = async () => {
      const res = await getActiveProposals(0, INITIAL_PROPOSALS_AMOUNT);
      setGigData(res);

      const statuses = {};
      for (const gig of res) {
        const applied = await checkIfApplied(gig.gigId);
        statuses[gig.gigId] = applied;
      }
      setAppliedStatuses(statuses);
    };
    fetchGigs();
  }, []);

  const checkIfApplied = async (gigId: number) => {
    const freelancerId = await getUserIdFromPayload();
    const response = await fetch(`/api/gig/offer-status/?gig_id=${gigId}&freelancer_id=${freelancerId}`);

    if (response.ok) {
      const data = await response.json();
      return data.alreadyApplied;
    } else {
      console.error('Error checking if applied');
      return false;
    }
  };

  return (
    <div className={styles.jobListings}>
      {gigData.map((singleGig) => {
        return (
          <CompJoboffer
            gigId={singleGig.gigId}
            title={singleGig.title}
            description={singleGig.description}
            budget={singleGig.gigBudget}
            appliedStatus={appliedStatuses[singleGig.gigId]}
            freelancerCount={0}
            tasks={singleGig.tasks || []}
            jobCategory={singleGig.category}
          />
        );
      })}
    </div>
  );
};
export default JobList;
