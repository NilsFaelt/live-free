"use client";
import React, { FC, useEffect, useState } from "react";
import {
  Container,
  StyledImage,
  OuterContainer,
  StyledLink,
} from "./ProfileButton.style";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export const ProfileButton: FC = () => {
  const [userId, setUserId] = useState<null | string>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid ? user.uid : null);
    });
    return () => unsubscribe();
  }, []);
  if (!userId) return null;

  return (
    <StyledLink href={`/my-page/${userId}`}>
      <OuterContainer>
        <Container>
          <StyledImage
            alt='Logo of house'
            src={"/svg/profile.svg"}
            height={25}
            width={25}
          />
        </Container>
      </OuterContainer>
    </StyledLink>
  );
};
