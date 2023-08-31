import React, { FC } from "react";
import {
  ButtonWrapper,
  Container,
  StyledLink,
  Text,
  Title,
} from "./AddButton.style";
import Link from "next/link";
import { useImUser } from "@/hooks";

interface Props {
  userId: string | null | undefined;
  link: string;
  title?: string;
}

export const AddButton: FC<Props> = ({ title, link = "/", userId }) => {
  const imUser = useImUser(userId);
  if (!imUser) return null;
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
