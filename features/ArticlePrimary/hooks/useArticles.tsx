import { apiClient } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { ArticlePrimaryType } from "..";

interface Articles {
  articles: ArticlePrimaryType[];
}

const headers = {
  Authorization: `Bearer ${"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtb2c3aXR1aHJvZTZvcHE2ZC51cy5hdXRoMC5jb20vIn0..Cj2vh_pBS-cQNBI8.mUId1tDdd-ehtvcVFt4hZPF92QInMwX1uJy5AaFoYeWgL6SXJLOYU6S-cOpNHN6pjfDPK99S5zL5b9PQEC5laWiuqL0-J3Jtc5HwWkNQ4UZfLuT5ewM7ZlOc8Vbq1upReDSrHARCYxglVKnVNPTC7C5EXvNt4RaZx80Qa7vt5Yeo-ezQ-82R-kTZX-5qD5Nem7iXGDtpMh4ohPONKe6MA-aI4UHaApF8f2YL8lvPZKIZYWpahQzChyfhOgTVOuPQu-GmUevnzwjNUc64PxM3gQJwkgfozNELZ_eFwwgXZhcp37pNfLMTR5Pznse9pF2zuomfOFA6BMs4ELiZMK9_E_jo.eJ_a2axl3V4tCZAmIOlR-Q"}`,
};

const fetchArticles = async (params: {
  endpoint: string;
}): Promise<Articles> => {
  const data = await apiClient(`${params.endpoint}`, { headers });
  return data;
};

export const useArticles = (params: { endpoint: string }) => {
  return useQuery(["primaryArticles"], () => fetchArticles(params), {
    retry: 3,
  });
};
