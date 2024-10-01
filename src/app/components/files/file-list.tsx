"use client";
import styles from "./file-list.module.css";
const FileList = ({ files, title }) => {
  return (
    <div className={styles.fileListParent}>
      <div className={styles.fileList}>
        <a className={styles.uploadedFiles}>{title}</a>
        <div className={styles.fileItems}>
          {files.map((file, index) => (
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
                <div className={styles.btnDelete} key={index}>
                  <img
                    className={styles.deleteIcon}
                    loading="lazy"
                    alt=""
                    src="/delete.svg"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* <div className={styles.proofUrlParent}>
              <div className={styles.proofUrl}>
                <div className={styles.frameParent}>
                  <div className={styles.captivePortalParent}>
                    <img
                      className={styles.captivePortalIcon}
                      loading="lazy"
                      alt=""
                      src="/captive-portal.svg"
                    />
                    <h3 className={styles.httpswwwthisisalinkcommy}>
                      https://www.thisisalink.com/myproject/31ge5457efe
                    </h3>
                  </div>
                  <div className={styles.uploadedParent}>
                    <a className={styles.uploaded}>Uploaded:</a>
                    <div className={styles.div}>02.08.2024</div>
                  </div>
                </div>
                <div className={styles.btnDelete}>
                  <img
                    className={styles.deleteIcon}
                    loading="lazy"
                    alt=""
                    src="/delete.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.proofUrlParent}>
              <div className={styles.proofdDoc}>
                <div className={styles.frameGroup}>
                  <div className={styles.contentPasteParent}>
                    <img
                      className={styles.contentPasteIcon}
                      loading="lazy"
                      alt=""
                      src="/content-paste.svg"
                    />
                    <h3 className={styles.finalHamsterzip}>
                      final-hamster.zip
                    </h3>
                  </div>
                  <div className={styles.uploadedGroup}>
                    <a className={styles.uploaded1}>Uploaded:</a>
                    <div className={styles.div1}>02.08.2024</div>
                    <div className={styles.mb}>(5.25 MB)</div>
                  </div>
                </div>
                <div className={styles.btnDelete1}>
                  <img
                    className={styles.deleteIcon1}
                    loading="lazy"
                    alt=""
                    src="/delete.svg"
                  />
                </div>
              </div>
            </div> */}
        </div>
      </div>
      {/* <button className={styles.btnSubmitFiles} onClick={submitFiles}>
        <img
          className={styles.cloudUploadOutline1Icon}
          alt=""
          src="/clouduploadoutline-12.svg"
        />
        <b className={styles.submitFiles}>Submit Files</b>
      </button> */}
    </div>
  );
};

export default FileList;
