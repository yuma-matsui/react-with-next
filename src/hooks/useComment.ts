import { useRouter } from "next/router";

import Comment from "@/type/comment.type";

import useFetchSingleData from "./useFetchSingleData";

const useComment = () => {
  const { query } = useRouter();
  const url = query.id ? `https://jsonplaceholder.typicode.com/comments/${query.id}` : null;

  return useFetchSingleData<Comment>(url);
};

export default useComment;
