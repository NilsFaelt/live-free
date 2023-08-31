import { apiClient } from "@/api";
import { UserType } from "@/types";
import { useQuery } from "@tanstack/react-query";

// This is just to see how you can setup
// your custom hook with tanstack.
// This is for fetching data

const fetchUser = async (args: {
  endpoint: string;
  id: string | null;
}): Promise<UserType> => {
  console.log(args);
  const data = await apiClient(`${args.endpoint}/${args.id}`, {
    method: "GET",
  });
  return data;
};

export const useUser = (args: { endpoint: string; id: string | null }) => {
  return useQuery(["user"], () => fetchUser(args));
};
