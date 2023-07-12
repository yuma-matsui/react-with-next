import Link from "next/link";
import React, { FC } from "react";

import useUser from "@/hooks/useUser";

type Props = {
  id: number | undefined;
};

const User: FC<Props> = ({ id }) => {
  const { user, error, isLoading } = useUser(id);

  if (error) return <p>Something went wrong!!</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Link href={`/users/${user?.id}`}>
        <h3>{user?.name}</h3>
      </Link>
      <p>{user?.email}</p>
    </>
  );
};

export default User;
