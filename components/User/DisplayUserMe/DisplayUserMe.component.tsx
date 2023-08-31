import React, { FC, useContext } from "react";
import {
  Container,
  EndText,
  Image,
  Text,
  Title,
  TitleWrapper,
  UnderTitle,
} from "./DisplayUserMe.style";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import { useUser } from "..";

const roboto = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

export const DisplayUserMe: FC<{ id: string }> = ({ id }) => {
  const { data } = useUser({ endpoint: "user", id: id });

  if (!data) return null;
  const { email, userName, aboutMe } = data;
  return (
    <Container>
      <TitleWrapper>
        <Title className={roboto.className}>{userName}</Title>
        <UnderTitle className={rajdhani.className}>{email}</UnderTitle>
      </TitleWrapper>
      <Image
        alt='face image'
        src={
          "https://images.unsplash.com/photo-1571816119607-57e48af1caa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        }
      />
      <Text className={rajdhani.className}>{"My Mag"}</Text>
      <EndText>{aboutMe}</EndText>
    </Container>
  );
};
