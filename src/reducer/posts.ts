import { Reducer } from "react";

import Action from "@/type/action.type";
import PostsState from "@/type/postsState.type";

const postsReducer: Reducer<PostsState, Action> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "posts":
      return { ...state, posts: payload.value, loading: false };
    case "error":
      return { ...state, error: payload.value, loading: false };
    default:
      throw new Error("No such action type.");
  }
};

export default postsReducer;
