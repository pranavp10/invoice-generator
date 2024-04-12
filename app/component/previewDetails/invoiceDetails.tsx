"use client";
import { currencyList } from "@/lib/currency";
import { useSearchParams } from "next/navigation";

const InvoiceDetails = () => {
  const searchParams = useSearchParams();
  const bankName = searchParams.get("bankName");
  const accountNumber = searchParams.get("accountNumber");
  const accountName = searchParams.get("accountName");
  const routingCode = searchParams.get("routingCode");
  const swiftCode = searchParams.get("swiftCode");
  const ifscCode = searchParams.get("ifscCode");
  const currencyType = searchParams.get("currency") || "INR";
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === currencyType.toLowerCase()
  )?.details;

  return (
    <div className="grid grid-cols-2 items-center">
      <div className="py-4 px-10 ">
        <p className="text-[11px] text-neutral-400 font-medium uppercase">
          Description
        </p>
      </div>
      <div className="py-4 px-10 grid grid-cols-3 items-center">
        <div>
          <p className="text-[11px] text-neutral-400 font-medium uppercase">
            QTY
          </p>
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-medium uppercase">
            Price
          </p>
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-medium uppercase text-right">
            Amount
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
