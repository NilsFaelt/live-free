"use client";
import { ArticlePrimaryAddView } from "@/features";
import { MainLayout } from "@/layout";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <ArticlePrimaryAddView />
    </MainLayout>
  );
}
