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
import { useCreateArticleMutation } from "../../hooks";
import { useRouter } from "next/navigation";
import { useFirebaseIdToken } from "@/hooks";

export const AddArticle: FC<{ userId: string }> = ({ userId }) => {
  console.log(userId);
  const token = useFirebaseIdToken();
  const router = useRouter();
  const [article, setArticle] = useState<ArticlePrimaryBaseType>({
    title: "",
    text: "",
    content: "",
    category: "allaround",
    image: "",
    authorId: userId,
  });
  const { title, text, image, category } = article;

  const handleChange = (fieldName: string, value: string | number) => {
    setArticle({
      ...article,
      [fieldName]: value,
    });
  };

  const { mutateAsync } = useCreateArticleMutation(article, token);
  const handleClick = async () => {
    mutateAsync().then(() => {
      router.push("/");
    });
  };

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <TeaserAndInputWrapper>
        <InputWrapper>
          <MainInput
            required={true}
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
            required={true}
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
        required={true}
        placeholder='Content'
        setValue={(value: any) => handleChange("content", value)}
      />
      <FullArticleWrapper></FullArticleWrapper>
      <PrimaryButton text='ADD ARTICLE' />
    </Container>
  );
};
