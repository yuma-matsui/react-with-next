import { useRouter } from "next/router";
import React from "react";

import useFetchSingleData from "@/hooks/useFetchSingleData";
import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

import CommentListByPostId from "./CommentListByPostId";

const PostDetail = () => {
  const { query } = useRouter();
  const url = query.id ? `${baseURL}/posts/${query.id}` : null;
  const { data, error } = useFetchSingleData<Post>(url);

  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <h2 className="text-xl font-bold">{data?.title}</h2>
      <p className="text-gray-900">{data?.body}</p>
      <h2 className="text-lg font-bold my-4">コメント一覧</h2>
      {data && <CommentListByPostId postId={data.id} />}
    </>
  );
};

export default PostDetail;
