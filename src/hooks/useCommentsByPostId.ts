import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

import useFetchArray from "./useFetchArray";

const useCommentsByPostId = (postId: number) =>
  useFetchArray<Comment>(`${baseURL}/comments?postId=${postId}`);

export default useCommentsByPostId;
