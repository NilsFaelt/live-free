import { theme } from "@/styles";
import Link from "next/link";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0rem;
`;

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: 0.05rem solid black;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 5px ${theme.colors.secondary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const Title = styled.h4`
  font-size: 1.2rem;
`;
export const Text = styled.p`
  font-size: 2rem;
`;
