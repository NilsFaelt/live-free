import React, { FC } from "react";
import {
  Container,
  LoggedInNameText,
  StyledLink,
  Title,
  UnderTitle,
} from "./MainTitle.style";
import { Permanent_Marker } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
export const MainTitle: FC = () => {
  const { user } = useUser();
  return (
    <StyledLink href={"/"}>
      <Container>
        <Title>MY MAG</Title>
        <UnderTitle className={permanentMarker.className}>
          Create your news
        </UnderTitle>
        {user?.nickname && (
          <LoggedInNameText className={permanentMarker.className}>
            {user.nickname}
          </LoggedInNameText>
        )}
      </Container>
    </StyledLink>
  );
};
