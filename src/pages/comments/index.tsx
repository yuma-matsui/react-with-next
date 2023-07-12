import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import useComments from "@/hooks/useComments";
import Layout from "@/layouts/Layout";

const Comments: NextPage = () => {
  const { comments, isLoading, error, hasComments } = useComments();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasComments) return <p>データは空です</p>;

  return (
    <Layout title="Comments Page">
      <h1>Comments</h1>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Comments;
