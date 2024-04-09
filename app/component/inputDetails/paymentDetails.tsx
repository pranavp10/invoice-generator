import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

const PaymentDetails = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder="HSBC"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="Bank account number"
      placeholder="8920804195"
      variableName="companyCity"
    />
    <CustomTextInput
      label="Account holder name"
      placeholder="Pranav"
      variableName="accountHolderName"
    />
    <CustomTextInput
      label="IFSC code"
      placeholder="HSBC0560002"
      variableName="ifscCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="HSBCINAA123"
      variableName="swiftCode"
    />
  </div>
);

export default PaymentDetails;
