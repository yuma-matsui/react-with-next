import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import { SWRConfig } from "swr";

import HeaderOnlyLayout from "@/layouts/HeaderOnlyLayout";
import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

import { NextPageWithLayout } from "../_app.page";
import CommentList from "./CommentList";

export const getStaticProps: GetStaticProps<{
  fallback: {
    [key: string]: Comment[];
  };
}> = async () => {
  const COMMENTS_API_URL = `${baseURL}/comments`;
  const response = await fetch(COMMENTS_API_URL);
  const comments: Comment[] = await response.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: comments,
      },
    },
    revalidate: 1,
  };
};

const CommentsPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Comment List</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <CommentList />
      </SWRConfig>
    </>
  );
};

CommentsPage.getLayout = HeaderOnlyLayout;

export default CommentsPage;
