import { styled } from "styled-components";

export const Container = styled.div<{ $imagesrc: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.$imagesrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
