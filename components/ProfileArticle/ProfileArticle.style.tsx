import Link from "next/link";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 80%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0rem;
`;
export const Title = styled.h2`
  font-size: 3rem;
  margin: 0rem;
`;
export const UnderTitle = styled.h3`
  font-size: 1rem;
  margin: 0rem;
  margin-top: -0.5rem;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const Text = styled.p`
  text-align: center;
  max-width: 30rem;
  margin-bottom: 0;
`;
export const EndText = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 0.4rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  margin-top: 0.3rem;
`;
