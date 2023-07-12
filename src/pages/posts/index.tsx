import { NextPage } from "next";
import React from "react";

import Posts from "@/components/Posts";
import Layout from "@/layouts/Layout";

const PostsPage: NextPage = () => {
  return (
    <Layout title="Posts Page">
      <Posts />
    </Layout>
  );
};

export default PostsPage;
