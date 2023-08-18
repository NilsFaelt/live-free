import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.05rem ${theme.colors.secondary};
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  color: ${theme.colors.primary};
  &:hover {
    color: ${theme.colors.secondary};
  }
`;
export const Text = styled.p`
  margin: 0.2rem;
`;
export const A = styled.a`
  text-decoration: none;
`;
