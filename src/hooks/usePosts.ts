import Post from "@/type/post.type";

import useFetchArray from "./useFetchArray";

const usePosts = () => useFetchArray<Post>("https://jsonplaceholder.typicode.com/posts");

export default usePosts;
