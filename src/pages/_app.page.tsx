import "@/styles/globals.css";

import type { AppProps } from "next/app";
import React from "react";
import { SWRConfig } from "swr";

import fetcher from "@/utils/fetcher";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
