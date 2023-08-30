import { apiClient } from "@/api";
import { UserType } from "@/types";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();

const mutateUser = async (data: UserType, token: string | null) => {
  const response = await fetch(`${apiClient}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return response;
};

export const useCreateUserMutation = (data: UserType, token: string | null) => {
  return useMutation(() => mutateUser(data, token), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"], data.uid);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
