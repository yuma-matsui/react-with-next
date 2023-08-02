import { useRouter } from "next/router";

import Post from "@/type/post.type";

import useFetchSingleData from "./useFetchSingleData";

const usePost = () => {
  const { query } = useRouter();
  const url = query.id ? `https://jsonplaceholder.typicode.com/posts/${query.id}` : null;

  return useFetchSingleData<Post>(url);
};

export default usePost;
