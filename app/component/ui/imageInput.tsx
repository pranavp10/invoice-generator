/* eslint-disable @next/next/no-img-element */
"use client";

import { getInitialValue } from "@/lib/getInitialValue";
import { Plus } from "lucide-react";
import { useRef } from "react";
import { Controller } from "react-hook-form";

type CustomNumberProps = {
  label: string;
  variableName: string;
};

export const ImageInput = ({ label, variableName }: CustomNumberProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const isAcceptedFileType = (file: File) => {
    return ["image/png", "image/jpeg", "image/svg+xml"].includes(file.type);
  };

  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <div
          className="flex items-center relative justify-between h-[52px] cursor-pointer"
          onClick={handleButtonClick}
        >
          {label && (
            <label
              htmlFor={label}
              className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
            >
              {label}
            </label>
          )}
          {value ? (
            <img
              src={value}
              className="h-8 mr-3 rounded-md p-1 hover:bg-neutral-200"
              alt="company logo"
            />
          ) : (
            <button className="text-neutral-500/70 border rounded-full p-1.5 border-dashed">
              <Plus className="w-4 h-4" />
            </button>
          )}
          <input
            accept=".png, .jpg, .jpeg, .svg, .svg+xml"
            ref={inputRef}
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file && isAcceptedFileType(file)) {
                const reader = new FileReader();
                reader.onload = () => {
                  const url = reader.result as string;
                  onChange(url);
                  localStorage.setItem(variableName, url);
                };
                reader.readAsDataURL(file);
              }
            }}
            className={`peer w-full border-0 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 hidden ${
              label ? "text-right" : "p-0"
            }  placeholder:text-neutral-700/40 placeholder:font-medium caret-orange-500`}
          />
          <div
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-hover:border-neutral-400 peer-focus:border-t peer-focus:border-orange-500 border-dashed"
            aria-hidden="true"
          />
        </div>
      )}
      name={variableName}
      defaultValue={getInitialValue(variableName)}
    />
  );
};

export default ImageInput;
