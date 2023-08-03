import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import useFetchSingleData from "@/hooks/useFetchSingleData";
import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

const CommentDetail: FC = () => {
  const { query } = useRouter();
  const url = query.id ? `${baseURL}/comments/${query.id}` : null;
  const { data, error } = useFetchSingleData<Comment>(url);

  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <p>{data?.body}</p>
      <Link href={`/posts/${data?.postId}`}>Post Page</Link>
    </>
  );
};

export default CommentDetail;
