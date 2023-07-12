import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import useComment from "@/hooks/useComment";
import Layout from "@/layouts/Layout";

const Comment: NextPage = () => {
  const { comment, isLoading, error } = useComment();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <Layout title={`Comment ${comment?.id} Page`}>
      <p>{comment?.body}</p>
      <Link href={`/posts/${comment?.postId}`}>Post Page</Link>
    </Layout>
  );
};

export default Comment;
