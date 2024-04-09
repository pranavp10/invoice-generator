"use client";
import { useState } from "react";
import CustomTextInput from "./ui/customTextInput";
import CustomDateInput from "./ui/customDateinput";
const InvoiceTerms = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">Invoice terms</p>
      <CustomTextInput
        label="Invoice number"
        placeholder="INVOICE-01"
        variableName="invoiceNo"
      />
      <CustomDateInput label="Issue date" variableName="issueDate" />
      <CustomDateInput label="Due date" variableName="dueDate" />
    </div>
  );
};

export default InvoiceTerms;
