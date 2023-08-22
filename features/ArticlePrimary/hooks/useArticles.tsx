import { apiClient } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { ArticlePrimaryType } from "..";

const fetchArticles = async (params: {
  endpoint: string;
}): Promise<ArticlePrimaryType> => {
  const data = await apiClient(`${params.endpoint}`);
  return data;
};

export const useArticles = (params: { endpoint: string }) => {
  return useQuery(["primaryArticles"], () => fetchArticles(params), {
    retry: 3,
  });
};
