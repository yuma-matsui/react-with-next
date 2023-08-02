import Link from "next/link";
import React, { FC } from "react";

import useComments from "@/hooks/useComments";

const Comments: FC = () => {
  const { data, isLoading, error, hasData } = useComments();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>データは空です</p>;

  return (
    <>
      <h1>Comments</h1>
      <ol>
        {data?.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/comments/${id}`}>{name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Comments;
