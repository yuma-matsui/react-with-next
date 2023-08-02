import Comment from "@/type/comment.type";

import useFetchArray from "./useFetchArray";

const useComments = () => useFetchArray<Comment>("https://jsonplaceholder.typicode.com/comments");

export default useComments;
