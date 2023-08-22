import { styled } from "styled-components";

export const Container = styled.input`
  width: 15rem;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
