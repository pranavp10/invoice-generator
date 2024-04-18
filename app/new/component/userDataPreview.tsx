"use client";
import useItemParams from "@/app/hooks/useItemsParams";
import { useSearchParams } from "next/navigation";
import { PreviewDetails } from "@/app/component/form/previewDetails";

export const UserDataPreview = () => {
  const searchParams = useSearchParams();
  const yourEmail = searchParams.get("yourEmail");
  const yourName = searchParams.get("yourName");
  const yourAddress = searchParams.get("yourAddress");
  const yourCity = searchParams.get("yourCity");
  const yourState = searchParams.get("yourState");
  const yourCountry = searchParams.get("yourCountry");
  const yourLogo = searchParams.get("yourLogo");
  const yourTaxId = searchParams.get("yourTaxId");
  const yourZip = searchParams.get("yourZip");

  const email = searchParams.get("email");
  const companyName = searchParams.get("companyName");
  const companyAddress = searchParams.get("companyAddress");
  const companyCity = searchParams.get("companyCity");
  const companyState = searchParams.get("companyState");
  const companyCountry = searchParams.get("companyCountry");
  const companyLogo = searchParams.get("companyLogo");
  const companyTaxId = searchParams.get("companyTaxId");
  const companyZip = searchParams.get("companyZip");

  const note = searchParams.get("note");
  const discount = searchParams.get("discount");
  const taxRate = searchParams.get("tax");
  const { items } = useItemParams();

  const bankName = searchParams.get("bankName");
  const accountNumber = searchParams.get("accountNumber");
  const accountName = searchParams.get("accountName");
  const routingCode = searchParams.get("routingCode");
  const swiftCode = searchParams.get("swiftCode");
  const ifscCode = searchParams.get("ifscCode");

  const invoiceNumber = searchParams.get("invoiceNo");
  const issueDate = searchParams.get("issueDate");
  const dueDate = searchParams.get("dueDate");

  const currencyType = searchParams.get("currency") || "INR";

  const invoiceTerms = {
    invoiceNumber,
    issueDate,
    dueDate,
  };

  const invoiceDetails = {
    note,
    discount,
    taxRate,
    items,
    currencyType,
  };

  const paymentDetails = {
    bankName: bankName,
    accountNumber: accountNumber,
    accountName: accountName,
    routingCode: routingCode,
    swiftCode: swiftCode,
    ifscCode: ifscCode,
  };

  const yourDetails = {
    yourName,
    yourAddress,
    yourCity,
    yourState,
    yourCountry,
    yourLogo,
    yourEmail,
    yourTaxId,
    yourZip,
  };

  const companyDetails = {
    companyName,
    companyAddress,
    companyCity,
    companyState,
    companyCountry,
    companyLogo,
    companyTaxId,
    companyZip,
    email,
  };

  return (
    <PreviewDetails
      companyDetails={companyDetails}
      invoiceDetails={invoiceDetails}
      invoiceTerms={invoiceTerms}
      paymentDetails={paymentDetails}
      yourDetails={yourDetails}
    />
  );
};
