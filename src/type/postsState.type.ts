import Post from "./post.type";

type PostsState = {
  posts: Post[];
  loading: boolean;
  error: Error | null;
};

export default PostsState;
