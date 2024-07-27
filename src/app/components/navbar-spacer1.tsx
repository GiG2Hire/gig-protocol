"use client";
import type { NextPage } from "next";
import styles from "./navbar-spacer1.module.css";

import { createThirdwebClient } from "thirdweb";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { createWallet, inAppWallet, Wallet, walletConnect } from "thirdweb/wallets";
import {
  generatePayload,
  isLoggedIn,
  login,
  logout,
} from "@/src/app/actions/login";
import {client} from "@/src/app/lib/client";


const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "phone",
      ],
    },
  }),
];

export type NavbarSpacerType = {
  className?: string;
};

const NavbarSpacer: NextPage<NavbarSpacerType> = ({ className = "" }) => {
  async function persistUserInDatabase(wallet:Wallet) {
    const address = wallet.getAccount()?.address;
    console.log("Persisting user in database");
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        address:address
      }),
    };

    let res = await fetch("/api/user",options);
  }

  return (
    <header className={[styles.navbarSpacer, className].join(" ")}>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.navbarContainerInner}>
            <div className={styles.navTextParent}>
              <div className={styles.navText}>
                <div className={styles.navText1}>
                  <a className={styles.text}>Find a Gig</a>
                </div>
                <div className={styles.hlColor} />
              </div>
              <div className={styles.navText2}>
                <div className={styles.navText3}>
                  <a className={styles.text1}>Teams</a>
                </div>
                <div className={styles.hlColor1} />
              </div>
              <div className={styles.navText4}>
                <div className={styles.navText5}>
                  <a className={styles.text2}>Dashboard</a>
                </div>
                <div className={styles.hlColor2} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightNavbarItems}>
          <div className={styles.notificationsContainer}>
            <div className={styles.notifications}>
              <img
                className={styles.notificationsIcon}
                loading="lazy"
                alt=""
                src="/notifications.svg"
              />
              <div className={styles.notificationBadge}>
                <b className={styles.notificationCount}>+1</b>
              </div>
            </div>
            <div className={styles.userBalanceContainer}>
              <b className={styles.buidlerlens}>buidler.lens</b>
              <div className={styles.uSDCBalance}>
                <a className={styles.uSD}>1000</a>
                <a className={styles.usdc}>USDC</a>
              </div>
            </div>
            <img
              className={styles.notificationsContainerChild}
              loading="lazy"
              alt=""
              src="/frame-1565@2x.png"
            />
          </div>
        </div>
        <ConnectButton
              client={client}
              auth={{
                isLoggedIn: async (address) => {
                  console.log("checking if logged in!", { address });
                  return await isLoggedIn();
                },
                doLogin: async (params) => {
                  console.log("logging in!");
                  await login(params);
                },
                getLoginPayload: async ({ address }) =>
                  generatePayload({ address }),
                doLogout: async () => {
                  console.log("logging out!");
                  await logout();
                },
              }}
              wallets={wallets}
              theme={lightTheme({
                colors: { primaryButtonBg: "#3F5DBA", modalBg: "#FBFAE2"},
                fontFamily: "Unbounded",
              })}
              connectButton={{
                label: "Connect Wallet",
                style:{fontFamily:"Unbounded"}
              }}
              connectModal={{ size: "compact" , showThirdwebBranding: false}}
              onConnect={(wallet) => {
                console.log("Connected to ", wallet.getAccount()?.address);

                persistUserInDatabase(wallet);
              }}
      />
      </div>
    </header>
  );
};

export default NavbarSpacer;
