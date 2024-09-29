import type { NextPage } from "next";
import styles from "./modal-uploaded-files.module.css";
import { useState } from "react";
import { getPresignedUrl } from "../actions/get-presigned-url";
import { createGigFile } from "../actions/create-gig-file";

export type ModalUploadedFilesType = {
  gigId: string;
  closeModal: any;
  className?: string;
};

async function computeSHA256(file: File) {
  console.log("Computing checksum of file...");
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

const ModalUploadedFiles = ({ gigId, closeModal, className = "" }) => {
  const [uploadedFile, setUploadedFile] = useState<File | undefined>();
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string>();

  //
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files?.[0]);
    const uploadedFile: File | undefined = e.target.files?.[0] || undefined;
    setUploadedFile(uploadedFile);
    if (uploadedFile) {
      // const url = URL.createObjectURL(uploadedFile);
      const checksum = await computeSHA256(uploadedFile);
      console.log(checksum);
      const presignedUrl: string = await getPresignedUrl(
        uploadedFile.type,
        uploadedFile.size,
        checksum
      );
      if (presignedUrl == undefined) {
        console.log("Unable to get presigned URL");
      }
      console.log(presignedUrl); //blob:http://localhost:3000/655e7c6a-85c8-4216-88dd-fb816afde7a3
      await fetch(presignedUrl, {
        method: "PUT",
        body: uploadedFile,
        headers: {
          "Content-Type": uploadedFile.type,
        },
      }).then((res) => {
        if (res.status == 200) {
          const url = presignedUrl.split("?")[0];
          createGigFile(gigId, uploadedFile.name, uploadedFile.type, url);
        }
      });
      // setUploadedFileUrl(url);
    }
  };

  const removeFile = () => {
    setUploadedFile(undefined);
    setUploadedFileUrl(undefined);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={[styles.modalUploadedFiles, className].join(" ")}>
        <div className={styles.uploadManager}>
          <h1 className={styles.uploadAndManage}>
            Upload and Manage files for your GiG
          </h1>
          <div className={styles.btnClose} onClick={() => closeModal()}>
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
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,.txt,.doc,.pdf"
                    onChange={handleFileUpload}
                  />
                  {/* Browse file instead */}
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
                <input
                  className={styles.paste}
                  placeholder="Paste"
                  type="text"
                />
                <img
                  className={styles.addLinkIcon}
                  alt=""
                  src="/add-link.svg"
                />
              </div>
            </div>
            <video src={uploadedFileUrl} autoPlay></video>
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
    </div>
  );
};

export default ModalUploadedFiles;
