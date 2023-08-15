import { theme } from "@/styles";
import styled, { keyframes } from "styled-components";

export const Container = styled.button`
  min-width: 7rem;
  height: 3rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: 0.05rem solid black;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 5px ${theme.colors.secondary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
`;
