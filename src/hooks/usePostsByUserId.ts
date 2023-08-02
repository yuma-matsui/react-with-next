import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

import useFetchArray from "./useFetchArray";

const usePostsByUserId = (userId: number) =>
  useFetchArray<Post>(`${baseURL}/posts?userId=${userId}`);

export default usePostsByUserId;
