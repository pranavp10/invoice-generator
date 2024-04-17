/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";

export const YourDetails = () => {
  const searchParams = useSearchParams();
  const yourEmail = searchParams.get("yourEmail");
  const yourName = searchParams.get("yourName");
  const yourAddress = searchParams.get("yourAddress");
  const yourCity = searchParams.get("yourCity");
  const yourState = searchParams.get("yourState");
  const yourCountry = searchParams.get("yourCountry");
  const yourLogo = searchParams.get("yourLogo");
  const yourTaxId = searchParams.get("yourTaxId");
  const yourZip = searchParams.get("yourZip");

  return (
    <div className="">
      <p className="text-[11px] text-neutral-400 font-semibold uppercase pb-3.5">
        From
      </p>
      <div className="h-10 mb-3">
        {yourLogo ? (
          <img src={yourLogo} alt="Company Logo" className="h-10 rounded-md" />
        ) : (
          <div className="rounded-full bg-neutral-100 h-10 w-10 animate-pulse" />
        )}
      </div>
      {yourName ? (
        <p className="text-2xl font-medium">{yourName}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-5 w-5/6  animate-pulse mb-4" />
      )}
      {yourEmail ? (
        <p className="text-neutral-500/90 text-sm mb-3">{yourEmail}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-2" />
      )}
      <div className="text-xs text-neutral-500/80">
        {yourAddress ? (
          <p>{yourAddress}</p>
        ) : (
          <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
        )}
        {yourAddress || yourState || yourZip ? (
          <p className="mb-0.5">
            {yourCity}, {yourState} {yourZip}
          </p>
        ) : (
          <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-3" />
        )}
        {yourCountry ? (
          <p className="mb-1">{yourCountry}</p>
        ) : (
          <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
        )}
        {yourTaxId && <p>Tax ID:{yourTaxId}</p>}
      </div>
    </div>
  );
};
