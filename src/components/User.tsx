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
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
    </>
  );
};

export default User;
