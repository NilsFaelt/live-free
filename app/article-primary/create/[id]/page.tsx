"use client";
import { ArticlePrimaryAddView } from "@/features";
import { MainLayout } from "@/layout";

export default function CreateArticle({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <ArticlePrimaryAddView marginTop='10rem' userId={params.id} />
    </MainLayout>
  );
}
