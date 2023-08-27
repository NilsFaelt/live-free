import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  border: none;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10rem;
  background-color: black;
`;
export const StyledIFrame = styled.iframe`
  width: 100%;
  height: 20rem;
  border: none;
`;
export const Image = styled.img`
  width: 50%;
`;
