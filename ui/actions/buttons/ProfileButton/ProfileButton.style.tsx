import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const OuterContainer = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fae7c4;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  box-shadow: 0.1rem 0.1rem 0.1rem black;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.5rem solid ${theme.colors.primary};
`;
export const StyledLink = styled(Link)`
  text-decortaion: none;
`;
export const StyledImage = styled(Image)``;
