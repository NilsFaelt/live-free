import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles";

interface LinksContainerProps {
  $menuanimationstate: "open" | "close" | "stale";
}

const openMenuAnimation = keyframes`
  from {
    height: 0vh;
    overflow:hidden;
  }
  to {
    height:calc(100vh ) ;
  }
`;
const closeMenuAnimation = keyframes`
  from {
    height:calc(100vh - 5rem)
  }
  to {
    height: 0vh;
    overflow:hidden;
  }
`;
const staleMenuAnimation = keyframes`
from{ height: 0vh;
    overflow:hidden;
}
  to {
    height: 0vh;
    overflow:hidden;
  }
`;

export const Container = styled.header`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  height: 5rem;
  background-color: transparent;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const LinksContainer = styled.nav<LinksContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: transparent;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0rem;
    left: 0rem;
    flex-direction: column;

    animation: ${({ $menuanimationstate }) => {
        switch ($menuanimationstate) {
          case "open":
            return openMenuAnimation;
          case "close":
            return closeMenuAnimation;
          case "stale":
            return staleMenuAnimation;
          default:
            return "none";
        }
      }}
      1s linear forwards;
  }
  @media (max-width: 576px) {
    overflow: hidden;
  }
`;

export const LogoImage = styled(Image)`
  width: 5rem;
  height: 3rem;
`;
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
  width: 100%;
  color: ${theme.colors.primary};
  border-bottom: 0.05rem solid ${theme.colors.secondary};
  &:hover {
    color: white;
    border-bottom: 0.05rem solid white;
  }
`;
export const StyledLinkLogo = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
`;
