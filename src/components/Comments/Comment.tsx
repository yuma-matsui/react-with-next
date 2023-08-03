import Link from "next/link";
import React, { FC } from "react";

import useComment from "@/hooks/useComment";

const Comment: FC = () => {
  const { data, error } = useComment();

  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <p>{data?.body}</p>
      <Link href={`/posts/${data?.postId}`}>Post Page</Link>
    </>
  );
};

export default Comment;
