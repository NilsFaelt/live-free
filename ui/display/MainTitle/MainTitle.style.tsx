import { theme } from "@/styles";
import Link from "next/link";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.8rem;
  border-radius: 1rem;
  border: 0.2rem solid ${theme.colors.primary};
`;
export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  margin: 0;
`;
export const UnderTitle = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.7rem;
  margin-top: -0.3rem;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
