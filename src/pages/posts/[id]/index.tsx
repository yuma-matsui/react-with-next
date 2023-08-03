import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { PostDetail } from "@/components/Post";
import Layout from "@/layouts/Layout";

const PostPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title={`Post ${query.id} Page`}>
      <PostDetail />
    </Layout>
  );
};

export default PostPage;
