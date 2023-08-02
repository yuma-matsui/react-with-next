import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

import useFetchArray from "./useFetchArray";

const useUsers = () => useFetchArray<User>(`${baseURL}/users`);

export default useUsers;
