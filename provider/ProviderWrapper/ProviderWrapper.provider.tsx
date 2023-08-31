"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MenuContextProvider } from "@/context";
import { GlobalStyle } from "@/styles";
import { PropsWithChildren, useState } from "react";
import { LoggedinUserContextProvider } from "@/context/LoggedinUserContext";

export function ProviderWrapper({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <LoggedinUserContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </LoggedinUserContextProvider>
      </QueryClientProvider>
    </>
  );
}
