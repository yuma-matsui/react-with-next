import Link from "next/link";
import React, { FC } from "react";

import useComments from "@/hooks/useComments";

const Comments: FC = () => {
  const { comments, isLoading, error, hasComments } = useComments();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasComments) return <p>データは空です</p>;

  return (
    <>
      <h1>Comments</h1>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Comments;
