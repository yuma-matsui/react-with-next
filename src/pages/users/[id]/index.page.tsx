import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import Layout from "@/layouts/Layout";
import { NextPageWithLayout } from "@/pages/_app.page";
import Post from "@/type/post.type";
import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

import UserDetail from "./UserDetail";

export const getServerSideProps: GetServerSideProps<{
  user: User;
  postsData: Post[];
  url: {
    user: string;
    posts: string;
  };
}> = async (ctx) => {
  const { id } = ctx.query;
  const USER_API_URL = `${baseURL}/users/${id}`;
  const response = await fetch(USER_API_URL);
  const user: User = await response.json();

  const POSTS_API_URL = `${baseURL}/users/${user.id}/posts`;
  const posts = await fetch(POSTS_API_URL);
  const postsData: Post[] = await posts.json();

  return {
    props: {
      user,
      postsData,
      url: {
        user: USER_API_URL,
        posts: POSTS_API_URL,
      },
    },
  };
};

const UserPage: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  user,
  postsData,
  url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter();
  const id = Number.isNaN(Number(query.id)) ? undefined : Number(query.id);

  return (
    <>
      <Head>
        <title>{`User No.${id} Page`}</title>
      </Head>
      <SWRConfig value={{ fallback: { [url.user]: user, [url.posts]: postsData } }}>
        {id && <UserDetail id={id} />}
      </SWRConfig>
    </>
  );
};

UserPage.getLayout = Layout;

export default UserPage;
