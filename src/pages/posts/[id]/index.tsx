import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { Post } from "@/components/Posts";
import Layout from "@/layouts/Layout";

const PostPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title={`Post ${query.id} Page`}>
      <Post />
    </Layout>
  );
};

export default PostPage;
