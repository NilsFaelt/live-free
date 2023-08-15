import React, { FC } from "react";
import { Container, StyledLink, Title, UnderTitle } from "./MainTitle.style";
import { Permanent_Marker } from "next/font/google";
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
export const MainTitle: FC = () => {
  return (
    <StyledLink href={"/"}>
      <Container>
        <Title>MY MAG</Title>
        <UnderTitle className={permanentMarker.className}>
          Create your news
        </UnderTitle>
      </Container>
    </StyledLink>
  );
};
