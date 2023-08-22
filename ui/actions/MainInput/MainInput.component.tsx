import { Dispatch, FC, SetStateAction } from "react";
import { Container } from "./MainInput.style";

interface BaseProps {
  placeholder?: string;
  required?: boolean;
}

interface TextProps extends BaseProps {
  setValue: Dispatch<SetStateAction<string>>;
  type: "text";
  value: string;
  name?: string;
}

interface NumberProps extends BaseProps {
  setValue: Dispatch<SetStateAction<number | null>>;
  type: "number";
  value: string;
  name?: string;
}

type Props = TextProps | NumberProps;

export const MainInput: FC<Props> = ({
  type,
  required,
  setValue,
  placeholder,
  value = "",
  name,
}) => {
  return (
    <Container
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={
        type === "text"
          ? (e) => setValue(e.target.value)
          : (e) => setValue(e.target.valueAsNumber)
      }
      type={type}
      required={required}
    />
  );
};

MainInput.defaultProps = {
  type: "text",
  required: false,
  placeholder: "",
};
