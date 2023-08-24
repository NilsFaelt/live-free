import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div<{ $backgroundcolor: "teal" | "none" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.8rem;
  box-sizing: content-box;
  // background-color: ${(props) => props.$backgroundcolor};
  width: 100%;
`;
export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 2.5rem;
  margin: 0;
`;
export const UnderTitle = styled.p`
  color: ${theme.colors.secondary};
  font-size: 1rem;
  margin-top: 0rem;
`;
