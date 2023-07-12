import { NextPage } from "next";
import React from "react";

import { Comments } from "@/components/Comments";
import Layout from "@/layouts/Layout";

const CommentsPage: NextPage = () => {
  return (
    <Layout title="Comments Page">
      <Comments />
    </Layout>
  );
};

export default CommentsPage;
