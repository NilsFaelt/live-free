import React, { FC } from "react";
import { Container } from "./ArticlePrimaryAddView.style";

interface Props {
  id?: string;
  marginTop?: "0rem" | "10rem" | "15rem";
}

export const ArticlePrimaryAddView: FC<Props> = ({
  id,
  marginTop = "0rem",
}) => {
  return <Container $margintop={marginTop}></Container>;
};
