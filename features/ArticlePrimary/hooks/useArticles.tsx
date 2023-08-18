import { apiClient } from "@/api";
import { TravelCategoryType } from "@/styles";
import { useQuery } from "@tanstack/react-query";

interface Response {
  articles: {
    authorId: string;
    content: string;
    createdAt: string;
    category: TravelCategoryType;
    id: string;
    image: string;
    text: string;
    title: string;
  }[];
}
const fetchArticles = async (params: {
  endpoint: string;
}): Promise<Response> => {
  const data = await apiClient(`${params.endpoint}`);
  return data;
};

export const useArticles = (params: { endpoint: string }) => {
  return useQuery(["primaryArticles"], () => fetchArticles(params));
};
