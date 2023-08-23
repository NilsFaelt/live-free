import React, { FC } from "react";
import { Container, StyledLink } from "./Footer.style";
import { MainText } from "@/ui";

export const Footer: FC = () => {
  return (
    <Container>
      <StyledLink href={"/contact"}>Contact</StyledLink>
      <StyledLink href={"/about"}>About</StyledLink>
      <StyledLink href={"/api/auth/login"}>Login</StyledLink>
    </Container>
  );
};
