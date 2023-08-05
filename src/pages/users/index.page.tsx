import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { SWRConfig } from "swr";

import Layout from "@/layouts/Layout";
import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

import { NextPageWithLayout } from "../_app.page";
import UserList from "./UserList";

export const getServerSideProps: GetServerSideProps<{
  fallback: {
    [key: string]: User[];
  };
}> = async () => {
  const USER_API_URL = `${baseURL}/users`;
  const response = await fetch(USER_API_URL);
  const users: User[] = await response.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: users,
      },
    },
  };
};

const UsersPage: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  fallback,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Users List</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <UserList />
      </SWRConfig>
    </>
  );
};

UsersPage.getLayout = Layout;

export default UsersPage;
