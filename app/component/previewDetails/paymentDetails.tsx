"use client";
import { currencyList } from "@/lib/currency";
import { useSearchParams } from "next/navigation";

const PaymentDetails = () => {
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
    <div className="grid grid-cols-2">
      <div className="py-4 px-10 ">
        <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
          Bank Details
        </p>
        <div className="space-y-1">
          <div className="grid grid-cols-2 items-center">
            <p className="truncate text-xs font-medium text-gray-500">
              Bank Name
            </p>
            {bankName ? (
              <p className="flex justify-end truncate text-xs font-medium text-gray-600">
                {bankName}
              </p>
            ) : (
              <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
            )}
          </div>
          <div className="mb-2 grid grid-cols-2 items-center">
            <p className="truncate text-xs font-medium text-gray-500">
              Account Number
            </p>
            {accountNumber ? (
              <p className="flex justify-end truncate text-xs font-medium text-gray-600">
                {accountNumber}
              </p>
            ) : (
              <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
            )}
          </div>
          <div className="mb-2 grid grid-cols-2 items-center">
            <p className="truncate text-xs font-medium text-gray-500">
              Account Name
            </p>
            {accountName ? (
              <p className="flex justify-end truncate text-xs font-medium text-gray-600">
                {accountName}
              </p>
            ) : (
              <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
            )}
          </div>
          <div className="mb-2 grid grid-cols-2 items-center">
            <p className="truncate text-xs font-medium text-gray-500">
              Swift Code
            </p>
            {swiftCode ? (
              <p className="flex justify-end truncate text-xs font-medium text-gray-600">
                {swiftCode}
              </p>
            ) : (
              <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
            )}
          </div>
          {routingCode && (
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-xs font-medium text-gray-500">
                Routing Code
              </p>
              <p className="flex justify-end truncate text-xs font-medium text-gray-600">
                {routingCode}
              </p>
            </div>
          )}
          {ifscCode && (
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-xs font-medium text-gray-500">
                IFSC Code
              </p>
              <p className="flex justify-end truncate text-xs font-medium text-gray-600">
                {ifscCode}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="py-4 px-10">
        <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
          Payable in
        </p>
        {currencyDetails && (
          <div className="flex gap-2 justify-between items-center w-full">
            <div className="flex gap-3 items-center">
              <div
                style={{ background: currencyDetails.currencyColor }}
                className="rounded-full w-7 h-7 text-sm flex justify-center items-center text-white text-center flex-shrink-0"
              >
                {currencyDetails.currencySymbol}
              </div>
              <div>
                <p className="font-medium text-sm">
                  {currencyDetails.currencyName}
                </p>
                <p className="text-xxs text-neutral-400">
                  {currencyDetails.currencyShortForm}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;
