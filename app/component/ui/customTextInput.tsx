"use client";

import { Input } from "@/app/component/ui/input";
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller } from "react-hook-form";

type CustomInputProps = {
  label?: string;
  placeholder: string;
  variableName: string;
};

const CustomTextInput = ({
  label,
  placeholder,
  variableName,
}: CustomInputProps) => (
  <Controller
    render={({ field: { onChange, value } }) => (
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={(e) => {
          const updatedValue = e.target.value;
          localStorage.setItem(variableName, updatedValue);
          onChange(updatedValue);
        }}
      />
    )}
    name={variableName}
    defaultValue={getInitialValue(variableName)}
  />
);

export default CustomTextInput;
