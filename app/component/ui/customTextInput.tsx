"use client";

import { Input } from "@/app/component/ui/input";
import useQueryParams from "@/app/hooks/useQueryParams";

type CustomInputProps = {
  label?: string;
  placeholder: string;
  variableName: string;
};

const CustomTextInput = ({
  label,
  placeholder,
  variableName,
}: CustomInputProps) => {
  const { value, setValue } = useQueryParams(variableName);

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      type="text"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default CustomTextInput;
