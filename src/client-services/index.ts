import useSWR from "swr";
import axios from "axios";

const baseURL = "https://fakestoreapi.com";

export const api = axios.create({
  baseURL,
});

type Method = "get" | "post" | "put" | "patch" | "delete";
const fetcher = (method: Method) => {
  const fetcherFun = async (url: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await api[method](url);
    return data;
  };
  return fetcherFun;
};

export const useProducts = <t>() => {
  const { data, error, isLoading } = useSWR<t>(`/products`, fetcher("get"), {
    refreshInterval: 0,
  });

  console.log(baseURL);

  return {
    data,
    isLoading,
    isError: error,
  };
};
