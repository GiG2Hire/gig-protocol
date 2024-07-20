import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import {
  ThirdwebProvider,
  ConnectButton,
} from "thirdweb/react";

import {
  createWallet,
  walletConnect,
  inAppWallet,
} from "thirdweb/wallets";

import { createThirdwebClient } from "thirdweb";
import NavbarSpacer from "components/navbar-spacer1";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider>
          <Fragment>
            <Head>
              <title>gigfreehire</title>
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
              />
            </Head>
            <NavbarSpacer />
            <Component {...pageProps} />
          </Fragment>
    </ThirdwebProvider>
  );
}

export default MyApp;
