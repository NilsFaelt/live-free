import { apiClient } from "@/api";
import { ArticlePrimaryBaseType } from "@/types";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();

const mutateArticle = async (
  data: ArticlePrimaryBaseType,
  token: string | null
) => {
  const response = await apiClient("article-primary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const useCreateArticleMutation = (
  data: ArticlePrimaryBaseType,
  token: string | null
) => {
  return useMutation(() => mutateArticle(data, token), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["articles"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
