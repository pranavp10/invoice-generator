"use client";

import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

export const HeaderDetails = () => {
  const searchParams = useSearchParams();
  const invoiceNumber = searchParams.get("invoiceNo");
  const issueDate = searchParams.get("issueDate");
  const dueDate = searchParams.get("dueDate");

  return (
    <div className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed">
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase">
          Invoice NO
        </p>
        <p className="font-medium text-xs">{invoiceNumber}</p>
      </div>
      <div className="flex items-center gap-4 px-10">
        <div>
          <p className="text-[11px] text-neutral-400 font-semibold uppercase">
            Issued
          </p>
          <p className="font-medium text-xs">
            {issueDate ? format(issueDate, "M/d/yy'") : ""}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-semibold uppercase">
            Due Date
          </p>
          <p className="font-medium text-xs">
            {dueDate ? format(dueDate, "M/d/yy'") : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
