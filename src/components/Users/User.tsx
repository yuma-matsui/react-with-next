import Link from "next/link";
import React, { FC } from "react";

import useUser from "@/hooks/useUser";

const User: FC = () => {
  const { data, error, isLoading } = useUser();

  if (error) return <p>Something went wrong!!</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Link href={`/users/${data?.id}`}>
        <h3>{data?.name}</h3>
      </Link>
      <p>{data?.email}</p>
    </>
  );
};

export default User;
