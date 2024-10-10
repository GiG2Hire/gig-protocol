import type { NextPage } from "next";
import SearchInGlobalChat from "../search-in-global-chat";
import styles from "./join-freelancer.module.css";
import { getPayload, refreshJWTToken } from "../../actions/login";
import { encodeJWT, JWTPayload } from "thirdweb/utils";
import { FREELANCER, STATUS_200 } from "@/src/constants/appConstants";
import { useActiveAccount } from "thirdweb/react";
import { useRouter } from "next/navigation";
import { JoinAsFreelancer } from "../../actions/join-user";
import { useEffect, useState } from "react";

export type JoinFreelancerType = {
  className?: string;
};

const JoinFreelancer = ({ closeJoinAsFreelancerModal, className = "" }) => {
  const account = useActiveAccount();
  const router = useRouter();

  const [localProfileImageUrl, setLocalProfileImageUrl] = useState(
    "/add-photo-alternate.svg"
  );

  // Handle login with github
  const githubLogin = async () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID; // Replace with your actual Client ID
    console.log(clientId)
    const redirectUri = "http://localhost:3000/api/auth/github/callback/"; // Replace with your callback URL
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  };

  const xLogin = async () => {
    const redirectURL = "http://localhost:3000/api/auth/twitter/callback/";
    const authURL = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_X_CLIENT_ID}&redirect_uri=${redirectURL}&scope=tweet.read%20users.read%20follows.read&state=state&code_challenge=challenge&code_challenge_method=plain`;
    window.location.href = authURL;
  };

  /**
   * Update connected user's role as Freelancer and update JWT Token Payload
   */
  const updateJWTForFreelancer = async () => {
    console.log("Trying to Join as Freelancer...");
    let payload: JWTPayload = await getPayload();
    const payloadContext: any = payload.ctx;
    const userId: number = payloadContext.userId;
    const role: string = payloadContext.role;
    payload.ctx.role = FREELANCER;
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
      console.log("User Role Updated as Freelancer");
      router.push("/freelancer-dashboard");
    }
  };

  const joinAsFreelancerAndUpdateJWT = (formData: FormData) => {
    JoinAsFreelancer(formData).then(async (res) => {
      console.log("Freelancer Joined Success!!");
      await updateJWTForFreelancer();
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
      <div className={[styles.joinFreelancer, className].join(" ")}>
        <header className={styles.welcomeAbroadWrapper}>
          <h1 className={styles.welcomeAbroad}>Welcome aboard!</h1>
        </header>
        <form
          className={styles.profileSetup}
          action={joinAsFreelancerAndUpdateJWT}
        >
          <div className={styles.addPhotoAlternateParent}>
            <img
              className={
                localProfileImageUrl == "/add-photo-alternate.svg"
                  ? styles.addPhotoAlternateIcon
                  : styles.addPhotoUser
              }
              loading="lazy"
              alt=""
              src={localProfileImageUrl}
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
          <div className={styles.profileName}>
            <div className={styles.nameInput}>
              <b className={styles.howDoYou}>
                Choose a username
                <input
                  className={styles.textInput1}
                  placeholder="e.g Roaring kitty"
                  type="text"
                  name="username"
                  required
                />
              </b>
            </div>
            <div className={styles.nameInput}>
              <b className={styles.howDoYou}>
                Add an email to get notifications
                <input
                  className={styles.textInput1}
                  placeholder="e.g hello@gig2hire.com"
                  type="email"
                  name="email"
                  required
                />
              </b>
            </div>
            <div className={styles.profileDescription}>
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
            <div className={styles.skillsVerification}>
              <b className={styles.verifyYourSkills}>Verify Your Skills</b>
              <div className={styles.verifyButton}>
                <button className={styles.btnVerify} onClick={githubLogin}>
                  <div className={styles.iconsParent}>
                    <img className={styles.icons} alt="" src="/icons.svg" />
                    <b className={styles.github}>GitHub</b>
                  </div>
                  <div className={styles.btnCheck}>
                    <img
                      className={styles.checkSmallIcon}
                      alt=""
                      src="/check-small2.svg"
                    />
                  </div>
                </button>
                <div className={styles.btnVerify1} onClick={xLogin}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <b className={styles.xcom}>x.com</b>
                  </div>
                  <div className={styles.btnCheck1}>
                    <img
                      className={styles.checkSmallIcon1}
                      alt=""
                      src="/check-small2.svg"
                    />
                  </div>
                </div>
                {/* <div className={styles.btnVerify2}>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group1.svg"
                    />
                    <b className={styles.behance}>BeHance</b>
                  </div>
                  <div className={styles.btnCheck2}>
                    <img
                      className={styles.checkSmallIcon2}
                      alt=""
                      src="/check-small2.svg"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className={styles.navigation}>
              <b className={styles.back} onClick={closeJoinAsFreelancerModal}>
                Back
              </b>
              <button className={styles.btnJoingig} type="submit">
                <img
                  className={styles.gig2hire1Icon}
                  alt=""
                  src="/gig2hire-111.svg"
                />
                <b className={styles.getStarted}>Find GiGs</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinFreelancer;
