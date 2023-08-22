import { apiClient } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { ArticlePrimaryType } from "..";

const fetchArticles = async (params: {
  endpoint: string;
  id: string;
}): Promise<ArticlePrimaryType> => {
  const data = await apiClient(`${params.endpoint}/${params.id}`);
  return data;
};

export const useArticle = (params: { endpoint: string; id: string }) => {
  return useQuery(["primaryArticles", params.id], () => fetchArticles(params), {
    retry: 3,
  });
};
