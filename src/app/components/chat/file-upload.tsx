"use client";
import { useState } from "react";
import styles from "./file-upload.module.css";
import ModalUploadedFiles from "../modal-uploaded-files";

const FileUpload = () => {
  const [showFileUploadModal, setShowFileUploadModal] =
    useState<boolean>(false);

  const closeFileUploadModal = () => {
    setShowFileUploadModal(false);
  };
  return (
    <div>
      <div className={styles.collectingContainer}>
        <div className={styles.collectingHeader}>
          <div className={styles.collecting}>Collecting:</div>
          <div className={styles.collectingAmount}>
            <b className={styles.emptyCollectingAmount}>2500</b>
            <h1 className={styles.dai}>DAI</h1>
          </div>
        </div>
        <div
          className={styles.btnUploadJob}
          onClick={() => setShowFileUploadModal(true)}
        >
          <div className={styles.uploadButtonContent}>
            <img
              className={styles.cloudUploadOutline1Icon}
              loading="lazy"
              alt=""
              src="/clouduploadoutline-1.svg"
            />
            <b className={styles.uploadFiles}>Upload Files</b>
          </div>
          <div className={styles.uploadedFiles}>
            <b className={styles.filesUploaded}>4 files uploaded</b>
          </div>
        </div>
      </div>
      {showFileUploadModal && (
        <ModalUploadedFiles closeModal={closeFileUploadModal} />
      )}
    </div>
  );
};

export default FileUpload;
