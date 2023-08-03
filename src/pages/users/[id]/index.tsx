import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import { UserDetail } from "@/components/User";
import Layout from "@/layouts/Layout";
import Post from "@/type/post.type";
import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

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

const UserPage = ({
  user,
  postsData,
  url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter();
  const id = Number.isNaN(Number(query.id)) ? undefined : Number(query.id);

  return (
    <SWRConfig value={{ fallback: { [url.user]: user, [url.posts]: postsData } }}>
      <Layout title={`User ${id} Page`}>{id && <UserDetail id={id} />}</Layout>
    </SWRConfig>
  );
};

export default UserPage;
