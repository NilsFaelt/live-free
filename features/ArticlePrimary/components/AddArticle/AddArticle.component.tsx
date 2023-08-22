import React, { FC, useState } from "react";
import { MainDropDown, MainInput, PrimaryButton, TextArea } from "@/ui";
import {
  Container,
  FullArticleWrapper,
  InputWrapper,
  TeaserAndInputWrapper,
  Title,
} from "./AddArticle.style";
import { ArticlePrimaryBaseType } from "@/types";
import { ArticlePrimary } from "@/components";
import { travelCategories } from "./travelCategories";

export const AddArticle: FC = () => {
  const [article, setArticle] = useState<ArticlePrimaryBaseType>({
    title: "",
    text: "",
    content: "",
    category: "allaround",
    image: "",
    authorId: "",
  });
  const { title, text, content, image, category } = article;
  console.log(article);
  const handleChange = (fieldName: string, value: string | number) => {
    setArticle({
      ...article,
      [fieldName]: value,
    });
  };
  return (
    <Container>
      <TeaserAndInputWrapper>
        <InputWrapper>
          <MainInput
            setValue={(value: any) => handleChange("title", value)}
            name='title'
            value={article.title}
            type='text'
            placeholder='Title text'
          />
          <MainInput
            setValue={(value: any) => handleChange("text", value)}
            name='text'
            value={article.text}
            type='text'
            placeholder='Teaser Text'
          />
          <MainInput
            setValue={(value: any) => handleChange("image", value)}
            name='image'
            value={article.image}
            type='text'
            placeholder='Image link'
          />
          <MainDropDown
            setSelectedValue={(value: string | number) =>
              handleChange("category", value)
            }
            values={travelCategories}
          />
        </InputWrapper>
        <ArticlePrimary
          title={title}
          text={text}
          imageSrc={image}
          author='TEST'
          category={category}
        />
      </TeaserAndInputWrapper>
      <Title>Add ariticle content-text</Title>
      <TextArea
        placeholder='Content'
        setValue={(value: any) => handleChange("text", value)}
      />
      <FullArticleWrapper></FullArticleWrapper>
      <PrimaryButton text='ADD ARTICLE' />
    </Container>
  );
};
