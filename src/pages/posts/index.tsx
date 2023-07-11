import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Posts from "@/components/Posts";

const PostsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Posts />
    </>
  );
};

export default PostsPage;
