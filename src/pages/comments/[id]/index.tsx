import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import { CommentDetail } from "@/components/Comment";
import Layout from "@/layouts/Layout";
import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${baseURL}/comments?_limit=10`);
  const comments: Comment[] = await response.json();
  const paths = comments.map((comment) => ({
    params: { id: String(comment.id) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  comment: Comment[];
  url: string;
}> = async ({ params }) => {
  const COMMENT_API_URL = `${baseURL}/comments/${params?.id}`;
  const response = await fetch(COMMENT_API_URL);

  if (!response.ok) return { notFound: true, revalidate: 1 };

  const comment: Comment[] = await response.json();

  return {
    props: {
      comment,
      url: COMMENT_API_URL,
    },
    revalidate: 1,
  };
};

const CommentPage = ({ url, comment }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();

  return (
    <SWRConfig value={{ fallback: { [url]: comment } }}>
      <Layout title={`Comment ${query.id} Page`}>
        <CommentDetail />
      </Layout>
    </SWRConfig>
  );
};

export default CommentPage;
