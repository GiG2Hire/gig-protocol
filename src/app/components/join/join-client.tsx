import { CLIENT, STATUS_200 } from "@/src/constants/appConstants";
import styles from "./join-client.module.css";
import { getPayload, refreshJWTToken } from "../../actions/login";
import { encodeJWT, JWTPayload } from "thirdweb/utils";
import { useActiveAccount } from "thirdweb/react";
import { useRouter } from "next/navigation";
import { JoinAsClient } from "../../actions/join-user";
import { useState } from "react";

const JoinClient = ({ closeJoinAsClientModal, className = "" }) => {
  const account = useActiveAccount();
  const router = useRouter();

  const [localProfileImageUrl, setLocalProfileImageUrl] = useState(
    "/add-photo-alternate1.svg"
  );

  /**
   * Update connected user's role as Freelancer and update JWT Token Payload
   */
  const updateJWTForClient = async () => {
    console.log("Trying to Join as Client...");
    let payload: JWTPayload = await getPayload();
    const payloadContext: any = payload.ctx;
    const userId: number = payloadContext.userId;
    const role: string = payloadContext.role;
    payload.ctx.role = CLIENT;
    payload.exp = new Date(Date.now() + 1000 * 60 * 60);
    payload.nbf = new Date();
    payload.iat = new Date();

    const encodeJWTParams: any = {
      payload: payload,
      account,
    };

    const jwt = await encodeJWT(encodeJWTParams);

    // const newjwt = await refreshJWT({
    //   account,
    //   jwt
    // });

    await refreshJWTToken(jwt);

    const newPayload = await getPayload();
    console.log(newPayload);
    console.log("JWT Updated for user!!");

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        userId: userId,
        role: payload.ctx.role,
      }),
    };

    let UpdatedUserResponse = await fetch("/api/user/freelancer", options);
    if (UpdatedUserResponse.status == STATUS_200) {
      console.log("User Role Updated as Client");
      router.push("/client-dashboard");
    }
  };

  const JoinAsClientAndUpdateJWT = (formData: FormData) => {
    JoinAsClient(formData).then(async (res) => {
      console.log("Client Joined Success!!");
      await updateJWTForClient();
    });
  };

  const displayProfileImage = (e: any) => {
    console.log(e.target.files);
    if (e.target.files.length == 0) {
      setLocalProfileImageUrl("/add-photo-alternate1.svg");
    } else {
      const profileImageFile: File = e.target.files[0];
      const url: string = URL.createObjectURL(profileImageFile);
      setLocalProfileImageUrl(url);
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={[styles.joinClient, className].join(" ")}>
        <div className={styles.welcomeAbroadWrapper}>
          <h1 className={styles.welcomeAbroad}>Welcome aboard!</h1>
        </div>
        <form className={styles.frameParent} action={JoinAsClientAndUpdateJWT}>
          <div className={styles.addPhotoAlternateParent}>
            <img
              className={
                localProfileImageUrl == "/add-photo-alternate1.svg"
                  ? styles.addPhotoAlternateIcon
                  : styles.addPhotoUser
              }
              loading="lazy"
              alt=""
              src={localProfileImageUrl}
              width="154px"
              height={"154px"}
            />
            <b className={styles.addAProfile}>
              Add a Profile Picture
              <input
                className={styles.profilePicture}
                type="file"
                accept="image/*"
                name="profile-image"
                onChange={displayProfileImage}
              />
            </b>
          </div>
          <div className={styles.nameInputFieldsParent}>
            <div className={styles.nameInputFields}>
              <b className={styles.howDoYou}>Choose a Username</b>
              <input
                className={styles.textInput1}
                placeholder="e.g Roaring kitty"
                type="text"
                name="username"
                required
              />
            </div>
            <div className={styles.nameInputFields}>
              <b className={styles.howDoYou}>
                Add an email to get notifications
              </b>
              <input
                className={styles.textInput1}
                placeholder="e.g hello@gig2hire.com"
                type="email"
                name="email"
                required
              />
            </div>
            <div className={styles.nameInputFields1}>
              <b className={styles.yourCompanyName}>Your organization Name</b>
              <input
                className={styles.textInput1}
                placeholder="e.g Roaring Production"
                type="text"
                name="organization"
              />
            </div>
            <div className={styles.yourCompanyNameParent}>
              <b className={styles.yourCompanyName1}>Your organization Name</b>
              <div className={styles.textInput2}>
                <div className={styles.searchInGlobal1}>
                  e.g. Kitty Productions
                </div>
              </div>
            </div>
            <div className={styles.addADescriptionForYourProParent}>
              <b className={styles.addADescription}>
                Add a description for your Profile
              </b>

              <input
                className={styles.textInput1}
                placeholder="Looking for great feline minds, that are top notch at their
                  jobs"
                type="text"
                name="description"
              />
            </div>
            <div className={styles.backParent}>
              <b className={styles.back} onClick={closeJoinAsClientModal}>
                Back
              </b>
              <button className={styles.btnJoingig} type="submit">
                <img
                  className={styles.gig2hire1Icon}
                  alt=""
                  src="/gig2hire-111.svg"
                />
                <b className={styles.getStarted}>Create GiGs</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinClient;
