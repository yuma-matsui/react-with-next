import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import { Comment } from "@/components/Comments";
import Layout from "@/layouts/Layout";
import CommentType from "@/type/comment.type";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: CommentType[] = await response.json();
  const paths = comments.map((comment) => ({
    params: { id: String(comment.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  comment: Comment[];
  url: string;
}> = async ({ params }) => {
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${params?.id}`;
  const response = await fetch(COMMENT_API_URL);
  const comment: Comment[] = await response.json();

  return {
    props: {
      comment,
      url: COMMENT_API_URL,
    },
  };
};

const CommentPage = ({ url, comment }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();

  return (
    <SWRConfig value={{ fallback: { [url]: comment } }}>
      <Layout title={`Comment ${query.id} Page`}>
        <Comment />
      </Layout>
    </SWRConfig>
  );
};

export default CommentPage;
