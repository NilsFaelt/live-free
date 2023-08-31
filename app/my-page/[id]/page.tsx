"use client";
import { MyPageView } from "@/features/MyPage";
import { MainLayout } from "@/layout";

export default function MyPage({ params }: { params: { id: string } }) {
  if (!params.id) return null;
  return (
    <MainLayout>
      <MyPageView id={params.id} />
    </MainLayout>
  );
}
