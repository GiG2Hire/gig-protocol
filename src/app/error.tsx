"use client";

import { useEffect } from "react";
import styles from "./index.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorDiv}>
      <h2>Something went wrong!</h2>
      <br></br>
      <button onClick={() => reset()} className={styles.errorDivResetBtn}>
        Try again
      </button>
    </div>
  );
}
