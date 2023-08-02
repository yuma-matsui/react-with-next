import { useRouter } from "next/router";

import Comment from "@/type/comment.type";

import baseURL from "../utils/baseURL";
import useFetchSingleData from "./useFetchSingleData";

const useComment = () => {
  const { query } = useRouter();
  const url = query.id ? `${baseURL}/comments/${query.id}` : null;

  return useFetchSingleData<Comment>(url);
};

export default useComment;
