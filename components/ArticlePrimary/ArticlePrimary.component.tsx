"use client";
import { FC } from "react";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import {
  Text,
  CategoryContainer,
  Container,
  InnerLowerContainer,
  InnerUpperContainer,
  Title,
  EndText,
  StyledLink,
} from "./ArticlePrimary.style";

import { TravelCategoryType, travelCategoryColorMap } from "@/styles";

const roboto = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

interface Props {
  title: string;
  imageSrc: string;
  text: string;
  category: TravelCategoryType;
  link?: string;
  endText?: string;
  endTextDate?: string;
}

export const ArticlePrimary: FC<Props> = ({
  title,
  imageSrc,
  category,
  text,
  link,
  endTextDate,
  endText,
}) => {
  return (
    <StyledLink href={link ? link : ""}>
      <Container>
        <InnerUpperContainer imageurl={imageSrc}></InnerUpperContainer>
        <InnerLowerContainer>
          <CategoryContainer bgcolor={travelCategoryColorMap.get(category)}>
            <Text>{category}</Text>
          </CategoryContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <>
            <EndText>
              {endTextDate}
              <br /> {endText}
            </EndText>
          </>
        </InnerLowerContainer>
      </Container>
    </StyledLink>
  );
};
