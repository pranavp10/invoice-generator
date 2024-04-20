/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";

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
    <Text>To</Text>
    <View>{companyLogo ? <Image src={companyLogo} /> : <View />}</View>
    {companyName ? <Text>{companyName}</Text> : <View />}
    {email ? <Text>{email}</Text> : <View />}
    <View>
      {companyAddress ? <Text>{companyAddress}</Text> : <View />}
      {companyAddress || companyState || companyZip ? (
        <Text>
          {companyCity}, {companyState} {companyZip}
        </Text>
      ) : (
        <View />
      )}
      {companyCountry ? <Text>{companyCountry}</Text> : <View />}
      {companyTaxId && <Text>Tax ID: {companyTaxId}</Text>}
    </View>
  </View>
);
