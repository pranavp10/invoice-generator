"use client";

import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

export const YourDetails = () => {
  const searchParams = useSearchParams();
  const invoiceNumber = searchParams.get("invoiceNo");
  const issueDate = searchParams.get("issueDate");
  const dueDate = searchParams.get("dueDate");

  return <div>s</div>;
};
