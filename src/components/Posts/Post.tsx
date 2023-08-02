import React from "react";

import usePost from "@/hooks/usePost";

import { User } from "../Users";

const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
      <User />
    </>
  );
};

export default Post;
