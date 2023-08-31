"use client";
import { ArticlePrimaryView } from "@/features";
import { MainLayout } from "@/layout";

export default function ArticlePrimary({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <ArticlePrimaryView marginTop='10rem' id={params.id} />
    </MainLayout>
  );
}
