const fetcher = async (...args: Parameters<typeof fetch>) => {
  const data = await fetch(...args);

  if (!data.ok) throw new Error("Something went wrong!");

  const json = await data.json();
  return json;
};

export default fetcher;
