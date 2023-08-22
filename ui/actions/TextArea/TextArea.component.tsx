import React, { Dispatch, FC, SetStateAction } from "react";
import { Container } from "./TextArea.style";

interface Props {
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

export const TextArea: FC<Props> = ({ setValue, placeholder }) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
