import Link from "next/link";
import React, { FC } from "react";

import usePosts from "@/hooks/usePosts";

const Posts: FC = () => {
  const { posts, error, isLoading, hasPosts } = usePosts();
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasPosts) return <p>データは空です</p>;

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default Posts;
