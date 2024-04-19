import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { tw } from "@/lib/tw";
import { Item } from "@/app/hooks/useItemsParams";

export const InvoiceDetailsPdf: React.FC<InvoiceDetails> = ({
  note,
  discount,
  taxRate,
  items,
  currency = "INR",
}) => {
  const currencyType = currency;
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === currencyType.toLowerCase()
  )?.details;
  const subtotal = calculateTotalAmount(items);
  const discountAmount = subtotal - (discount ? +discount : 0);
  const taxAmount = discountAmount * ((taxRate ? +taxRate : 0) / 100);
  const totalAmount = discountAmount + taxAmount;

  return (
    <View>
      <View style={tw("grid grid-cols-2 items-center")}>
        <View style={tw("py-4 px-10")}>
          <Text
            style={tw("text-[11px] text-neutral-400 font-medium uppercase")}
          >
            Description
          </Text>
        </View>
        <View style={tw("py-4 px-10 grid grid-cols-3 items-center")}>
          <View>
            <Text
              style={tw("text-[11px] text-neutral-400 font-medium uppercase")}
            >
              QTY
            </Text>
          </View>
          <View>
            <Text
              style={tw("text-[11px] text-neutral-400 font-medium uppercase")}
            >
              Price
            </Text>
          </View>
          <View>
            <Text
              style={tw(
                "text-[11px] text-neutral-400 font-medium uppercase text-right"
              )}
            >
              Amount
            </Text>
          </View>
        </View>
      </View>
      {items.map(({ itemDescription, amount, qty }, index) => (
        <View
          key={index}
          style={tw(
            `grid grid-cols-2 items-center border-b ${
              index === 0 ? "border-t" : ""
            } border-dashed mx-10 py-3`
          )}
        >
          <Text style={tw("flex truncate text-xs font-medium text-gray-600")}>
            {itemDescription}
          </Text>
          <View style={tw("pl-10 grid grid-cols-3 items-center")}>
            <Text style={tw("flex truncate text-xs font-medium text-gray-600")}>
              {qty || 1}
            </Text>
            <Text style={tw("flex truncate text-xs font-medium text-gray-600")}>
              {amount ? addCommasToNumber(amount) : ""}
            </Text>
            <Text
              style={tw(
                "flex items-end w-full text-xs font-medium text-gray-600 text-right justify-end"
              )}
            >
              {currencyDetails?.currencySymbol}
              {amount ? addCommasToNumber((qty ? qty : 1) * amount) : ""}
            </Text>
          </View>
        </View>
      ))}
      <View style={tw("grid grid-cols-2")}>
        {note ? (
          <View style={tw("pt-6")}>
            <Text
              style={tw(
                "flex truncate text-xs font-medium text-neutral-400 pb-1 px-10"
              )}
            >
              Note
            </Text>
            <Text style={tw("text-xs font-medium text-neutral-400 px-10")}>
              {note}
            </Text>
          </View>
        ) : (
          <View />
        )}
        <View>
          <View
            style={tw(
              "flex justify-between items-center mx-10 border-b border-dashed py-3"
            )}
          >
            <Text style={tw("flex truncate text-xs font-medium text-gray-600")}>
              Subtotal
            </Text>
            <Text style={tw("flex truncate text-xs font-medium text-gray-600")}>
              {currencyDetails?.currencySymbol}
              {addCommasToNumber(subtotal)}
            </Text>
          </View>
          {discount && (
            <View
              style={tw(
                "flex justify-between items-center mx-10 border-b border-dashed py-3"
              )}
            >
              <Text
                style={tw("flex truncate text-xs font-medium text-gray-600")}
              >
                Discount
              </Text>
              <Text
                style={tw("flex truncate text-xs font-medium text-gray-600")}
              >
                {currencyDetails?.currencySymbol}
                {discount ? addCommasToNumber(+discount) : ""}
              </Text>
            </View>
          )}
          {taxRate && (
            <View
              style={tw(
                "flex justify-between items-center mx-10 border-b border-dashed py-3"
              )}
            >
              <Text
                style={tw("flex truncate text-xs font-medium text-gray-600")}
              >
                Tax ({taxRate})%
              </Text>
              <Text
                style={tw("flex truncate text-xs font-medium text-gray-600")}
              >
                {currencyDetails?.currencySymbol}
                {addCommasToNumber(+taxAmount.toFixed(2))}
              </Text>
            </View>
          )}
          <View style={tw("flex justify-between items-center px-10 py-3")}>
            <View>
              <Text
                style={tw("flex truncate text-xs font-medium text-gray-600")}
              >
                Amount
              </Text>
            </View>
            <Text style={tw("flex truncate text-md font-medium")}>
              {currencyDetails?.currencySymbol}
              {addCommasToNumber(totalAmount)}
            </Text>
          </View>
        </View>
      </View>
    </View>
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
