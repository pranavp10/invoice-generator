"use client";

import { Input } from "@/app/component/ui/input";
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller } from "react-hook-form";

type CustomNumberProps = {
  label?: string;
  placeholder: string;
  variableName: string;
};

export const CustomNumberInput = ({
  label,
  placeholder,
  variableName,
}: CustomNumberProps) => (
  <Controller
    render={({ field: { onChange, value } }) => (
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        type="text"
        pattern="[0-9]*"
        onChange={(e) => {
          const updatedValue = e.target.value;
          localStorage.setItem(variableName, updatedValue);
          onChange(updatedValue);
        }}
      />
    )}
    defaultValue={getInitialValue(variableName)}
    name={variableName}
  />
);

export default CustomNumberInput;
