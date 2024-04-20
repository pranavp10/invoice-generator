import { CompanyDetailsPreview } from "@/app/component/form/companyDetails/companyDetailsPreview";
import { InvoiceDetailsPreview } from "@/app/component/form/invoiceDetails/invoiceDetailsPreview";
import { InvoiceTermsPreview } from "@/app/component/form/invoiceTerms/InvoiceTermsPreview";
import { PaymentDetailsPreview } from "@/app/component/form/paymentDetails/paymentDetailsPreview";
import { YourDetailsPreview } from "@/app/component/form/yourDetails/yourDetailsPreview";

export const PreviewDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
}) => (
  <div className="max-w-[595px] w-full h-[842px] bg-white shadow-lg rounded-2xl border border-dashed justify-center items-center">
    <InvoiceTermsPreview {...invoiceTerms} />
    <div className="border-b  grid grid-cols-2 justify-between border-dashed">
      <div className="py-4 px-10 border-r border-dashed">
        <YourDetailsPreview {...yourDetails} />
      </div>
      <div className="py-4 px-10 ">
        <CompanyDetailsPreview {...companyDetails} />
      </div>
    </div>
    <div className="flex flex-col justify-between">
      <div className="border-b justify-between border-dashed">
        <InvoiceDetailsPreview {...invoiceDetails} />
      </div>
      <div className="">
        <PaymentDetailsPreview {...paymentDetails} />
      </div>
    </div>
  </div>
);
