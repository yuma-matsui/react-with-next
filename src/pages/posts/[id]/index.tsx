import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import User from "@/components/User";
import usePost from "@/hooks/usePost";

const PostPage: NextPage = () => {
  const { post, error, isLoading } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <Head>
        <title>{`Post ${post?.id} Page`}</title>
      </Head>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <User id={post?.userId} />
    </>
  );
};

export default PostPage;
