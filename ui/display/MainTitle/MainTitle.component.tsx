import React, { FC } from "react";
import {
  Container,
  LoggedInNameText,
  StyledLink,
  Title,
  UnderTitle,
} from "./MainTitle.style";
import { Permanent_Marker } from "next/font/google";
import { auth } from "@/firebase";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
export const MainTitle: FC = () => {
  const user = auth.currentUser?.displayName;

  return (
    <StyledLink href={"/"}>
      <Container>
        <Title>MY MAG</Title>
        <UnderTitle className={permanentMarker.className}>
          Create your news
        </UnderTitle>
        {user && (
          <LoggedInNameText className={permanentMarker.className}>
            {user}
          </LoggedInNameText>
        )}
      </Container>
    </StyledLink>
  );
};
