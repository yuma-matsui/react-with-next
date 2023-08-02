import React from "react";

import usePost from "@/hooks/usePost";

import { CommentsByPostId } from "../Comments";

const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <h2 className="text-xl font-bold">{data?.title}</h2>
      <p className="text-gray-900">{data?.body}</p>
      <h2 className="text-lg font-bold my-4">コメント一覧</h2>
      {data && <CommentsByPostId postId={data.id} />}
    </>
  );
};

export default Post;
