import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 15rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.secondary};
`;
