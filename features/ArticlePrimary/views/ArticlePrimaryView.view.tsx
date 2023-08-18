import React, { FC } from "react";
import { Container } from "./ArticlePrimary.style";
import { DisplayArticle, DisplayArticles } from "../components";

interface Props {
  id?: string;
  marginTop?: "0rem" | "10rem" | "15rem";
}

export const ArticlePrimaryView: FC<Props> = ({ id, marginTop = "0rem" }) => {
  return (
    <Container $margintop={marginTop}>
      {id ? <DisplayArticle id={id} /> : <DisplayArticles />}
    </Container>
  );
};
