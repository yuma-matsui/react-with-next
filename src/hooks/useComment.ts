import { useRouter } from "next/router";
import useSWR from "swr";

import Comment from "@/type/comment.type";
import fetcher from "@/utils/fetcher";

const useComment = () => {
  const { query } = useRouter();
  const url = query.id ? `https://jsonplaceholder.typicode.com/comments/${query.id}` : null;
  const { data, error, isLoading } = useSWR<Comment>(url, fetcher);

  return {
    comment: data,
    error,
    isLoading,
  };
};

export default useComment;
