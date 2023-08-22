import React, { FC } from "react";
import { Option, Select } from "./MainDropDown.style";

interface Props {
  values: { value: string | number; label: string | number }[];
  setSelectedValue: (value: string | number) => void; // add this line
}

export const MainDropDown: FC<Props> = ({ values, setSelectedValue }) => {
  return (
    <Select
      onChange={(e) => setSelectedValue(e.target.value)} // add this line
    >
      {values?.map((item, index) => {
        return (
          <Option key={index} value={item.value}>
            {item.label}
          </Option>
        );
      })}
    </Select>
  );
};
