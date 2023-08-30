"use client";
import React, { FC, useEffect, useState } from "react";
import { Container } from "./MyPageView.style";
import { DisplayUser } from "@/components";
import { DisplayArticles } from "@/features/ArticlePrimary/components";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface DisplayUser {
  displayName: string;
  photoURL: string;
}

export const MyPageView: FC = () => {
  const [user, setUser] = useState<DisplayUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? (user as DisplayUser) : null);
    });
    return () => unsubscribe();
  }, []);
  if (!user) return null;
  const { photoURL, displayName } = user;
  return (
    <Container>
      <DisplayUser id='1' />

      <DisplayArticles />
    </Container>
  );
};
