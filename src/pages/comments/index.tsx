import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { SWRConfig } from "swr";

import { Comments } from "@/components/Comments";
import Layout from "@/layouts/Layout";
import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

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
  };
};

const CommentsPage = ({ comments, url }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback: { [url]: comments } }}>
      <Layout title="Comments Page">
        <Comments />
      </Layout>
    </SWRConfig>
  );
};

export default CommentsPage;
