"use client";
import React, { FC, useEffect, useState } from "react";
import { Container, Text } from "./UserLoginButton.style";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { useRouter } from "next/navigation";

export const UserLoginButton: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<null | string>(null);

  const handleLogin = () => {
    setIsLoading(true);
    try {
      signInWithPopup(auth, googleProvider).then((usercred) => {
        console.log(usercred);
        // setIsLoggedIn(true);
        router.push(`/my-page/${auth.currentUser?.uid}`);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogout = () => {
    try {
      signOut(auth).then(() => {
        router.push("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user?.email ? user.email : null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {!user ? (
        <Container onClick={handleLogin}>
          {isLoading ? <Text>LOADING...</Text> : <Text>LOGIN</Text>}
        </Container>
      ) : (
        <Container onClick={handleLogout}>
          {isLoading ? <Text>LOADING...</Text> : <Text>LOGOUT</Text>}
        </Container>
      )}
    </>
  );
};
