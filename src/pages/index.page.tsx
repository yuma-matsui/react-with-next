import React, { ReactElement } from "react";

import HeaderOnlyLayout from "@/layouts/HeaderOnlyLayout";

import { NextPageWithLayout } from "./_app.page";

const Home: NextPageWithLayout = () => {
  return <h1>Top Page</h1>;
};

Home.getLayout = (page: ReactElement) => {
  return <HeaderOnlyLayout title="Top Page">{page}</HeaderOnlyLayout>;
};

export default Home;
