import React, { FC, ReactNode } from "react";
import { Container } from "./BigImage.style";

interface Props {
  imageSrc: string;
  children?: ReactNode;
}

export const BigImage: FC<Props> = ({ imageSrc, children }) => {
  return <Container $imagesrc={imageSrc}>{children}</Container>;
};
