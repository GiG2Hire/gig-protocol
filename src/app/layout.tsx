import { Fragment } from "react";
import "./styles/global.css";
import {
  ThirdwebProvider
} from "thirdweb/react";
import NavbarSpacer from "@/src/app/components/navbar-spacer1";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'gigfreehire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>
          <Fragment>
            <NavbarSpacer />
            {children}
          </Fragment>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
