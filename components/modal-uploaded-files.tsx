import type { NextPage } from "next";
import styles from "./modal-uploaded-files.module.css";

export type ModalUploadedFilesType = {
  className?: string;
};

const ModalUploadedFiles: NextPage<ModalUploadedFilesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.modalUploadedFiles, className].join(" ")}>
      <div className={styles.uploadManager}>
        <h1 className={styles.uploadAndManage}>
          Upload and Manage files for your GiG
        </h1>
        <div className={styles.btnClose}>
          <img
            className={styles.closeSmallIcon}
            loading="lazy"
            alt=""
            src="/close-small.svg"
          />
        </div>
      </div>
      <section className={styles.content}>
        <div className={styles.compBoxuploadParent}>
          <div className={styles.compBoxupload}>
            <div className={styles.dragDropArea}>
              <img
                className={styles.dragDropAreaChild}
                loading="lazy"
                alt=""
                src="/group-1649.svg"
              />
              <h1 className={styles.dragAndDrop}>Drag and Drop File Here</h1>
            </div>
            <button className={styles.btnBrowse}>
              <img className={styles.uploadIcon} alt="" src="/upload.svg" />
              <div className={styles.browseFileInstead}>
                Browse file instead
              </div>
            </button>
          </div>
          <div className={styles.separator}>
            <img
              className={styles.separatorChild}
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
            <h1 className={styles.or}>or</h1>
            <img
              className={styles.separatorItem}
              loading="lazy"
              alt=""
              src="/vector-10.svg"
            />
          </div>
          <div className={styles.typeLinkHereParent}>
            <div className={styles.typeLinkHere}>Type link here</div>
            <div className={styles.btnPastelink}>
              <input className={styles.paste} placeholder="Paste" type="text" />
              <img className={styles.addLinkIcon} alt="" src="/add-link.svg" />
            </div>
          </div>
        </div>
        <div className={styles.fileListParent}>
          <div className={styles.fileList}>
            <a className={styles.uploadedFiles}>Uploaded Files</a>
            <div className={styles.fileItems}>
              <div className={styles.proofUrlParent}>
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
              </div>
              <div className={styles.proofUrlGroup}>
                <div className={styles.proofUrl1}>
                  <div className={styles.frameContainer}>
                    <div className={styles.captivePortalGroup}>
                      <img
                        className={styles.captivePortalIcon1}
                        loading="lazy"
                        alt=""
                        src="/captive-portal.svg"
                      />
                      <h3 className={styles.httpswwwthisisalinkcommy1}>
                        https://www.thisisalink.com/myproject/31ge5457efe
                      </h3>
                    </div>
                    <div className={styles.uploadedContainer}>
                      <div className={styles.uploaded2}>Uploaded:</div>
                      <div className={styles.div2}>02.08.2024</div>
                    </div>
                  </div>
                  <div className={styles.btnDelete2}>
                    <img
                      className={styles.deleteIcon2}
                      loading="lazy"
                      alt=""
                      src="/delete.svg"
                    />
                  </div>
                </div>
                <div className={styles.proofdDoc1}>
                  <div className={styles.frameDiv}>
                    <div className={styles.contentPasteGroup}>
                      <img
                        className={styles.contentPasteIcon1}
                        loading="lazy"
                        alt=""
                        src="/content-paste.svg"
                      />
                      <h3 className={styles.finalHamsterzip1}>
                        final-hamster.zip
                      </h3>
                    </div>
                    <div className={styles.uploadedParent1}>
                      <div className={styles.uploaded3}>Uploaded:</div>
                      <div className={styles.div3}>02.08.2024</div>
                      <div className={styles.mb1}>(5.25 MB)</div>
                    </div>
                  </div>
                  <div className={styles.btnDelete3}>
                    <img
                      className={styles.deleteIcon3}
                      loading="lazy"
                      alt=""
                      src="/delete.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.btnSubmitFiles}>
            <img
              className={styles.cloudUploadOutline1Icon}
              alt=""
              src="/clouduploadoutline-12.svg"
            />
            <b className={styles.submitFiles}>Submit Files</b>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalUploadedFiles;
