import { TravelCategoryType } from "@/styles";

export interface ArticlePrimaryType {
  authorId: string;
  content: string;
  createdAt: string;
  category: TravelCategoryType;
  id: string;
  image: string;
  text: string;
  title: string;
  author: {
    email: string;
    id: string;
    userName: string;
  };
}
