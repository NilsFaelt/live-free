import { TravelCategoryType } from "@/styles";

export interface ArticlePrimaryBaseType {
  title: string;
  text: string;
  content: string;
  category: TravelCategoryType;
  image: string;
  authorId: string;
}
