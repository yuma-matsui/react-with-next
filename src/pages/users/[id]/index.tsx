import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { User } from "@/components/Users";
import Layout from "@/layouts/Layout";

const UserPage: NextPage = () => {
  const { query } = useRouter();
  const id = Number.isNaN(Number(query.id)) ? undefined : Number(query.id);

  return <Layout title={`User ${id} Page`}>{id && <User id={id} />}</Layout>;
};

export default UserPage;
