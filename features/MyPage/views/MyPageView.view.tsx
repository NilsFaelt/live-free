import React, { FC, useContext } from "react";
import { Container } from "./MyPageView.style";
import { DisplayUser, useUser } from "@/components";
import { DisplayArticles } from "@/features/ArticlePrimary/components";
import { LoggedinUserContext } from "@/context/LoggedinUserContext";
import { DisplayUserMe } from "@/components/User";

interface DisplayUser {
  displayName: string;
  photoURL: string;
}

export const MyPageView: FC<{ id: string }> = ({ id }) => {
  const { loggedInUserId } = useContext(LoggedinUserContext);

  return (
    <Container>
      <DisplayUserMe id={id} />
      <DisplayArticles />
    </Container>
  );
};
