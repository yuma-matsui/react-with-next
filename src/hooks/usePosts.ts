import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

import useFetchArray from "./useFetchArray";

const usePosts = () => useFetchArray<Post>(`${baseURL}/posts`);

export default usePosts;
