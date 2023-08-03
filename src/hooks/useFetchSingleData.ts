import useSWRImmutable from "swr/immutable";

const useFetchSingleData = <T>(url: string | null) => {
  const { data, error, isLoading } = useSWRImmutable<T>(url);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetchSingleData;
