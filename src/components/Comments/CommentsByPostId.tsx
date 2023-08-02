import React, { FC } from "react";

import useCommentsByPostId from "@/hooks/useCommentsByPostId";
import Post from "@/type/post.type";

type Props = {
  postId: Post["id"];
};

const CommentsByPostId: FC<Props> = ({ postId }) => {
  const { data, isLoading, error, hasData } = useCommentsByPostId(postId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>No Comments!</p>;

  return (
    <>
      <h3>Comments</h3>
      <ul>{data?.map((comment) => <li key={comment.id}>{comment.body}</li>)}</ul>
    </>
  );
};

export default CommentsByPostId;
