import { NextPage } from "next";
import React from "react";

import User from "@/components/User";
import usePost from "@/hooks/usePost";
import Layout from "@/layouts/Layout";

const PostPage: NextPage = () => {
  const { post, error, isLoading } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <Layout title={`Post ${post?.id} Page`}>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <User id={post?.userId} />
    </Layout>
  );
};

export default PostPage;
