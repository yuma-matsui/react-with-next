import useSWR from "swr";

import User from "@/type/user.type";
import fetcher from "@/utils/fetcher";

const useUsers = () => {
  const { data, error, isLoading } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  return {
    users: data,
    error,
    isLoading,
    hasUsers: data && data.length > 0,
  };
};

export default useUsers;
