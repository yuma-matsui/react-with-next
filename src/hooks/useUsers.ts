import User from "@/type/user.type";

import useFetchArray from "./useFetchArray";

const useUsers = () => useFetchArray<User>("https://jsonplaceholder.typicode.com/users");

export default useUsers;
