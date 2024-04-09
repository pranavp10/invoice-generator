"use client";

import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

const DownloadInvoice = () => {
  const { push } = useRouter();
  return (
    <div className="flex h-[calc(100vh-208px)] justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold pb-6">Your invoice is ready</h1>
        <p className="text-neutral-500 text-xl pb-7">
          Please review the details carefully before downloading your invoice.
        </p>
        <Button className="w-full h-12 rounded-lg text-lg">
          <Download className="mr-2 h-6 w-6" /> Download Invoice
        </Button>
        <Button
          onClick={() => push("/")}
          variant="link"
          className="w-full h-12 text-lg"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Create a new invoice
        </Button>
      </div>
    </div>
  );
};

export default DownloadInvoice;
