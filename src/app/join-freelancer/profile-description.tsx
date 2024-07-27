import type { NextPage } from "next";
import styles from "./profile-description.module.css";

export type ProfileDescriptionType = {
  className?: string;
};

const ProfileDescription: NextPage<ProfileDescriptionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.profileDescription, className].join(" ")}>
      <b className={styles.addADescription}>
        Add a description for your Profile
      </b>
      <div className={styles.descriptionInput}>
        <div className={styles.textInput}>
          <input
            className={styles.searchInGlobal}
            name="desc"
            id="desc"
            placeholder="Looking for great feline minds, that are top notch at their jobs"
            type="text"
          />
        </div>
        <b className={styles.empty}>0/480</b>
      </div>
    </div>
  );
};

export default ProfileDescription;
