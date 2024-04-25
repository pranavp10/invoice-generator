/* eslint-disable @next/next/no-img-element */
import React from "react";
import { currencyList } from "@/lib/currency";
import { ChevronDown } from "lucide-react";

export const InvoiceDetailsPreview: React.FC<
  InvoiceItemDetails & { onClick?: (step: string) => void }
> = ({ note, discount, taxRate, items, currency = "INR", onClick }) => {
  const currencyType = currency;
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === currencyType.toLowerCase()
  )?.details;
  const subtotal = calculateTotalAmount(items);
  const discountAmount = subtotal - (discount ? +discount : 0);
  const taxAmount = discountAmount * ((taxRate ? +taxRate : 0) / 100);
  const totalAmount = discountAmount + taxAmount;

  return (
    <div
      className="group cursor-pointer relative"
      onClick={() => onClick && onClick("3")}
    >
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
        </>
      )}
      <div className="grid grid-cols-2 items-center">
        <div className="py-4 px-10">
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
      {items.map(({ itemDescription, amount, qty }, index) => (
        <div
          className={`grid grid-cols-2 items-center border-b ${
            index === 0 ? "border-t" : ""
          } border-dashed mx-10 py-3`}
          key={index}
        >
          <p className="flex truncate text-xs font-medium text-gray-600">
            {itemDescription}
          </p>
          <div className="pl-10 grid grid-cols-3 items-center">
            <p className="flex truncate text-xs font-medium text-gray-600">
              {qty || "-"}
            </p>
            <p className="flex truncate text-xs font-medium text-gray-600">
              {amount ? addCommasToNumber(amount) : ""}
            </p>
            <p className="flex items-end w-full text-xs font-medium text-gray-600 text-right justify-end">
              {currencyDetails?.currencySymbol}
              {amount ? addCommasToNumber((qty ? qty : 1) * amount) : ""}
            </p>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2">
        {note ? (
          <div className="pt-6 pb-4">
            <p className="flex truncate text-xs font-medium text-neutral-400 pb-1 px-10">
              Note
            </p>
            <p className="text-xs font-medium text-neutral-400 px-10 break-words">
              {note}
            </p>
          </div>
        ) : (
          <div />
        )}
        <div>
          <div className="flex justify-between items-center mx-10 border-b border-dashed py-3">
            <p className="flex truncate text-xs font-medium text-gray-600">
              Subtotal
            </p>
            <p className="flex truncate text-xs font-medium text-gray-600">
              {currencyDetails?.currencySymbol}
              {addCommasToNumber(subtotal)}
            </p>
          </div>
          {discount && (
            <div className="flex justify-between items-center mx-10 border-b border-dashed py-3">
              <p className="flex truncate text-xs font-medium text-gray-600">
                Discount
              </p>
              <p className="flex truncate text-xs font-medium text-gray-600">
                {currencyDetails?.currencySymbol}
                {discount ? addCommasToNumber(+discount) : ""}
              </p>
            </div>
          )}
          {taxRate && (
            <div className="flex justify-between items-center mx-10 border-b border-dashed py-3">
              <p className="flex truncate text-xs font-medium text-gray-600">
                Tax ({taxRate})%
              </p>
              <p className="flex truncate text-xs font-medium text-gray-600">
                {currencyDetails?.currencySymbol}
                {addCommasToNumber(+taxAmount.toFixed(2))}
              </p>
            </div>
          )}
          <div className="flex justify-between items-center px-10 py-3">
            <div>
              <p className="flex truncate text-xs font-medium text-gray-600">
                Amount
              </p>
            </div>
            <p className="flex truncate text-md font-medium">
              {currencyDetails?.currencySymbol}
              {addCommasToNumber(totalAmount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateTotalAmount = (items: Item[]): number =>
  items.reduce((total, item) => {
    const quantity = item.qty ? +item.qty : 1;
    const amount = item.amount ? +item.amount : 0;
    return total + quantity * amount;
  }, 0);

const addCommasToNumber = (number: number): string => {
  let numberString = number.toString();
  const parts = numberString.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
