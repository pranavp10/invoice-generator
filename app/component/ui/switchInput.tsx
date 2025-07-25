"use client";

import { Switch } from "@/components/ui/switch";
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller } from "react-hook-form";

type SwitchInputProps = {
  label?: string;
  variableName: string;
};

const SwitchInput = ({ label, variableName }: SwitchInputProps) => (
  <Controller
    render={({ field: { onChange, value } }) => (
      <div className="flex items-center flex-row justify-between gap-2 mt-4 border-b border-gray-300 border-dashed pb-4">
        {label && (
          <span className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap">
            {label}
          </span>
        )}
        <Switch
          checked={value}
          onCheckedChange={(checked) => {
            localStorage.setItem(variableName, checked.toString());
            onChange(checked);
          }}
        />
      </div>
    )}
    name={variableName}
    defaultValue={getInitialValue(variableName) === "true"}
  />
);

export default SwitchInput;
