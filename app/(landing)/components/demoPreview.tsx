import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Innovate Elite",
    companyAddress: "46 Coit Rd, Suite 40",
    companyCity: "Frisco",
    companyState: "TX",
    companyCountry: "USA",
    companyLogo: "/IE Logo White.jpg",
    companyTaxId: "",
    companyZip: "75035",
    email: "info@innovateelite.com",
  },
  yourDetails: {
    yourName: "Obix Digital",
    yourAddress: "Dohraji, Karachi,",
    yourCity: "Karachi",
    yourState: "sindh",
    yourCountry: "Pakistan",
    yourLogo: "/logo web-01.png",
    yourEmail: "info@obixdigital.com",
    yourTaxId: "",
    yourZip: "360410",
  },
  paymentDetails: {
    bankName: "PayPal",
    accountNumber: "1234567890",
    accountName: "Obix Digital",
    routingCode: "123456",
    swiftCode: "OBIXINBB1234",
    ifscCode: "OBIX0000000",
    currency: "USD",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri July 25 2025 00:00:00 GMT+05 (Pakistan Standard Time)",
    dueDate: "Mon August 04 2024 00:00:00 GMT+05 (Pakistan Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "150",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 2200,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 200,
        qty: 0,
      },
    ],
    currency: "USD",
  },
};
export default DemoPreview;
