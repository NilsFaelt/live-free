import React, { FC } from "react";
import { Container } from "./DisplayArticles.style";
import { ArticlePrimary, RenderArticles } from "@/components";

export const DisplayArticles: FC = () => {
  return (
    <Container>
      <RenderArticles>
        <ArticlePrimary
          link='/article-primary/13'
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />
        <ArticlePrimary
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />
        <ArticlePrimary
          title='Travel gondahoras'
          text='Enjoy the magic from the mountains and test a new life'
          categoryText='Travel'
          categoryColor='teal'
          endText='Nils Falt'
          imageSrc='https://images.unsplash.com/photo-1632061253472-9c715a570b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
        />
        <ArticlePrimary
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
