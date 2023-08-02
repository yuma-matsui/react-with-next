import Comment from "@/type/comment.type";

import useFetchArray from "./useFetchArray";

const useCommentsByPostId = (postId: number) =>
  useFetchArray<Comment>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

export default useCommentsByPostId;
