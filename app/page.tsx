"use client";
import CompanyDetails from "@/app/component/companyDetails";
import Steps from "./component/steps";
import YourDetails from "./component/yourDetails";
import { useSearchParams } from "next/navigation";
import PreviewDetails from "./component/previewDetails";
import InvoiceTerms from "./component/invoiceTerms";
import DownloadInvoice from "./component/downloadInvoice";
import PaymentDetails from "./component/paymentDetails";
import InvoiceDetails from "./component/invoiceDetails";

export default function Home() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";

  return (
    <div className="min-h-screen overflow-y-auto h-full flex items-center">
      <div className="max-w-lg min-h-screen w-full h-full p-12 border-r flex flex-col justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-lg" />
            <div>
              <p className="font-semibold">Invoice Generator</p>
              <p className="text-gray-500 text-sm">By Prolab</p>
            </div>
          </div>
          {step === "1" && <CompanyDetails />}
          {step === "2" && <YourDetails />}
          {step === "3" && <InvoiceDetails />}
          {step === "4" && <PaymentDetails />}
          {step === "5" && <InvoiceTerms />}
          {step === "6" && <DownloadInvoice />}
        </div>
        <Steps />
      </div>
      <div className="relative min-h-screen h-full w-full flex justify-center items-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <PreviewDetails />
      </div>
    </div>
  );
}
