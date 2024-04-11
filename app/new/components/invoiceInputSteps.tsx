"use client";

import DownloadInvoice from "@/app/component/inputDetails/downloadInvoice";
import InvoiceDetails from "@/app/component/inputDetails/invoiceDetails";
// import InvoiceTerms from "@/app/component/inputDetails/invoiceTerms";
import PaymentDetails from "@/app/component/inputDetails/paymentDetails";
import CompanyDetails from "@/app/component/inputDetails/companyDetails";
import YourDetails from "@/app/component/inputDetails/yourDetails";
import { useSearchParams } from "next/navigation";

export const InvoiceInputSteps = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";

  return (
    <>
      {step === "1" && <CompanyDetails />}
      {step === "2" && <YourDetails />}
      {step === "3" && <InvoiceDetails />}
      {step === "4" && <PaymentDetails />}
      {/* {step === "5" && <InvoiceTerms />} */}
      {step === "6" && <DownloadInvoice />}
    </>
  );
};
