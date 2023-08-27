import React, { FC } from "react";
import { Container, InnerContainer, StyledLink } from "./Footer.style";
import { MainText, ShareButton } from "@/ui";

export const Footer: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <StyledLink href={"/contact"}>Contact</StyledLink>
        <StyledLink href={"/about"}>About</StyledLink>
        <StyledLink href={"/api/auth/login"}>Login</StyledLink>
      </InnerContainer>
      <ShareButton />
    </Container>
  );
};
