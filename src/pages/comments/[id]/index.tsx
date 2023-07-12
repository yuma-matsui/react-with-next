import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { Comment } from "@/components/Comments";
import Layout from "@/layouts/Layout";

const CommentPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title={`Comment ${query.id} Page`}>
      <Comment />
    </Layout>
  );
};

export default CommentPage;
