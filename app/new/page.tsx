import { NewInoviceForm } from "@/app/new/component/NewInoviceForm";
import { Suspense } from "react";

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center">
    <Suspense>
      <NewInoviceForm />
    </Suspense>
  </div>
);

export default Page;
