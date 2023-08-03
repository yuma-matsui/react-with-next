import useSWRImmutable from "swr/immutable";

const useFetchArray = <T>(url: string) => {
  const { data, error, isLoading } = useSWRImmutable<T[], Error>(url);

  return {
    data,
    error,
    isLoading,
    hasData: data && data.length > 0,
  };
};

export default useFetchArray;
