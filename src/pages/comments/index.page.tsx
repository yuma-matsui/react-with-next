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
  comments: Comment[];
  url: string;
}> = async () => {
  const COMMENTS_API_URL = `${baseURL}/comments`;
  const response = await fetch(COMMENTS_API_URL);
  const comments: Comment[] = await response.json();

  return {
    props: {
      comments,
      url: COMMENTS_API_URL,
    },
    revalidate: 1,
  };
};

const CommentsPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
  comments,
  url,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Comment List</title>
      </Head>
      <SWRConfig value={{ fallback: { [url]: comments } }}>
        <CommentList />
      </SWRConfig>
    </>
  );
};

CommentsPage.getLayout = HeaderOnlyLayout;

export default CommentsPage;
