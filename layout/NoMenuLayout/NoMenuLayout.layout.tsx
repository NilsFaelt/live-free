import React, { FC, ReactNode } from "react";
import { Container, TitleWrapper } from "./NoMenuLayout.style";
import { HeaderWithNav } from "@/features";
import { MainTitle } from "@/ui";

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
    </Container>
  );
};

export default NoMenuLayout;
