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
      <DisplayUser
        url=''
        title={displayName ? displayName : ""}
        underTitle={"My Mag"}
        imageSrc={
          photoURL
            ? photoURL
            : "https://images.unsplash.com/photo-1510442650500-93217e634e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=691&q=80"
        }
        text='Im nils and im a freelnace writer whom truly love to write and spread inspiration'
      />

      <DisplayArticles />
    </Container>
  );
};
