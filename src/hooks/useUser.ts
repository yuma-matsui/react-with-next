import User from "@/type/user.type";
import baseURL from "@/utils/baseURL";

import useFetchSingleData from "./useFetchSingleData";

const useUser = (id: number) => useFetchSingleData<User>(`${baseURL}/users/${id}`);

export default useUser;
