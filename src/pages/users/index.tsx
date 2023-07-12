import { NextPage } from "next";
import React from "react";

import { Users } from "@/components/Users";
import Layout from "@/layouts/Layout";

const UsersPage: NextPage = () => {
  return (
    <Layout title="Users Page">
      <Users />
    </Layout>
  );
};

export default UsersPage;
