import React, { FC } from "react";
import { Container } from "./HomePageView.style";
import { BigImage, DisplayUser, ArticlePrimary } from "@/components";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { ArticlePrimaryView, IFrame } from "@/features";

export const HomePageView: FC = () => {
  return (
    <Container>
      <BigImage imageSrc='https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'>
        <SecondaryTitle
          title='Live laugh and play'
          underTitle='Dont take life to seriously'
        />
      </BigImage>
      <ArticlePrimaryView />
    </Container>
  );
};
