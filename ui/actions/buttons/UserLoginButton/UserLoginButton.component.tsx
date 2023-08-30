"use client";
import React, { FC, useEffect, useState } from "react";
import { Container, Text } from "./UserLoginButton.style";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { useRouter } from "next/navigation";
import { useCreateUserMutation } from "@/hooks";
import { apiClient } from "@/api";

export const UserLoginButton: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<null | string>(null);

  const handleLogin = () => {
    setIsLoading(true);
    try {
      signInWithPopup(auth, googleProvider)
        .then(({ user }) => {
          console.log(user, " lalaalallal");
          auth.currentUser?.getIdToken().then((token) =>
            fetch(`http://localhost:3000/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Use the retrieved token here
              },
              body: JSON.stringify({
                user: {
                  id: user?.uid,
                  email: user?.email,
                  userName: user.displayName,
                },
              }),
            })
          );
        })
        .then(() => {
          router.push(`/my-page/${auth.currentUser?.uid}`);
        })
        .catch((error) => {
          console.log("Error:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
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
