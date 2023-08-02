import useSWR from "swr";

const useFetchArray = <T>(url: string) => {
  const { data, error, isLoading } = useSWR<T[], Error>(url);

  return {
    data,
    error,
    isLoading,
    hasData: data && data.length > 0,
  };
};

export default useFetchArray;
