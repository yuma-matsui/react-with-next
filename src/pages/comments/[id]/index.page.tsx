import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import HeaderOnlyLayout from "@/layouts/HeaderOnlyLayout";
import { NextPageWithLayout } from "@/pages/_app.page";
import Comment from "@/type/comment.type";
import baseURL from "@/utils/baseURL";

import CommentDetail from "./CommentDetail";

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
  fallback: {
    [key: string]: Comment[];
  };
}> = async ({ params }) => {
  const COMMENT_API_URL = `${baseURL}/comments/${params?.id}`;
  const response = await fetch(COMMENT_API_URL);

  if (!response.ok) return { notFound: true, revalidate: 1 };

  const comment: Comment[] = await response.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: comment,
      },
    },
    revalidate: 1,
  };
};

const CommentPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>{`Comment No.${query.id} Page`}</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <CommentDetail />
      </SWRConfig>
    </>
  );
};

CommentPage.getLayout = HeaderOnlyLayout;

export default CommentPage;
