import { useRouter } from "next/router";

import User from "@/type/user.type";

import useFetchSingleData from "./useFetchSingleData";

const useUser = () => {
  const { query } = useRouter();
  const url = query.id ? `https://jsonplaceholder.typicode.com/users/${query.id}` : null;

  return useFetchSingleData<User>(url);
};

export default useUser;
