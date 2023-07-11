import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Top Page</h1>
    </>
  );
};

export default Home;
