import React, { Dispatch, FC, SetStateAction } from "react";
import { Container } from "./TextArea.style";

interface Props {
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  required?: boolean;
}

export const TextArea: FC<Props> = ({
  setValue,
  placeholder,
  required = true,
}) => {
  return (
    <Container
      required={required}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
