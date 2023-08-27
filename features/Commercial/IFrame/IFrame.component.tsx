import React, { FC } from "react";
import { Container, InnerContainer, StyledIFrame, Image } from "./IFrame.style";

export const IFrame: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>test</h1>
      </InnerContainer>
      <StyledIFrame src='https://www.appertiffworkshop.se/' />
    </Container>
  );
};
