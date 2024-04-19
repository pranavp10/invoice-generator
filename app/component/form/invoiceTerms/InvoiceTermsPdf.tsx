import React from "react";
import { Font, Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { tw } from "@/lib/tw";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => (
  <View
    style={{
      padding: "16px 40px",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row",
      flex: 1,
      fontFamily: "Oswald",
    }}
  >
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 11,
          color: "gray",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Invoice NO
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "medium" }}>
        {invoiceNumber}
      </Text>
    </View>
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        flex: 1,
        padding: "0px 40px",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: "11px",
            color: "gray",
            fontWeight: "semibold",
            textTransform: "uppercase",
          }}
        >
          Issued
        </Text>
        <Text style={{ fontSize: "12px", fontWeight: "medium" }}>
          {issueDate ? format(issueDate, "M/d/yy") : ""}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: "11px",
            color: "gray",
            fontWeight: "semibold",
            textTransform: "uppercase",
          }}
        >
          Due Date
        </Text>
        <Text style={{ fontSize: "12px", fontWeight: "medium" }}>
          {dueDate ? format(dueDate, "M/d/yy") : ""}
        </Text>
      </View>
    </View>
  </View>
);
