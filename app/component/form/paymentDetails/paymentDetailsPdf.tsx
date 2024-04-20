import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";

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
    <View>
      <View>
        <Text>Bank Details</Text>
        <View>
          <View>
            <Text>Bank Name</Text>
            {bankName ? <Text>{bankName}</Text> : <View />}
          </View>
          <View>
            <Text>Account Number</Text>
            {accountNumber ? <Text>{accountNumber}</Text> : <View />}
          </View>
          <View>
            <Text>Account Name</Text>
            {accountName ? <Text>{accountName}</Text> : <View />}
          </View>
          <View>
            <Text>Swift Code</Text>
            {swiftCode ? <Text>{swiftCode}</Text> : <View />}
          </View>
          {routingCode && (
            <View>
              <Text>Routing Code</Text>
              <Text>{routingCode}</Text>
            </View>
          )}
          {ifscCode && (
            <View>
              <Text>IFSC Code</Text>
              <Text>{ifscCode}</Text>
            </View>
          )}
        </View>
      </View>
      <View>
        <Text>Payable in</Text>
        {currencyDetails && (
          <View>
            <View>
              <View>{currencyDetails.currencySymbol}</View>
              <View>
                <Text>{currencyDetails.currencyName}</Text>
                <Text>{currencyDetails.currencyShortForm}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
