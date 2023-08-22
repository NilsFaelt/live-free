import React, { FC, ReactNode } from "react";
import { Text } from "./MainText.style";

interface Props {
  children: ReactNode;
}

export const MainText: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};
