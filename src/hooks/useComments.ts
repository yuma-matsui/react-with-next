import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

import useFetchArray from "./useFetchArray";

const useComments = () => useFetchArray<Comment>(`${baseURL}/comments`);

export default useComments;
