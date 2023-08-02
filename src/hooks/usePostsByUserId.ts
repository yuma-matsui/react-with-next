import Post from "@/type/post.type";

import useFetchArray from "./useFetchArray";

const usePostsByUserId = (userId: number) =>
  useFetchArray<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

export default usePostsByUserId;
