import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import useUser from "@/hooks/useUser";
import Layout from "@/layouts/Layout";

const User: NextPage = () => {
  const { query } = useRouter();
  const id = Number.isNaN(Number(query.id)) ? undefined : Number(query.id);
  const { user, error, isLoading } = useUser(id);

  if (error) return <p>Something went wrong!</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout title={`User ${user?.id} Page`}>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </Layout>
  );
};

export default User;
