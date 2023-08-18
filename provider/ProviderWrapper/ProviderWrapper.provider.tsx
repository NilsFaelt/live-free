"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MenuContextProvider } from "@/context";
import { GlobalStyle } from "@/styles";
import { PropsWithChildren, useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export function ProviderWrapper({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}
