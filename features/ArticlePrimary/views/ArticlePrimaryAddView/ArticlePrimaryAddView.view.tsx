import React, { FC } from "react";
import { Container } from "./ArticlePrimaryAddView.style";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { AddArticle } from "../../components";

interface Props {
  userId: string;
  marginTop?: "0rem" | "10rem" | "15rem";
}

export const ArticlePrimaryAddView: FC<Props> = ({
  userId,
  marginTop = "0rem",
}) => {
  return (
    <Container $margintop={marginTop}>
      <SecondaryTitle
        backgroundColor='teal'
        title='Add Article'
        underTitle='create your story'
      />
      <AddArticle userId={userId} />
    </Container>
  );
};
