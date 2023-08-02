import useSWR from "swr";

const useFetchSingleData = <T>(url: string | null) => {
  const { data, error, isLoading } = useSWR<T>(url);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetchSingleData;
