import { NextPage } from "next";
import React from "react";

import { PostList } from "@/components/Post";
import Layout from "@/layouts/Layout";

const PostsPage: NextPage = () => {
  return (
    <Layout title="Posts Page">
      <PostList />
    </Layout>
  );
};

export default PostsPage;
