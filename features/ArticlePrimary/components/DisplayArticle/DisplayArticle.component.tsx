import React, { FC } from "react";
import {
  Container,
  EndText,
  StyledImage,
  Title,
  UnderTitle,
} from "./DisplayArticle.style";
import { useArticle } from "../../hooks";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { MainText, PrimaryButton, ShareButton } from "@/ui";
import { DisplayArticles } from "..";
import { useDeleteArticleMutation } from "../../hooks/useDeleteArticleMutation";
import { useRouter } from "next/navigation";
import { useFirebaseIdToken, useImUser } from "@/hooks";
interface Props {
  id: string;
}

export const DisplayArticle: FC<Props> = ({ id }) => {
  const token = useFirebaseIdToken();
  const { mutateAsync } = useDeleteArticleMutation(id, token);
  const router = useRouter();
  const { data } = useArticle({ endpoint: "article-primary", id });

  const imUser = useImUser(data?.author.id);
  if (!data)
    return (
      <SecondaryTitle
        title='Article Not Found'
        underTitle='We are really sorry for the inconvenience'
      />
    );
  const { createdAt, image } = data;
  const handleDeleteOnClick = () => {
    mutateAsync()
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <StyledImage src={image} />
        <UnderTitle>{data.text}</UnderTitle>
        <MainText>{data.content}</MainText>
        <EndText>
          {data.author?.userName} <br /> {createdAt}
        </EndText>
        {imUser && (
          <PrimaryButton onClick={handleDeleteOnClick} text='REMOVE ARTICLE' />
        )}
        <ShareButton />
      </Container>
      <DisplayArticles />
    </>
  );
};
