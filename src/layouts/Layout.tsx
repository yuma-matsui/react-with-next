import Head from "next/head";
import React, { FC, ReactNode } from "react";

import Header from "@/layouts/Header";

type Props = {
  title: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-auto max-w-2xl items-center px-2 ">{children}</div>
    </>
  );
};

export default Layout;
