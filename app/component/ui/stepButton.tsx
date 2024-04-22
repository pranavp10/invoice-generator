"use client";
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller } from "react-hook-form";

type StepButtonProps = {
  isPrevious?: boolean;
  title: string;
  step: string;
};

const StepButton = ({ isPrevious, title, step }: StepButtonProps) => (
  <Controller
    render={({ field: { onChange } }) => (
      <div className="mt-3 w-full flex">
        {isPrevious ? (
          <button
            className="flex-1  hover:bg-neutral-100 rounded-md p-3"
            onClick={() => {
              localStorage.setItem("step", step);
              onChange(step);
            }}
          >
            <div className="flex gap-2  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-3 h-3 text-neutral-500"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-neutral-500 ">Back </p>
            </div>
            <p className="font-medium text-left">{title}</p>
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem("step", step);
              onChange(step);
            }}
            className="flex-1  hover:bg-neutral-100 rounded-md p-3"
          >
            <div className="flex gap-2 justify-end items-center">
              <p className="text-sm font-medium text-neutral-500 ">Next </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3 h-3 text-neutral-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-medium text-right">{title}</p>
          </button>
        )}
      </div>
    )}
    name="step"
    defaultValue={getInitialValue("step") ?? "1"}
  />
);

export default StepButton;
