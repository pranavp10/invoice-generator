"use client";

import { DownloadInvoiceButton } from "@/app/component/form/downloadInvoice/downloadInvoiceButton";
import { InvoiceDetailsForm } from "@/app/component/form/invoiceDetails/invoiceDetailsForm";
import { InvoiceTermsForm } from "@/app/component/form/invoiceTerms/invoiceTermsForm";
import { PaymentDetailsForm } from "@/app/component/form/paymentDetails/paymentDetailsForm";
import { CompanyDetailsForm } from "@/app/component/form/companyDetails/companyDetailsForm";
import { YourDetailsForm } from "@/app/component/form/yourDetails/yourDetailsForm";
import { useSearchParams } from "next/navigation";

export const UserInputForm = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";

  return (
    <div>
      {step === "1" && <CompanyDetailsForm />}
      {step === "2" && <YourDetailsForm />}
      {step === "3" && <InvoiceDetailsForm />}
      {step === "4" && <PaymentDetailsForm />}
      {step === "5" && <InvoiceTermsForm />}
      {step === "6" && <DownloadInvoiceButton />}
    </div>
  );
};
