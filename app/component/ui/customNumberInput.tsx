"use client";

import { Input } from "@/app/component/ui/input";
import useQueryParams from "@/app/hooks/useQueryParams";

type CustomNumberProps = {
  label: string;
  placeholder: string;
  variableName: string;
};

export const CustomNumberInput = ({
  label,
  placeholder,
  variableName,
}: CustomNumberProps) => {
  const { value, setValue } = useQueryParams(variableName);

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      type="text"
      pattern="[0-9]*"
      onChange={(e) => {
        const inputValue = e.target.value;
        if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
          setValue(inputValue);
        }
      }}
    />
  );
};

export default CustomNumberInput;
