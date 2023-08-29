import React, { FC } from "react";
import {
  Container,
  LogoContainer,
  StyledLogo,
  Title,
} from "./ShareButton.style";

export const ShareButton: FC = () => {
  const currentUrl = window.location.href;
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent("Check out this awesome article!");
    window.open(
      `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const title = encodeURIComponent("My Website");
    window.open(
      `https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${title}`,
      "_blank"
    );
  };

  return (
    <Container>
      <Title>Share on social media</Title>
      <LogoContainer>
        <StyledLogo onClick={shareOnLinkedIn} src='/svg/linkedin.svg' />
        <StyledLogo onClick={shareOnFacebook} src='/svg/facebook.svg' />
        <StyledLogo onClick={shareOnTwitter} src='/svg/twitter.svg' />
      </LogoContainer>
    </Container>
  );
};
