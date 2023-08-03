import Link from "next/link";
import React, { FC } from "react";

import useFetchArray from "@/hooks/useFetchArray";
import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

type Props = {
  userId: number;
};

const PostListByUserId: FC<Props> = ({ userId }) => {
  const { data, error, hasData } = useFetchArray<Post>(`${baseURL}/users/${userId}/posts`);

  if (!hasData && !error) return <p>Loading...</p>;
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

export default PostListByUserId;
