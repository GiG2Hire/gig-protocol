"use client";
import { useEffect, useState } from "react";
import { removeUploadedFile } from "../../actions/create-gig-file";
import styles from "./file-list.module.css";

const FileList = ({ files, title, currentUser }) => {
  const [uploadedFiles, setUploadedFiles] = useState(files);

  useEffect(() => {
    setUploadedFiles(files);
  }, [files]);

  const removeFileUploadedByUser = (id, index) => {
    removeUploadedFile(id).then((res) => {
      removeFileFromUploadsList(index);
    });
  };

  const removeFileFromUploadsList = (index: number) => {
    const files: File[] = [];
    for (let i = 0; i < uploadedFiles.length; i++) {
      if (i == index) {
        continue;
      }
      files.push(uploadedFiles[i]);
    }
    setUploadedFiles(files);
  };

  return (
    <div className={styles.fileListParent}>
      <div className={styles.fileList}>
        <a className={styles.uploadedFiles}>{title}</a>
        <div className={styles.fileItems}>
          {uploadedFiles.map((file, index) => (
            <div className={styles.proofUrlParent} key={index}>
              <div className={styles.proofUrl}>
                <div className={styles.frameParent}>
                  <div className={styles.captivePortalParent}>
                    <img
                      className={styles.captivePortalIcon}
                      loading="lazy"
                      alt=""
                      src={
                        file.type == "link"
                          ? "/captive-portal.svg"
                          : "/content-paste.svg"
                      }
                    />
                    <h3 className={styles.httpswwwthisisalinkcommy}>
                      {file.name}
                    </h3>
                  </div>
                  {/* <div className={styles.uploadedParent}>
                      <a className={styles.uploaded}>Uploaded:</a>
                      <div className={styles.div}>02.08.2024</div>
                    </div> */}
                </div>

                {file.uploadedBy == currentUser && (
                  <div
                    className={styles.btnDelete}
                    key={file.id}
                    onClick={() => {
                      removeFileUploadedByUser(file.id, index);
                    }}
                  >
                    <img
                      className={styles.deleteIcon}
                      loading="lazy"
                      alt=""
                      src="/delete.svg"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileList;
