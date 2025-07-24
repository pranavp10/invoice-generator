import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import SwitchInput from "@/app/component/ui/switchInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <SwitchInput
      label="Remove payment details"
      variableName="disablePaymentDetails"
    />
    <CustomTextInput
      label="Bank name"
      placeholder="HSBC"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account number"
      placeholder="8920804195"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Pranav"
      variableName="accountName"
    />
    <CustomTextInput
      label="Branch code"
      placeholder="123456"
      variableName="branchCode"
    />
    <CustomTextInput
      label="IFSC code"
      placeholder="HSBC0560002"
      variableName="ifscCode"
    />
    <CustomTextInput
      label="Routing number"
      placeholder="0804189592"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="HSBCINAA123"
      variableName="swiftCode"
    />
  </div>
);
