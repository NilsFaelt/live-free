import { mediaQueries } from "@/styles/mediaQueries";

import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 20rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
  }
`;
export const Image = styled.image`
  background-image: url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 30rem;
`;
export const Title = styled.h3`
  font-size: 2rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 90%;
  }
`;
export const UnderTitle = styled.h3`
  font-size: 1.4rem;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 90%;
  }
`;
export const EndText = styled.p`
  align-self: flex-start;
  @media (max-width: ${mediaQueries.tablet}) {
    margin-left: 5%;
  }
`;
