import React, { FC } from "react";
import {
  Container,
  EndText,
  Image,
  Title,
  UnderTitle,
} from "./DisplayArticle.style";
import { useArticle } from "../../hooks";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { MainText } from "@/ui";

interface Props {
  id: string;
}
// add spinenr to ui

export const DisplayArticle: FC<Props> = ({ id }) => {
  const { data } = useArticle({ endpoint: "article-primary", id });
  if (!data)
    return (
      <SecondaryTitle
        title='Article Not Found'
        underTitle='We are really sorry for the inconvenience'
      />
    );
  const { title, createdAt } = data;
  console.log(data);
  return (
    <Container>
      <Title>{data.title}</Title>
      <Image />
      <UnderTitle>{data.text}</UnderTitle>
      <MainText>{data.content}</MainText>
      <EndText>
        Nils <br /> {createdAt}
      </EndText>
    </Container>
  );
};
