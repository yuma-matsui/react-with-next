import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const PostPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Post Page</title>
      </Head>
      <h2>test {query.id}</h2>
    </>
  );
};

export default PostPage;
