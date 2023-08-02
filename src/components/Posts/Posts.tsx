import Link from "next/link";
import React, { FC } from "react";

import usePosts from "@/hooks/usePosts";

const Posts: FC = () => {
  const { data, error, isLoading, hasData } = usePosts();
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>データは空です</p>;

  return (
    <ul className="space-y-4">
      {data?.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="group">
            <h1 className="font-bold group-hover:text-blue-500">{post.title}</h1>
            <p className="text-sm text-gray-500 group-hover:text-blue-400">{post.body}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
