"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import CurrencyInput from "../ui/currencyInput";
import useQueryParams from "../../hooks/useQueryParams";
import { currencyList } from "@/lib/currency";
import useItemParams from "@/app/hooks/useItemsParams";
import { Input } from "../ui/input";
import { Plus, Trash2 } from "lucide-react";
import CustomNumberInput from "../ui/customNumberInput";

const InvoiceDetails = () => {
  const { value } = useQueryParams("currency", "INR");
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === value.toLowerCase()
  )?.details;
  const { items, setValue } = useItemParams();

  const updateItem = () => {};

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
          <p className="py-3 font-medium text-sm text-neutral-500">Items</p>
          {items.map(({ itemDescription, amount, qty }, index: number) => (
            <div className="flex relative items-center group -ml-8" key={index}>
              <div className={`w-9 h-7 ${items.length === 1 && "invisible"}`}>
                <button
                  onClick={() => {
                    const newList = [...items];
                    newList.splice(index, 1);
                    setValue(newList);
                  }}
                  type="button"
                  className="flex-shrink-0 rounded-md p-1.5 group-hover:bg-gray-50 hidden group-hover:block"
                >
                  <Trash2 className="w-4 text-gray-500 h-4 group-hover:text-red-400" />
                </button>
              </div>
              <div className="w-full flex-1">
                <Input
                  placeholder="Item name"
                  value={itemDescription}
                  type="text"
                  onChange={(e) => {
                    const updatedArray = [...items];
                    updatedArray[index] = {
                      itemDescription: e.target.value,
                      amount,
                      qty,
                    };
                    setValue(updatedArray);
                  }}
                />
              </div>
              <div className="w-14">
                <Input
                  placeholder="Qat"
                  value={`${qty || ""}`}
                  type="text"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
                      const updatedArray = [...items];
                      updatedArray[index] = {
                        itemDescription,
                        amount,
                        qty: +inputValue,
                      };
                      setValue(updatedArray);
                    }
                  }}
                />
              </div>
              <div className="w-14">
                <Input
                  placeholder="Price"
                  value={`${amount || ""}`}
                  type="text"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
                      const updatedArray = [...items];
                      updatedArray[index] = {
                        itemDescription,
                        amount: +inputValue,
                        qty,
                      };
                      setValue(updatedArray);
                    }
                  }}
                />
              </div>
            </div>
          ))}
          <div className="py-3 border-dashed border-b border-gray-300">
            <button
              onClick={() => {
                setValue([...items, { itemDescription: "" }]);
              }}
              type="button"
              className="flex justify-center items-center text-orange-500 font-medium text-sm gap-2"
            >
              <Plus className="w-4 h-4" />
              <p>Add Item</p>
            </button>
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
          <CustomNumberInput
            label="Discount"
            placeholder={`${currencyDetails?.currencySymbol}0`}
            variableName="discount"
          />
          <CustomNumberInput
            label="Taxes"
            placeholder="0%"
            variableName="tax"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
