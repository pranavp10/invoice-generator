"use client";

import { Button } from "@/components/ui/button";
import { Document, Font, Page } from "@react-pdf/renderer";
import { CheckCircle2, Download, LoaderIcon, SplineIcon } from "lucide-react";
import { PdfDetails } from "../pdfDetails";
import { useData } from "@/app/hooks/useData";
import { pdfContainers } from "@/lib/pdfStyles";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { svgToDataUri } from "@/lib/svgToDataUri";
import { useEffect, useState } from "react";
import { currencyList } from "@/lib/currency";
export const DownloadInvoiceButton = () => {
  const [status, setStatus] = useState<
    "downloaded" | "downloading" | "not-downloaded"
  >("not-downloaded");
  const {
    companyDetails,
    invoiceDetails,
    invoiceTerms,
    paymentDetails,
    yourDetails,
  } = useData();

  useEffect(() => {
    if (status === "downloaded") {
      setTimeout(() => {
        setStatus("not-downloaded");
      }, 1000);
    }
  }, [status]);

  return (
    <div className="flex h-[calc(100vh-208px)] justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold pb-6">Your invoice is ready</h1>
        <p className="text-neutral-500 text-xl pb-7">
          Please review the details carefully before downloading your invoice.
        </p>
        <Button
          disabled={status === "downloading"}
          onClick={async () => {
            try {
              setStatus("downloading");
              const currencyDetails = currencyList.find(
                (currencyDetail) =>
                  currencyDetail.value.toLowerCase() ===
                  invoiceDetails.currency.toLowerCase()
              )?.details;

              const defaultCurrency = currencyList.find(
                (currencyDetail) =>
                  currencyDetail.value.toLowerCase() === "INR".toLowerCase()
              )?.details;

              const data = await fetch(
                `/flag/1x1/${
                  currencyDetails?.iconName || defaultCurrency?.iconName
                }.svg`
              );
              const svgFlag = await data.text();
              const countryImageUrl = await svgToDataUri(svgFlag);
              if (countryImageUrl) {
                const blob = await pdf(
                  <Document>
                    <Page size="A4" style={pdfContainers.page}>
                      <PdfDetails
                        companyDetails={companyDetails}
                        invoiceDetails={invoiceDetails}
                        invoiceTerms={invoiceTerms}
                        paymentDetails={paymentDetails}
                        yourDetails={yourDetails}
                        countryImageUrl={countryImageUrl}
                      />
                    </Page>
                  </Document>
                ).toBlob();
                saveAs(blob, "invoice.pdf");
                setStatus("downloaded");
              } else {
                setStatus("not-downloaded");
              }
            } catch (e) {
              console.error(e);
              setStatus("not-downloaded");
            }
          }}
          type="button"
          className="w-full h-12 rounded-lg text-lg"
        >
          {status === "not-downloaded" && (
            <>
              <Download className="mr-2 h-6 w-6" /> Download Invoice
            </>
          )}
          {status === "downloading" && (
            <>
              <LoaderIcon className="mr-2 h-6 w-6 animate-spin" />{" "}
              Downloading...
            </>
          )}
          {status === "downloaded" && (
            <>
              <CheckCircle2 className="mr-2 h-6 w-6" /> Downloaded
            </>
          )}
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
      src: "/font/Geist-SemiBold.ttf",
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
