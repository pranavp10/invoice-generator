import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

const YourDetails = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Your Details</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. pranav@prolab.sh"
      variableName="yourEmail"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the your.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Your name"
      placeholder="Prolab Inc"
      variableName="yourName"
    />
    <CustomTextInput
      label="Address"
      placeholder="Whitefield Circle,12"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="Bangalore"
      variableName="yourCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Karnataka"
      variableName="yourState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="560066"
      variableName="yourZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="India"
      variableName="yourCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder="GSTIN 1234"
      variableName="yourTaxId"
    />
  </div>
);

export default YourDetails;
