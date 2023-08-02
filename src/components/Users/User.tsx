import Link from "next/link";
import React, { FC } from "react";

import useUser from "@/hooks/useUser";

import { PostsByUserId } from "../Posts";

type Props = {
  id: number;
};

const User: FC<Props> = ({ id }) => {
  const { data, error, isLoading } = useUser(id);

  if (error) return <p>Something went wrong!!</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Link href={`/users/${data?.id}`}>
        <h3>{data?.name}</h3>
      </Link>
      <p>{data?.email}</p>
      {data && <PostsByUserId userId={data?.id} />}
    </>
  );
};

export default User;
