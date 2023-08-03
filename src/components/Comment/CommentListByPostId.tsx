import Link from "next/link";
import React, { FC } from "react";

import useFetchArray from "@/hooks/useFetchArray";
import Comment from "@/type/comment.type";
import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

type Props = {
  postId: Post["id"];
};

const CommentListByPostId: FC<Props> = ({ postId }) => {
  const { data, error, hasData } = useFetchArray<Comment>(`${baseURL}/posts/${postId}/comments`);

  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>No Comments!</p>;

  return (
    <ul className="space-y-2">
      {data?.map((comment) => (
        <li className="border-b pb-2" key={comment.id}>
          <Link href={`/comments/${comment.id}`} className="block text-sm hover:text-blue-500">
            {comment.body}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CommentListByPostId;
