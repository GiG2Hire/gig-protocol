import type { NextPage } from "next";
import styles from "./proof-parent.module.css";

export type ProofParentType = {
  className?: string;
};

const ProofParent: NextPage<ProofParentType> = ({ className = "" }) => {
  return (
    <div className={[styles.proofParent, className].join(" ")}>
      <div className={styles.proofUrl}>
        <div className={styles.proofUrlChild}>
          <div className={styles.captivePortalParent}>
            <img
              className={styles.captivePortalIcon}
              loading="lazy"
              alt=""
              src="/captive-portal.svg"
            />
            <div className={styles.httpswwwthisisalinkcommy}>
              https://www.thisisalink.com/myproject/31ge5457efe
            </div>
          </div>
          <div className={styles.uploadStatusParent}>
            <div className={styles.uploaded}>Uploaded:</div>
            <div className={styles.emptyStatus}>02.08.2024</div>
          </div>
        </div>
        <div className={styles.btnDelete}>
          <img className={styles.deleteIcon} alt="" src="/delete.svg" />
        </div>
      </div>
      <div className={styles.proofdDoc}>
        <div className={styles.proofDocumentChild}>
          <div className={styles.contentPasteParent}>
            <img
              className={styles.contentPasteIcon}
              loading="lazy"
              alt=""
              src="/content-paste.svg"
            />
            <div className={styles.finalHamsterzip}>final-hamster.zip</div>
          </div>
          <div className={styles.proofDocumentStatus}>
            <div className={styles.uploaded1}>Uploaded:</div>
            <div className={styles.empty}>02.08.2024</div>
            <div className={styles.mb}>(5.25 MB)</div>
          </div>
        </div>
        <div className={styles.btnDelete1}>
          <img className={styles.deleteIcon1} alt="" src="/delete.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProofParent;
