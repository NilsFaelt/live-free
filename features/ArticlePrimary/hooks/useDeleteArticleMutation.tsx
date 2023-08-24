import { apiClient } from "@/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();

const mutateArticle = async (id: string) => {
  const response = await apiClient(`article-primary/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const useDeleteArticleMutation = (id: string) => {
  return useMutation(() => mutateArticle(id), {
    onSuccess: (data) => {
      console.log("Sucessfully deleted");
      queryClient.invalidateQueries(["articles"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
