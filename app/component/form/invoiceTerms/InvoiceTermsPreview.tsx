import { format } from "date-fns";

export const InvoiceTermsPreview: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => (
  <div className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed">
    <div>
      <p className="text-[11px] text-neutral-400 font-semibold uppercase">
        Invoice NO
      </p>
      <p className="font-medium text-xs">{invoiceNumber}</p>
    </div>
    <div className="flex items-center justify-between pl-10">
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase">
          Issued
        </p>
        <p className="font-medium text-xs">
          {issueDate ? format(issueDate, "do MMM yyyy'") : ""}
        </p>
      </div>
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase text-right">
          Due Date
        </p>
        <p className="font-medium text-xs">
          {dueDate ? format(dueDate, "do MMM yyyy'") : ""}
        </p>
      </div>
    </div>
  </div>
);
