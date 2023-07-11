import { useRouter } from "next/router";
import useSWR from "swr";

import Post from "@/type/post.type";
import fetcher from "@/utils/fetcher";

const usePost = () => {
  const { query } = useRouter();
  const url = query.id ? `https://jsonplaceholder.typicode.com/posts/${query.id}` : null;
  const { data, error, isLoading } = useSWR<Post>(url, fetcher);

  return {
    post: data,
    error,
    isLoading,
  };
};

export default usePost;
