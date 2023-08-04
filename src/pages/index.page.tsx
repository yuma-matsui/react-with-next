import Head from "next/head";
import React from "react";

import HeaderOnlyLayout from "@/layouts/HeaderOnlyLayout";

import { NextPageWithLayout } from "./_app.page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
    </>
  );
};

Home.getLayout = HeaderOnlyLayout;

export default Home;
