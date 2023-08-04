import React, { ReactNode } from "react";

import Header from "@/layouts/Header";

import Footer from "./Footer";

export default function Layout(children: ReactNode) {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto max-w-2xl items-center px-2 ">{children}</div>
      <Footer />
    </>
  );
}
