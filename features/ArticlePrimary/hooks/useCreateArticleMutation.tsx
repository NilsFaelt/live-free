import { apiClient } from "@/api";
import { ArticlePrimaryBaseType } from "@/types";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();

const mutateArticle = async (data: ArticlePrimaryBaseType) => {
  const response = await apiClient("article-primary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const useCreateArticleMutation = (data: ArticlePrimaryBaseType) => {
  return useMutation(() => mutateArticle(data), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["articles"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
