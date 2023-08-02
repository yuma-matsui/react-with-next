import Link from "next/link";
import React, { FC } from "react";

import useCommentsByPostId from "@/hooks/useCommentsByPostId";
import Post from "@/type/post.type";

type Props = {
  postId: Post["id"];
};

const CommentsByPostId: FC<Props> = ({ postId }) => {
  const { data, isLoading, error, hasData } = useCommentsByPostId(postId);

  if (isLoading) return <p>Loading...</p>;
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

export default CommentsByPostId;
