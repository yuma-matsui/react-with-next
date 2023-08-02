import useSWR from "swr";

import fetcher from "@/utils/fetcher";

const useFetchSingleData = <T>(url: string | null) => {
  const { data, error, isLoading } = useSWR<T>(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetchSingleData;
