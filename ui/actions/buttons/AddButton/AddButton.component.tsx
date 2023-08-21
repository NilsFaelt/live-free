import React, { FC } from "react";
import {
  ButtonWrapper,
  Container,
  StyledLink,
  Text,
  Title,
} from "./AddButton.style";
import Link from "next/link";

interface Props {
  link: string;
  title?: string;
}

export const AddButton: FC<Props> = ({ title, link = "/" }) => {
  return (
    <ButtonWrapper>
      {title && <Title>{title}</Title>}
      <StyledLink href={link}>
        <Container>
          <Text>+</Text>
        </Container>
      </StyledLink>
    </ButtonWrapper>
  );
};
