import { apiClient } from "@/api";
import { UserType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async (args: { endpoint: string }): Promise<UserType[]> => {
  console.log(args);
  const data = await apiClient(`${args.endpoint}`, {
    method: "GET",
  });
  return data;
};

export const useUsers = (args: { endpoint: string }) => {
  return useQuery(["user"], () => fetchUsers(args));
};
