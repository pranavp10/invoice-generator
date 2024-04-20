import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";

export const InvoiceDetailsPdf: React.FC<InvoiceItemDetails> = ({
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
      <View>
        <View>
          <Text>Description</Text>
        </View>
        <View>
          <View>
            <Text>QTY</Text>
          </View>
          <View>
            <Text>Price</Text>
          </View>
          <View>
            <Text>Amount</Text>
          </View>
        </View>
      </View>
      {items.map(({ itemDescription, amount, qty }, index) => (
        <View key={index}>
          <Text>{itemDescription}</Text>
          <View>
            <Text>{qty || 1}</Text>
            <Text>{amount ? addCommasToNumber(amount) : ""}</Text>
            <Text>
              {currencyDetails?.currencySymbol}
              {amount ? addCommasToNumber((qty ? qty : 1) * amount) : ""}
            </Text>
          </View>
        </View>
      ))}
      <View>
        {note ? (
          <View>
            <Text>Note</Text>
            <Text>{note}</Text>
          </View>
        ) : (
          <View />
        )}
        <View>
          <View>
            <Text>Subtotal</Text>
            <Text>
              {currencyDetails?.currencySymbol}
              {addCommasToNumber(subtotal)}
            </Text>
          </View>
          {discount && (
            <View>
              <Text>Discount</Text>
              <Text>
                {currencyDetails?.currencySymbol}
                {discount ? addCommasToNumber(+discount) : ""}
              </Text>
            </View>
          )}
          {taxRate && (
            <View>
              <Text>Tax ({taxRate})%</Text>
              <Text>
                {currencyDetails?.currencySymbol}
                {addCommasToNumber(+taxAmount.toFixed(2))}
              </Text>
            </View>
          )}
          <View>
            <View>
              <Text>Amount</Text>
            </View>
            <Text>
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
