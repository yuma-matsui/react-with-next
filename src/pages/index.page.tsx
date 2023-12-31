import Head from "next/head";
import React from "react";
import toast from "react-hot-toast";

import Button from "@/components/Button";
import HeaderOnlyLayout from "@/layouts/HeaderOnlyLayout";

import { NextPageWithLayout } from "./_app.page";

const Home: NextPageWithLayout = () => {
  const handleClick = () => {
    toast.success("Great Job");
  };
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <Button onClick={handleClick} label="Show Toast!" color />
    </>
  );
};

Home.getLayout = HeaderOnlyLayout;

export default Home;
