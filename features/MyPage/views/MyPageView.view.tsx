import React, { FC } from "react";
import { Container } from "./MyPageView.style";
import { ProfileArticle } from "@/components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DisplayArticles } from "@/features/ArticlePrimary/components";

export const MyPageView: FC = () => {
  const { user } = useUser();
  if (!user) return null;
  const { picture, name } = user;
  return (
    <Container>
      <ProfileArticle
        url=''
        title={name ? name : ""}
        underTitle={"My Mag"}
        imageSrc={
          picture
            ? picture
            : "https://images.unsplash.com/photo-1510442650500-93217e634e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=691&q=80"
        }
        text='Im nils and im a freelnace writer whom truly love to write and spread inspiration'
      />

      <DisplayArticles />
    </Container>
  );
};
