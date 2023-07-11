import Head from "next/head";
import React from "react";

import Posts from "@/components/Posts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Posts />
    </>
  );
}
