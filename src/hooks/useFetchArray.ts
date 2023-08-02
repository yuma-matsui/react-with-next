import useSWR from "swr";

import fetcher from "@/utils/fetcher";

const useFetchArray = <T>(url: string) => {
  const { data, error, isLoading } = useSWR<T[], Error>(url, fetcher);

  return {
    data,
    error,
    isLoading,
    hasData: data && data.length > 0,
  };
};

export default useFetchArray;
