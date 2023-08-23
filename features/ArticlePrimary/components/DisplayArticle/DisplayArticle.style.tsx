import { mediaQueries } from "@/styles/mediaQueries";

import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 20rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 30rem;
`;
export const Title = styled.h3`
  font-size: 2rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 90%;
  }
`;
export const UnderTitle = styled.h3`
  font-size: 1.4rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 90%;
  }
`;
export const EndText = styled.p`
  align-self: flex-start;
  @media (max-width: ${mediaQueries.tablet}) {
    margin-left: 5%;
  }
`;
