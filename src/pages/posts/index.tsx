import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { SWRConfig } from "swr";

import { PostList } from "@/components/Post";
import Layout from "@/layouts/Layout";
import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

export const getStaticProps: GetStaticProps<{
  url: string;
  posts: Post[];
}> = async () => {
  const POSTS_API_URL = `${baseURL}/posts`;
  const response = await fetch(POSTS_API_URL);
  const posts = await response.json();

  return {
    props: {
      url: POSTS_API_URL,
      posts,
    },
  };
};

const PostsPage = ({ url, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback: { [url]: posts } }}>
      <Layout title="Posts Page">
        <PostList />
      </Layout>
    </SWRConfig>
  );
};

export default PostsPage;
