import Link from "next/link";
import React, { FC } from "react";

import useComments from "@/hooks/useComments";

const Comments: FC = () => {
  const { data, isLoading, error, hasData } = useComments();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>データは空です</p>;

  return (
    <ul className="space-y-2">
      {data?.map(({ id, body }) => (
        <li key={id} className="border-b pb-2">
          <Link href={`/comments/${id}`} className="block text-sm hover:text-blue-500">
            {body}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
