/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import { tw } from "@/lib/tw";

export const CompanyDetailsPdf: React.FC<CompanyDetails> = ({
  email,
  companyName,
  companyAddress,
  companyCity,
  companyState,
  companyCountry,
  companyLogo,
  companyTaxId,
  companyZip,
}) => (
  <View>
    <Text
      style={tw("text-[11px] text-neutral-400 font-semibold uppercase pb-3.5")}
    >
      To
    </Text>
    <View style={tw("h-10 mb-3")}>
      {companyLogo ? (
        <Image src={companyLogo} style={tw("h-10 rounded-md")} />
      ) : (
        <View
          style={tw("rounded-full bg-neutral-100 h-10 w-10 animate-pulse")}
        />
      )}
    </View>
    {companyName ? (
      <Text style={tw("text-2xl font-medium")}>{companyName}</Text>
    ) : (
      <View
        style={tw("rounded-md bg-neutral-100 h-5 w-5/6 animate-pulse mb-4")}
      />
    )}
    {email ? (
      <Text style={tw("text-neutral-500/90 text-sm mb-3")}>{email}</Text>
    ) : (
      <View
        style={tw("rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-2")}
      />
    )}
    <View style={tw("text-xs text-neutral-500/80")}>
      {companyAddress ? (
        <Text>{companyAddress}</Text>
      ) : (
        <View
          style={tw("rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2")}
        />
      )}
      {companyAddress || companyState || companyZip ? (
        <Text style={tw("mb-0.5")}>
          {companyCity}, {companyState} {companyZip}
        </Text>
      ) : (
        <View
          style={tw("rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-3")}
        />
      )}
      {companyCountry ? (
        <Text style={tw("mb-1")}>{companyCountry}</Text>
      ) : (
        <View
          style={tw("rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2")}
        />
      )}
      {companyTaxId && <Text>Tax ID: {companyTaxId}</Text>}
    </View>
  </View>
);
