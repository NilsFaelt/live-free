import React, { FC } from "react";
import { Container } from "./HomePageView.style";
import { BigImage } from "@/components";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";
import { ArticlePrimaryView } from "@/features";

export const HomePageView: FC = () => {
  return (
    <Container>
      <BigImage imageSrc='/images/bg-image.webp'>
        <SecondaryTitle
          title='Live laugh and play'
          underTitle='Dont take life to seriously'
        />
      </BigImage>
      <ArticlePrimaryView />
    </Container>
  );
};
