import useSWR from "swr";

import User from "@/type/user.type";
import fetcher from "@/utils/fetcher";

const useUser = (id: number | undefined) => {
  const url = id ? `https://jsonplaceholder.typicode.com/users/${id}` : null;
  const { data, error, isLoading } = useSWR<User>(url, fetcher);

  return {
    user: data,
    error,
    isLoading,
  };
};

export default useUser;
