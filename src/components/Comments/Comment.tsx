import Link from "next/link";
import React, { FC } from "react";

import useComment from "@/hooks/useComment";

const Comment: FC = () => {
  const { comment, isLoading, error } = useComment();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <p>{comment?.body}</p>
      <Link href={`/posts/${comment?.postId}`}>Post Page</Link>
    </>
  );
};

export default Comment;
