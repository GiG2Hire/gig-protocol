import { Fragment } from "react";
import type { AppProps } from "next/app";
import "./styles/global.css";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";

import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";

import { createThirdwebClient } from "thirdweb";
import NavbarSpacer from "@/src/app/components/navbar-spacer1";

import { Metadata } from "next";
import { AuthProvider } from "./providers/auth";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "gigfreehire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>
          <Fragment>
            <AuthProvider>
              <NavbarSpacer />
              {children}
              <Toaster
                position="bottom-center"
                toastOptions={{
                  success: {
                    style: {
                      background: "green",
                    },
                  },
                  error: {
                    style: {
                      background: "red",
                    },
                  },
                }}
              />
            </AuthProvider>
          </Fragment>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
