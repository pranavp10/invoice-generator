"use client";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { getInitialValue } from "@/lib/getInitialValue";

type CustomNumberProps = {
  label: string;
  variableName: string;
};

const DateInput = ({ label, variableName }: CustomNumberProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <div className="flex group items-center  relative h-[52px]">
          <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild className="w-full">
              <button className="flex gap-2 items-center justify-between w-full">
                <label
                  htmlFor={label}
                  className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
                >
                  {label}
                </label>
                <div className="flex gap-2 items-center text-sm">
                  {value ? format(value, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 mt-3" align="end">
              <Calendar
                mode="single"
                selected={new Date(value)}
                onSelect={(day: Date | undefined) => {
                  if (day?.toString()) {
                    const updatedValue = day.toString();
                    localStorage.setItem(variableName, updatedValue);
                    onChange(updatedValue);
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <div
            className={`absolute border-dashed inset-x-0 bottom-0 border-t border-gray-300  group-focus:border-t ${
              open ? "border-orange-500" : "group-hover:border-neutral-400"
            }`}
            aria-hidden="true"
          />
        </div>
      )}
      name={variableName}
      defaultValue={getInitialValue(variableName)}
    />
  );
};

export default DateInput;
