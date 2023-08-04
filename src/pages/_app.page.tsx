import "@/styles/globals.css";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";

import fetcher from "@/utils/fetcher";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (children: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig value={{ fetcher }}>
      {getLayout(
        <>
          <Component {...pageProps} />
          <Toaster
            toastOptions={{
              duration: 2000,
              style: {
                background: "green",
                color: "white",
              },
            }}
          />
        </>,
      )}
    </SWRConfig>
  );
}
