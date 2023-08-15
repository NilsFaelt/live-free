import React, { FC } from "react";
import { Container } from "./HomePageView.style";
import { BigImage, MiniArticleWithImage } from "@/components";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { RenderArticles } from "../components";

export const HomePageView: FC = () => {
  return (
    <Container>
      <BigImage imageSrc='https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'>
        <SecondaryTitle
          title='Live laugh and play'
          underTitle='Dont take life to seriously'
        />
      </BigImage>
      <RenderArticles>
        <MiniArticleWithImage
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />

        <MiniArticleWithImage
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />

        <MiniArticleWithImage
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />

        <MiniArticleWithImage
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />
      </RenderArticles>
    </Container>
  );
};
