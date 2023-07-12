import useSWR from "swr";

import Comment from "@/type/comment.type";
import fetcher from "@/utils/fetcher";

const useComments = () => {
  const { data, error, isLoading } = useSWR<Comment[]>(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher,
  );

  return {
    comments: data ?? [],
    error,
    isLoading,
    hasComments: data && data.length > 0,
  };
};

export default useComments;
