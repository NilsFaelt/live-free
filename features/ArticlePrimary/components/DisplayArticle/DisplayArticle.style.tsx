import { theme } from "@/styles";
import { mediaQueries } from "@/styles/mediaQueries";

import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  width: 60%;
  border-bottom: 0.05rem solid grey;
  padding-bottom: 2rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
    margin-left: 0rem;
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 30rem;
  border-radius: 1rem;
  border: 0.05rem solid black;
  @media (max-width: ${mediaQueries.tablet}) {
    border-radius: 0rem;
  }
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  /* color: ${theme.colors.primary}; */
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
  margin-bottom: 2rem;
  @media (max-width: ${mediaQueries.tablet}) {
    margin-left: 5%;
  }
`;
