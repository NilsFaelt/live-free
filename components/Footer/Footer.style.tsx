import { theme } from "@/styles";
import { mediaQueries } from "@/styles/mediaQueries";
import Link from "next/link";
import { styled } from "styled-components";

export const Container = styled.footer`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  min-height: 5rem;
  padding-bottom: 3rem;
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
export const InnerContainer = styled.footer`
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 5rem;
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
export const StyledLink = styled(Link)`
  font-size: 0.7rem;
  text-decoration: none;
  color: black;
`;
