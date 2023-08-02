import Link from "next/link";
import React, { FC } from "react";

import useUsers from "@/hooks/useUsers";

const Users: FC = () => {
  const { data, isLoading, error, hasData } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!hasData) return <p>データは空です</p>;

  return (
    <ul className="grid grid-cols-3 gap-4">
      {data?.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`} className="block p-3 shadow rounded hover:bg-gray-100">
            <h2 className="font-bold truncate">{user.name}</h2>
            <div className="text-sm">{user.email}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
