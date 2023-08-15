import React, { FC } from "react";
import { Container, Title, UnderTitle } from "./SecondaryTitle.style";

interface Props {
  title: string;
  underTitle?: string;
}

export const SecondaryTitle: FC<Props> = ({ title, underTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <UnderTitle>{underTitle}</UnderTitle>
    </Container>
  );
};
