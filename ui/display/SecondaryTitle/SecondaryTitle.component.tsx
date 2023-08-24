import React, { FC } from "react";
import { Container, Title, UnderTitle } from "./SecondaryTitle.style";

interface Props {
  title: string;
  underTitle?: string;
  backgroundColor?: "teal" | "none";
}

export const SecondaryTitle: FC<Props> = ({
  title,
  underTitle,
  backgroundColor = "none",
}) => {
  return (
    <Container $backgroundcolor={backgroundColor}>
      <Title>{title}</Title>
      <UnderTitle>{underTitle}</UnderTitle>
    </Container>
  );
};
