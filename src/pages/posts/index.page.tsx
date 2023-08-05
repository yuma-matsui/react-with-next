import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import { SWRConfig } from "swr";

import HeaderOnlyLayout from "@/layouts/HeaderOnlyLayout";
import Post from "@/type/post.type";
import baseURL from "@/utils/baseURL";

import { NextPageWithLayout } from "../_app.page";
import PostList from "./PostList";

export const getStaticProps: GetStaticProps<{
  fallback: {
    [key: string]: Post[];
  };
}> = async () => {
  const POSTS_API_URL = `${baseURL}/posts`;
  const response = await fetch(POSTS_API_URL);
  const posts = await response.json();

  return {
    props: {
      fallback: {
        [POSTS_API_URL]: posts,
      },
    },
  };
};

const PostsPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Posts List</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <PostList />
      </SWRConfig>
    </>
  );
};

PostsPage.getLayout = HeaderOnlyLayout;

export default PostsPage;
