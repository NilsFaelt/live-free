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
import { useUser } from ".";

const roboto = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

interface Props {
  title?: string;
  imageSrc?: string;
  text?: string;
  link?: string;
  endText?: string;
  underTitle?: string;
  buttonText?: string;
  url?: string;
  id?: string;
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
  id,
}) => {
  const { data } = useUser({
    endpoint: "user",
    id: "l3LciZ5rpteN8drgedL0caT8RPi1",
  });
  console.log(data);
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  if (id && data !== undefined) {
    const { id, aboutMe, userName, email } = data;
    return (
      <Container>
        <TitleWrapper>
          <Title className={roboto.className}>{userName}</Title>
          <UnderTitle className={rajdhani.className}>{underTitle}</UnderTitle>
        </TitleWrapper>
        <Image
          alt='face'
          src={
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2261&q=80"
          }
        />
        <Text className={rajdhani.className}>{aboutMe}</Text>
        <EndText>{endText}</EndText>
        {buttonText && (
          <PrimaryButton
            text={buttonText}
            onClick={() => handleClick(url ? url : "")}
          />
        )}
      </Container>
    );
  } else
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
          <PrimaryButton
            text={buttonText}
            onClick={() => handleClick(url ? url : "")}
          />
        )}
      </Container>
    );
};
