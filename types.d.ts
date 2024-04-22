interface CompanyDetails {
  email?: string | null;
  companyName?: string | null;
  companyAddress?: string | null;
  companyCity?: string | null;
  companyState?: string | null;
  companyCountry?: string | null;
  companyLogo?: string | null;
  companyTaxId?: string | null;
  companyZip?: string | null;
}

interface YourDetails {
  yourEmail?: string | null;
  yourName?: string | null;
  yourAddress?: string | null;
  yourCity?: string | null;
  yourState?: string | null;
  yourCountry?: string | null;
  yourLogo?: string | null;
  yourTaxId?: string | null;
  yourZip?: string | null;
}

interface InvoiceItemDetails {
  note?: string | null;
  discount?: string | null;
  taxRate?: string | null;
  items: Item[];
  currency?: string;
}

interface Item {
  itemDescription: string;
  qty?: number;
  amount?: number;
}

interface InvoiceTerms {
  invoiceNumber?: string | null;
  issueDate?: string | null;
  dueDate?: string | null;
}

interface PaymentDetails {
  bankName?: string | null;
  accountNumber?: string | null;
  accountName?: string | null;
  routingCode?: string | null;
  swiftCode?: string | null;
  ifscCode?: string | null;
  currency?: string;
}

type InvoiceData = PaymentDetails &
  InvoiceTerms &
  InvoiceItemDetails &
  YourDetails &
  CompanyDetails;
