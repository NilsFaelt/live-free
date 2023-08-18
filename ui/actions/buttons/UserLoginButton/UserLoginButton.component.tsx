import React, { FC } from "react";
import { A, Container, Text } from "./UserLoginButton.style";
import { useUser } from "@auth0/nextjs-auth0/client";

export const UserLoginButton: FC = () => {
  const { user, isLoading } = useUser();
  return (
    <>
      {!user?.email ? (
        <A href='/api/auth/login'>
          <Container>
            {isLoading ? <Text>LOADING...</Text> : <Text>LOGIN</Text>}
          </Container>
        </A>
      ) : (
        <A href='/api/auth/logout'>
          <Container>
            {isLoading ? <Text>LOADING...</Text> : <Text>LOGOUT</Text>}
          </Container>
        </A>
      )}
    </>
  );
};
