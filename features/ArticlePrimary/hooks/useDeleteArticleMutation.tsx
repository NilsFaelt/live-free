import { apiClient } from "@/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();

const mutateArticle = async (id: string, token: string | null) => {
  const response = await apiClient(`article-primary/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteArticleMutation = (id: string, token: string | null) => {
  return useMutation(() => mutateArticle(id, token), {
    onSuccess: (data) => {
      console.log("Sucessfully deleted");
      queryClient.invalidateQueries(["articles"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
