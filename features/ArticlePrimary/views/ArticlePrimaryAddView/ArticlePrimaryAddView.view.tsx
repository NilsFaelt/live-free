import React, { FC } from "react";
import { Container } from "./ArticlePrimaryAddView.style";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { AddArticle } from "../../components";
import { ArticlePrimary } from "@/components";

interface Props {
  id?: string;
  marginTop?: "0rem" | "10rem" | "15rem";
}

export const ArticlePrimaryAddView: FC<Props> = ({
  id,
  marginTop = "0rem",
}) => {
  return (
    <Container $margintop={marginTop}>
      <SecondaryTitle title='Add Article' underTitle='create your story' />
      <AddArticle />
    </Container>
  );
};
