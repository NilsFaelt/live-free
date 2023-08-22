import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 95%;
  min-height: 30rem;
  padding: 0.5rem;
  font-size: 1rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
