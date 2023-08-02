import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

import { User } from "@/components/Users";
import Layout from "@/layouts/Layout";
import UserType from "@/type/user.type";

export const getServerSideProps: GetServerSideProps<{ user: UserType; url: string }> = async (
  ctx,
) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(API_URL);
  const user = await response.json();

  return {
    props: {
      url: API_URL,
      user,
    },
  };
};

const UserPage = ({ user, url }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter();
  const id = Number.isNaN(Number(query.id)) ? undefined : Number(query.id);

  return (
    <SWRConfig value={{ fallback: { [url]: user } }}>
      <Layout title={`User ${id} Page`}>{id && <User id={id} />}</Layout>
    </SWRConfig>
  );
};

export default UserPage;
