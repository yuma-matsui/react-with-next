import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { SWRConfig } from "swr";

import { UserList } from "@/components/User";
import Layout from "@/layouts/Layout";
import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

export const getServerSideProps: GetServerSideProps<{
  users: User[];
  url: string;
}> = async () => {
  const USER_API_URL = `${baseURL}/users`;
  const response = await fetch(USER_API_URL);
  const users: User[] = await response.json();

  return {
    props: {
      users,
      url: USER_API_URL,
    },
  };
};

const UsersPage = ({ users, url }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <SWRConfig value={{ fallback: { [url]: users } }}>
      <Layout title="Users Page">
        <UserList />
      </Layout>
    </SWRConfig>
  );
};

export default UsersPage;
