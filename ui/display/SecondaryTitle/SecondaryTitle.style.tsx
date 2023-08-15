import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.8rem;
  border-radius: 1rem;
`;
export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 3.5rem;
  margin: 0;
`;
export const UnderTitle = styled.p`
  color: ${theme.colors.secondary};
  font-size: 1rem;
  margin-top: 0.4rem;
`;
