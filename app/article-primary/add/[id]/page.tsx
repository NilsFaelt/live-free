"use client";
import { ArticlePrimaryAddView } from "@/features";
import { NoMenuLayout } from "@/layout";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <NoMenuLayout>
      <ArticlePrimaryAddView marginTop='10rem' />
    </NoMenuLayout>
  );
}
