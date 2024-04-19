import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { tw } from "@/lib/tw";

export const PaymentDetailsPdf: React.FC<PaymentDetails> = ({
  bankName,
  accountNumber,
  accountName,
  routingCode,
  swiftCode,
  ifscCode,
  currencyType = "INR",
}) => {
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === currencyType.toLowerCase()
  )?.details;

  return (
    <View style={tw("grid grid-cols-2")}>
      <View style={tw("py-4 px-10 ")}>
        <Text
          style={tw("text-[11px] text-neutral-400 font-medium uppercase mb-3")}
        >
          Bank Details
        </Text>
        <View style={tw("space-y-1")}>
          <View style={tw("grid grid-cols-2 items-center")}>
            <Text style={tw("truncate text-xs font-medium text-gray-500")}>
              Bank Name
            </Text>
            {bankName ? (
              <Text
                style={tw(
                  "flex justify-end truncate text-xs font-medium text-gray-600"
                )}
              >
                {bankName}
              </Text>
            ) : (
              <View
                style={tw(
                  "rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse"
                )}
              />
            )}
          </View>
          <View style={tw("mb-2 grid grid-cols-2 items-center")}>
            <Text style={tw("truncate text-xs font-medium text-gray-500")}>
              Account Number
            </Text>
            {accountNumber ? (
              <Text
                style={tw(
                  "flex justify-end truncate text-xs font-medium text-gray-600"
                )}
              >
                {accountNumber}
              </Text>
            ) : (
              <View
                style={tw(
                  "rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse"
                )}
              />
            )}
          </View>
          <View style={tw("mb-2 grid grid-cols-2 items-center")}>
            <Text style={tw("truncate text-xs font-medium text-gray-500")}>
              Account Name
            </Text>
            {accountName ? (
              <Text
                style={tw(
                  "flex justify-end truncate text-xs font-medium text-gray-600"
                )}
              >
                {accountName}
              </Text>
            ) : (
              <View
                style={tw(
                  "rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse"
                )}
              />
            )}
          </View>
          <View style={tw("mb-2 grid grid-cols-2 items-center")}>
            <Text style={tw("truncate text-xs font-medium text-gray-500")}>
              Swift Code
            </Text>
            {swiftCode ? (
              <Text
                style={tw(
                  "flex justify-end truncate text-xs font-medium text-gray-600"
                )}
              >
                {swiftCode}
              </Text>
            ) : (
              <View
                style={tw(
                  "rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse"
                )}
              />
            )}
          </View>
          {routingCode && (
            <View style={tw("mb-2 grid grid-cols-2 items-center")}>
              <Text style={tw("truncate text-xs font-medium text-gray-500")}>
                Routing Code
              </Text>
              <Text
                style={tw(
                  "flex justify-end truncate text-xs font-medium text-gray-600"
                )}
              >
                {routingCode}
              </Text>
            </View>
          )}
          {ifscCode && (
            <View style={tw("mb-2 grid grid-cols-2 items-center")}>
              <Text style={tw("truncate text-xs font-medium text-gray-500")}>
                IFSC Code
              </Text>
              <Text
                style={tw(
                  "flex justify-end truncate text-xs font-medium text-gray-600"
                )}
              >
                {ifscCode}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={tw("py-4 px-10")}>
        <Text
          style={tw("text-[11px] text-neutral-400 font-medium uppercase mb-3")}
        >
          Payable in
        </Text>
        {currencyDetails && (
          <View style={tw("flex gap-2 justify-between items-center w-full")}>
            <View style={tw("flex gap-3 items-center")}>
              <View
                style={{
                  backgroundColor: currencyDetails.currencyColor,
                  ...tw(
                    "rounded-full w-7 h-7 text-sm flex justify-center items-center text-white text-center flex-shrink-0"
                  ),
                }}
              >
                {currencyDetails.currencySymbol}
              </View>
              <View>
                <Text style={tw("font-medium text-sm")}>
                  {currencyDetails.currencyName}
                </Text>
                <Text style={tw("text-xxs text-neutral-400")}>
                  {currencyDetails.currencyShortForm}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
