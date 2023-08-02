import React from "react";

import usePost from "@/hooks/usePost";

import { CommentsByPostId } from "../Comments";
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
      {data && <CommentsByPostId postId={data.id} />}
    </>
  );
};

export default Post;
