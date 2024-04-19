import { tw } from "@/lib/tw";
import { View } from "@react-pdf/renderer";
import { YourDetailsPDF } from "./yourDetails/yourDetailsPdf";
import { InvoiceTermsPdf } from "./invoiceTerms/InvoiceTermsPdf";
import { CompanyDetailsPdf } from "./companyDetails/companyDetailsPdf";
import { InvoiceDetailsPdf } from "./invoiceDetails/invoiceDetailsPdf";
import { PaymentDetailsPdf } from "./paymentDetails/paymentDetailsPdf";

export const PdfDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
}) => (
  <View style={{ width: "100%" }}>
    <InvoiceTermsPdf {...invoiceTerms} />
    <View
      style={tw("border-b  grid grid-cols-2 justify-between border-dashed")}
    >
      <View style={tw("py-4 px-10 border-r border-dashed")}>
        <YourDetailsPDF {...yourDetails} />
      </View>
      <View style={tw("py-4 px-10 ")}>
        <CompanyDetailsPdf {...companyDetails} />
      </View>
    </View>
    <View style={tw("flex flex-col justify-between")}>
      <View style={tw("border-b justify-between border-dashed")}>
        <InvoiceDetailsPdf {...invoiceDetails} />
      </View>
      <View>
        <PaymentDetailsPdf {...paymentDetails} />
      </View>
    </View>
  </View>
);
