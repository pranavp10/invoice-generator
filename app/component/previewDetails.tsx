import { useSearchParams } from "next/navigation";
import { HeaderDetails } from "./previewDetails/headerDetails";
import { CompanyDetails } from "./previewDetails/companyDetails";
import { YourDetails } from "./previewDetails/yourDetails";

const PreviewDetails = () => {
  const searchParams = useSearchParams();

  return (
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
};

export default PreviewDetails;
