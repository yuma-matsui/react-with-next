import { useRouter } from "next/router";

import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

import useFetchSingleData from "./useFetchSingleData";

const usePost = () => {
  const { query } = useRouter();
  const url = query.id ? `${baseURL}/posts/${query.id}` : null;

  return useFetchSingleData<Post>(url);
};

export default usePost;
