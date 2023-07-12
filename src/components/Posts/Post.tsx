import React from "react";

import usePost from "@/hooks/usePost";

import { User } from "../Users";

const Post = () => {
  const { post, error, isLoading } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <User id={post?.userId} />
    </>
  );
};

export default Post;
