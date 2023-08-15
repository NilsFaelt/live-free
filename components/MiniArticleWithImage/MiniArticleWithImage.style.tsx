import { mediaQueries } from "@/styles/mediaQueries";
import Link from "next/link";
import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.05rem solid black;
  border-radius: 1rem;
  width: 18rem;
  height: 25rem;
  @media (max-width: ${mediaQueries.mobile}) {
    width: 10rem;
    height: 15rem;
  }
`;
export const InnerUpperContainer = styled.div<{ imageurl: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 40%;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 0.5rem, 0.5rem, 0.5rem black;
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(0px);
`;
export const InnerLowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 1rem;
  width: 100%;
  height: 60%;
  padding: 1.5rem;
  border-radius: 0rem 0rem 1rem 1rem;
  box-shadow: 0.5rem, 0.5rem, 0.5rem black;
  @media (max-width: ${mediaQueries.mobile}) {
    padding: 0.7rem;
    gap: 0.5rem;
  }
`;
export const CategoryContainer = styled.div<{ bgcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  background-color: ${(props) => props.bgcolor};
  height: 1.5rem;
  width: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 3rem;
  margin: 0rem;
  margin-left: -0.3rem;
  color: white;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0rem;
  @media (max-width: ${mediaQueries.mobile}) {
    font-size: 1rem;
  }
`;
export const UnderTitle = styled.h3`
  margin: 0rem;
  margin-top: -0.5rem;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const Text = styled.p`
  font-size: 0.8rem;
  margin: 0rem;
  @media (max-width: ${mediaQueries.mobile}) {
    font-size: 0.6rem;
  }
`;
export const EndText = styled.p`
  position: absolute;
  bottom: 1rem;
  font-size: 0.5rem;
  @media (max-width: ${mediaQueries.mobile}) {
    font-size: 0.4rem;
    bottom: 0.5rem;
  }
`;
