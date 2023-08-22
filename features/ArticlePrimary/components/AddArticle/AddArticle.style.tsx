import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 15rem;
  padding: 5rem;
`;
export const TeaserAndInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const FullArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;
export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.secondary};
`;
