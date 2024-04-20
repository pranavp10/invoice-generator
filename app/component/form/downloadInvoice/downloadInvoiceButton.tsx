"use client";

import { Button } from "@/components/ui/button";
import { Document, Font, PDFDownloadLink, Page } from "@react-pdf/renderer";
import { Download, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { PdfDetails } from "../pdfDetails";
import { useData } from "@/app/hooks/useData";
import { pdfContainers } from "@/lib/pdfStyles";

export const DownloadInvoiceButton = () => {
  const { push } = useRouter();
  const {
    companyDetails,
    invoiceDetails,
    invoiceTerms,
    paymentDetails,
    yourDetails,
  } = useData();

  return (
    <div className="flex h-[calc(100vh-208px)] justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold pb-6">Your invoice is ready</h1>
        <p className="text-neutral-500 text-xl pb-7">
          Please review the details carefully before downloading your invoice.
        </p>
        <PDFDownloadLink
          fileName="invoice.pdf"
          document={
            <Document>
              <Page size="A4" style={pdfContainers.page}>
                <PdfDetails
                  companyDetails={companyDetails}
                  invoiceDetails={invoiceDetails}
                  invoiceTerms={invoiceTerms}
                  paymentDetails={paymentDetails}
                  yourDetails={yourDetails}
                />
              </Page>
            </Document>
          }
        >
          {({ loading }) =>
            loading ? (
              <Button className="w-full h-12 rounded-lg text-lg">
                <Download className="mr-2 h-6 w-6" /> Loading Invoice
              </Button>
            ) : (
              <Button className="w-full h-12 rounded-lg text-lg">
                <Download className="mr-2 h-6 w-6" /> Download Invoice
              </Button>
            )
          }
        </PDFDownloadLink>
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

Font.register({
  family: "Geist",
  fonts: [
    {
      src: "/font/Geist-Thin.ttf",
      fontWeight: "thin",
    },
    {
      src: "/font/Geist-Ultralight.ttf",
      fontWeight: "ultralight",
    },
    {
      src: "/font/Geist-Light.ttf",
      fontWeight: "light",
    },
    {
      src: "/font/Geist-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/font/Geist-Medium.ttf",
      fontWeight: "medium",
    },
    {
      src: "/font/Geist-Semibold.ttf",
      fontWeight: "semibold",
    },
    {
      src: "/font/Geist-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "/font/Geist-UltraBlack.ttf",
      fontWeight: "ultrabold",
    },
  ],
});
