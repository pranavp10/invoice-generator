"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import CurrencyInput from "../ui/currencyInput";
import useQueryParams from "../../hooks/useQueryParams";
import { currencyList } from "@/lib/currency";

const InvoiceDetails = () => {
  const { value } = useQueryParams("currency", "INR");
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === value.toLowerCase()
  )?.details;

  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">Invoice Details</p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="pt-3 font-medium text-neutral-500">
            Select an invoice currency
          </p>
          <CurrencyInput />
        </div>
        <div>
          <p className="pt-3 font-medium text-sm text-neutral-500">Items</p>
          <div className="flex pt-5">
            <div className="w-full flex-1">
              <CustomTextInput placeholder="Item name" variableName="item" />
            </div>
            <div className="w-14">
              <CustomTextInput placeholder="Qat" variableName="qty" />
            </div>
            <div className="w-14">
              <CustomTextInput placeholder="Price" variableName="price" />
            </div>
          </div>
        </div>
        <div>
          <p className="pt-3 font-medium text-sm text-neutral-500 pb-5">Note</p>
          <CustomTextInput placeholder="Add a note" variableName="note" />
        </div>
        <div>
          <p className="pt-3 font-medium text-sm text-neutral-500 pb-5">
            More options
          </p>
          <CustomTextInput
            label="Discount"
            placeholder={`${currencyDetails?.currencySymbol}0`}
            variableName="discount"
          />
          <CustomTextInput label="Taxes" placeholder="0%" variableName="tax" />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
