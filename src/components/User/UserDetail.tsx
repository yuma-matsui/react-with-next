import Link from "next/link";
import React, { FC } from "react";

import useFetchSingleData from "@/hooks/useFetchSingleData";
import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

import { PostListByUserId } from "../Post";

type Props = {
  id: number;
};

const UserDetail: FC<Props> = ({ id }) => {
  const { data, error } = useFetchSingleData<User>(`${baseURL}/users/${id}`);

  if (error) return <p>Something went wrong!!</p>;
  if (!data && !error) return <p>Loading...</p>;

  return (
    <>
      <Link href={`/users/${data?.id}`}>
        <h3>{data?.name}</h3>
      </Link>
      <p>{data?.email}</p>
      {data && <PostListByUserId userId={data?.id} />}
    </>
  );
};

export default UserDetail;
