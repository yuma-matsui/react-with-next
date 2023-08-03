import Link from "next/link";
import React, { FC } from "react";

import useFetchArray from "@/hooks/useFetchArray";
import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

const CommentList: FC = () => {
  const { data, error, hasData } = useFetchArray<Comment>(`${baseURL}/comments`);

  if (!data && !error) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>データは空です</p>;

  return (
    <ul className="space-y-2">
      {data?.map(({ id, body }) => (
        <li key={id} className="border-b pb-2">
          <Link
            href={`/comments/${id}`}
            className="block text-sm hover:text-blue-500"
            prefetch={false}
          >
            {body}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
