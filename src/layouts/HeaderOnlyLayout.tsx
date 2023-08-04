import React, { ReactNode } from "react";

import Header from "@/layouts/Header";

export default function HeaderOnlyLayout(children: ReactNode) {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto max-w-2xl items-center px-2 ">{children}</div>
    </>
  );
}
