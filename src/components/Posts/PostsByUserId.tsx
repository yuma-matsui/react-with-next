import Link from "next/link";
import React, { FC } from "react";

import usePostsByUserId from "@/hooks/usePostsByUserId";

type Props = {
  userId: number;
};

const PostsByUserId: FC<Props> = ({ userId }) => {
  const { data, isLoading, error, hasData } = usePostsByUserId(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>No Posts!</p>;

  return (
    <>
      <h3>Posts</h3>
      <ul>
        {data?.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default PostsByUserId;
