import { mediaQueries } from "@/styles/mediaQueries";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  color: black;
  @media (max-width: ${mediaQueries.mobile}) {
    gap: 2rem;
  }
`;
