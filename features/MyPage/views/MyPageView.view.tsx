import React, { FC } from "react";
import { Container } from "./MyPageView.style";
import { DisplayArticles } from "@/features/ArticlePrimary/components";
import { DisplayUserMe } from "@/components/User";

interface DisplayUser {
  displayName: string;
  photoURL: string;
}

export const MyPageView: FC<{ id: string }> = ({ id }) => {
  return (
    <Container>
      <DisplayUserMe id={id} />
      <DisplayArticles userId={id} />
    </Container>
  );
};
