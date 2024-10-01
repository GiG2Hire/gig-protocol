"use client";
import Head from 'next/head';
import styles from "../../utils/root-style.css";
import Link from "next/link";
import { useActiveAccount } from "thirdweb/react";
import { getPayload, refreshJWTToken } from "../actions/login";
import { encodeJWT, JWTPayload } from "thirdweb/utils";
import { CLIENT, STATUS_200 } from "@/src/constants/appConstants";
import { useRouter } from "next/navigation";
export type JoinClientType = {
  className?: string;
};

const JoinClient = () => {
  const account = useActiveAccount();
  const router = useRouter();

  /**
   * Update connected user's role as Freelancer and update JWT Token Payload
   */
  const joinAsClient = async () => {
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

  return (
    <div id="join-freelance" className={styles.modal}>
      <header>
        <h1 className={styles.high}>Welcome Abroad!</h1>
        <form>
          <div className={styles['form-top']}>
            <div>
              <label htmlFor="profile-pic" className={styles['profile-pic']}>
                <p className="material-symbols-outlined">add_photo_alternate</p>
                <p className={styles['txt-medium']}>Add a Profile Picture</p>
              </label>
              <input type="file" name="profile-pic" id="profile-pic" accept="image/jpeg,image/png,image/webp" />
            </div>
            <div className={styles['fields-top']}>
              <label htmlFor="user-name" className={`${styles['user-name']} ${styles['txt-primary']}`}><strong>1. Choose an Username</strong></label>
              <input type="text" name="user-name" id="user-name" placeholder="0xDegen" />
              <label htmlFor="user-mail" className={`${styles['user-mail']} ${styles['txt-primary']}`}><strong>2. Add a mail to get notifications</strong></label>
              <input type="email" name="user-mail" id="user-mail" placeholder="0xdegen@webtree.com" />
            </div>
          </div>
          <div className={styles['form-bottom']}>
            <label htmlFor="company-name" className={`${styles['company-name']} ${styles['txt-primary']}`}><strong>3. Your company-name</strong></label>
            <input type="text" name="company-name" id="company-name" placeholder="WebTree VC" />
            <label htmlFor="user-desc" className={`${styles['user-desc']} ${styles['txt-primary']}`}><strong>3. Add a description for your Profile</strong></label>
            <div className={styles['user-desc-area']}>
              <textarea name="user-desc" id="user-desc" placeholder="We are an incubator and VC rooting for multiple web3 projects."></textarea>
              <p className={`${styles['char-count']} ${styles['txt-small']}`}><span id="charCount">0</span>/480</p>
            </div>
            <div className={styles['btn-group-submit']}>
              <input type="submit" name="action" value="Continue to Dashboard" className={styles['btn-secondary']} />
              <input type="submit" name="action" value="Save and Create GIG" className={`${styles['btn-m']} ${styles['btn-navy']}`} />
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default JoinClient;
