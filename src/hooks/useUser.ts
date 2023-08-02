import User from "@/type/user.type";

import useFetchSingleData from "./useFetchSingleData";

const useUser = (id: number) =>
  useFetchSingleData<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

export default useUser;
