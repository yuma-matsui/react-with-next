import React, { FC, useCallback, useEffect, useReducer } from "react";

import postsReducer from "@/reducer/posts";

const Posts: FC = () => {
  const [postsState, dispatch] = useReducer(postsReducer, {
    posts: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      dispatch({ type: "posts", payload: { value: json } });
    } catch (error) {
      if (error instanceof Error) dispatch({ type: "error", payload: { value: error } });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  if (postsState.loading) return <p>Loading....</p>;
  if (postsState.error) return <p>Something went wrong!</p>;
  if (postsState.posts.length <= 0) return <p>データは空です</p>;

  return (
    <ol>
      {postsState.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
};

export default Posts;
