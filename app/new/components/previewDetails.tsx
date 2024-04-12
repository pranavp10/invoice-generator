import { HeaderDetails } from "@/app/component/previewDetails/headerDetails";
import { CompanyDetails } from "@/app/component/previewDetails/companyDetails";
import { YourDetails } from "@/app/component/previewDetails/yourDetails";
import PaymentDetails from "@/app/component/previewDetails/paymentDetails";
import InvoiceDetails from "@/app/component/previewDetails/invoiceDetails";

const PreviewDetails = () => (
  <div className="max-w-[595px] w-full h-[842px] bg-white shadow-lg rounded-2xl border border-dashed justify-center items-center">
    <HeaderDetails />
    <div className="border-b  grid grid-cols-2 justify-between border-dashed">
      <div className="py-4 px-10 border-r border-dashed">
        <YourDetails />
      </div>
      <div className="py-4 px-10 ">
        <CompanyDetails />
      </div>
    </div>
    <div className="border-b justify-between border-dashed">
      <InvoiceDetails />
    </div>
    <div className="">
      <PaymentDetails />
    </div>
  </div>
);

export default PreviewDetails;
