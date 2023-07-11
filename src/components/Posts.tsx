import React from "react";
import { FC, useCallback, useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setPosts(json);
    } catch (e) {
      if (e instanceof Error) setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong!</p>;
  if (posts.length <= 0) return <p>データは空です</p>;

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
};

export default Posts;
