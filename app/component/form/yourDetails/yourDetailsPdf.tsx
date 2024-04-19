/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Image, Page, Text, View } from "@react-pdf/renderer";
import { tw } from "@/lib/tw";

export const YourDetailsPDF: React.FC<YourDetails> = ({
  yourEmail,
  yourName,
  yourAddress,
  yourCity,
  yourState,
  yourCountry,
  yourLogo,
  yourTaxId,
  yourZip,
}) => (
  <View>
    <Text
      style={tw("text-[11px] text-neutral-400 font-semibold uppercase pb-3.5")}
    >
      From
    </Text>
    <View style={tw("h-10 mb-3")}>
      {yourLogo ? (
        <Image source={yourLogo} style={tw("h-10 rounded-md")} />
      ) : (
        <View
          style={tw("rounded-full bg-neutral-100 h-10 w-10 animate-pulse")}
        />
      )}
    </View>
    {yourName ? (
      <Text style={tw("text-2xl font-medium")}>{yourName}</Text>
    ) : (
      <View
        style={tw("rounded-md bg-neutral-100 h-5 w-5/6  animate-pulse mb-4")}
      />
    )}
    {yourEmail ? (
      <Text style={tw("text-neutral-500/90 text-sm mb-3")}>{yourEmail}</Text>
    ) : (
      <View
        style={tw("rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-2")}
      />
    )}
    <View style={tw("text-xs text-neutral-500/80")}>
      {yourAddress ? (
        <p>{yourAddress}</p>
      ) : (
        <View
          style={tw("rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2")}
        />
      )}
      {yourAddress || yourState || yourZip ? (
        <Text style={tw("mb-0.5")}>
          {yourCity}, {yourState} {yourZip}
        </Text>
      ) : (
        <View
          style={tw("rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-3")}
        />
      )}
      {yourCountry ? (
        <Text style={tw("mb-1")}>{yourCountry}</Text>
      ) : (
        <View
          style={tw("rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2")}
        />
      )}
      {yourTaxId && <Text>Tax ID:{yourTaxId}</Text>}
    </View>
  </View>
);
