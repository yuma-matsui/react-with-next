import useSWR from "swr";

import Post from "@/type/post.type";
import fetcher from "@/utils/fetcher";

const usePosts = () => {
  const { data, error, isLoading } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
  );

  return {
    posts: data ?? [],
    error,
    isLoading,
    hasPosts: data && data.length > 0,
  };
};

export default usePosts;
