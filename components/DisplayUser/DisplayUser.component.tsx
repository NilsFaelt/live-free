import React, { FC } from "react";
import {
  Container,
  EndText,
  Image,
  Text,
  Title,
  TitleWrapper,
  UnderTitle,
} from "./DisplayUser.style";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import { PrimaryButton } from "@/ui/actions";

const roboto = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

interface Props {
  title: string;
  imageSrc: string;
  text: string;
  link?: string;
  endText?: string;
  underTitle?: string;
  buttonText?: string;
  url: string;
}

export const DisplayUser: FC<Props> = ({
  title,
  imageSrc,
  text,
  link,
  endText,
  underTitle,
  buttonText,
  url,
}) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Container>
      <TitleWrapper>
        <Title className={roboto.className}>{title}</Title>
        <UnderTitle className={rajdhani.className}>{underTitle}</UnderTitle>
      </TitleWrapper>
      <Image src={imageSrc} />
      <Text className={rajdhani.className}>{text}</Text>
      <EndText>{endText}</EndText>
      {buttonText && (
        <PrimaryButton text={buttonText} onClick={() => handleClick(url)} />
      )}
    </Container>
  );
};
