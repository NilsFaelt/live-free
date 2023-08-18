import React, { FC } from "react";
import { Container } from "./DisplayArticle.style";

interface Props {
  id: string;
}

export const DisplayArticle: FC<Props> = ({ id }) => {
  return <Container>{id}</Container>;
};
