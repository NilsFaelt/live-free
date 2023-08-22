import { mediaQueries } from "@/styles/mediaQueries";
import { styled } from "styled-components";

export const Text = styled.p`
  font-size: 1rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 90%;
  }
`;
