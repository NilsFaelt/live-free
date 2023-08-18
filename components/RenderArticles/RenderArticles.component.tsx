import React, { FC, ReactNode } from "react";
import { Container } from "./RenderArticles.style";

interface Props {
  children: ReactNode;
}

export const RenderArticles: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
