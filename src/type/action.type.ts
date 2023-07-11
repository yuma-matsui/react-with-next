import PostsState from "./postsState.type";

type Action =
  | {
      type: "posts";
      payload: {
        value: PostsState["posts"];
      };
    }
  | {
      type: "error";
      payload: {
        value: PostsState["error"];
      };
    };

export default Action;
