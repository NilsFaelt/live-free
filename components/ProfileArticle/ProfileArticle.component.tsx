"use client";
import React, { FC } from "react";
import {
  Container,
  EndText,
  Image,
  StyledLink,
  Text,
  Title,
  TitleWrapper,
  UnderTitle,
} from "./ProfileArticle.style";
import { Bebas_Neue, Rajdhani } from "next/font/google";

const roboto = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

interface Props {
  title: string;
  imageSrc: string;
  text: string;
  link?: string;
  endText?: string;
  underTitle?: string;
}

export const ProfileArticle: FC<Props> = ({
  title,
  imageSrc,
  text,
  link,
  endText,
  underTitle,
}) => {
  return (
    <StyledLink href={link ? link : ""}>
      <Container>
        <TitleWrapper>
          <Title className={roboto.className}>{title}</Title>
          <UnderTitle className={rajdhani.className}>{underTitle}</UnderTitle>
        </TitleWrapper>
        <Image src={imageSrc} />
        <Text className={rajdhani.className}>{text}</Text>
        <EndText>{endText}</EndText>
      </Container>
    </StyledLink>
  );
};
