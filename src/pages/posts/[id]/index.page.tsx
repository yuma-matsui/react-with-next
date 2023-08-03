import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import Layout from "@/layouts/Layout";
import Comment from "@/type/comment.type";
import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

import PostDetail from "./PostDetail";

export const getServerSideProps: GetServerSideProps<{
  post: Post;
  comments: Comment[];
  url: {
    post: string;
    comments: string;
  };
}> = async (ctx) => {
  const { id } = ctx.query;
  const POST_API_URL = `${baseURL}/posts/${id}`;
  const response = await fetch(POST_API_URL);

  if (!response.ok) return { notFound: true };

  const post: Post = await response.json();

  const COMMENTS_API_URL = `${baseURL}/posts/${id}/comments`;
  const _response = await fetch(COMMENTS_API_URL);
  const comments: Comment[] = await _response.json();

  return {
    props: {
      post,
      comments,
      url: {
        post: POST_API_URL,
        comments: COMMENTS_API_URL,
      },
    },
  };
};

const PostPage = ({
  post,
  comments,
  url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter();

  return (
    <SWRConfig value={{ fallback: { [url.post]: post, [url.comments]: comments } }}>
      <Layout title={`Post ${query.id} Page`}>
        <PostDetail />
      </Layout>
    </SWRConfig>
  );
};

export default PostPage;
