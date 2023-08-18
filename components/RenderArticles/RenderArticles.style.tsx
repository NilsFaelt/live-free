import { mediaQueries } from "@/styles/mediaQueries";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 90%;
  margin-bottom: 2rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    width: 100%;
    gap: 1rem;
  }
`;
