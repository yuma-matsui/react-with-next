import Link from "next/link";
import React, { FC } from "react";

import useUsers from "@/hooks/useUsers";

const Users: FC = () => {
  const { data, isLoading, error, hasData } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>データは空です</p>;

  return (
    <>
      <h1>Users</h1>
      <ol>
        {data?.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Users;