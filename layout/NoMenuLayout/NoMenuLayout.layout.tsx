import React, { FC, ReactNode } from "react";
import { Container, TitleWrapper } from "./NoMenuLayout.style";
import { MainTitle } from "@/ui";
import { Footer } from "@/components";

interface Props {
  children: ReactNode;
}

export const NoMenuLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <TitleWrapper>
        <MainTitle />
      </TitleWrapper>
      {children}
      <Footer />
    </Container>
  );
};

export default NoMenuLayout;
