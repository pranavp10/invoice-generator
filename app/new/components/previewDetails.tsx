import { HeaderDetails } from "@/app/component/previewDetails/headerDetails";
import { CompanyDetails } from "@/app/component/previewDetails/companyDetails";
import { YourDetails } from "@/app/component/previewDetails/yourDetails";

const PreviewDetails = () => (
  <div className="max-w-2xl w-full min-h-[calc(100vh-100px)] bg-white shadow-lg rounded-2xl border justify-center items-center">
    <HeaderDetails />
    <div className="border-b  grid grid-cols-2 justify-between">
      <div className="py-4 px-10 border-r">
        <CompanyDetails />
      </div>
      <div className="py-4 px-10 ">
        <YourDetails />
      </div>
    </div>
  </div>
);

export default PreviewDetails;
