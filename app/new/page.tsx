import { Suspense } from "react";
import PreviewDetails from "./components/previewDetails";
import Steps from "./components/steps";
import { InvoiceInputSteps } from "./components/invoiceInputSteps";
import Image from "next/image";

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center">
    <div className="max-w-lg min-h-screen w-full h-full p-12 border-r flex flex-col justify-between">
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src="/android-chrome-512x512.png"
            width={40}
            height={40}
            className="rounded-lg"
            alt="logo"
          />
          <div>
            <p className="font-semibold">Invoice Generator</p>
            <p className="text-orange-500 text-sm">By Prolab</p>
          </div>
        </div>
        <Suspense>
          <InvoiceInputSteps />
        </Suspense>
      </div>
      <Suspense>
        <Steps />
      </Suspense>
    </div>
    <div className="relative min-h-screen h-full w-full flex justify-center items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Suspense>
        <PreviewDetails />
      </Suspense>
    </div>
  </div>
);

export default Page;
