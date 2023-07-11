import useSWR from "swr";

import Post from "@/type/post.type";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);

  if (!response.ok) throw new Error("something went wrong!");

  const json = await response.json();
  return json;
};

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
