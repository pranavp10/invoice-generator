import {
  US,
  IN,
  EU,
  JP,
  KR,
  IL,
  VN,
  BD,
  RU,
  BR,
  UA,
  KZ,
  TW,
  GB,
  FlagComponent,
  ID,
} from "country-flag-icons/react/1x1";

export const currencyList: {
  value: string;
  label: string;
  details: {
    country: string;
    currencySymbol: string;
    currencyName: string;
    currencyShortForm: string;
    icon: FlagComponent;
    iconName: string;
  };
}[] = [
  {
    value: "INR",
    label: "INR",
    details: {
      country: "India",
      currencySymbol: "₹",
      currencyName: "Indian Rupee",
      currencyShortForm: "INR",
      icon: IN,
      iconName: "IN",
    },
  },
  {
    value: "USD",
    label: "USD",
    details: {
      country: "United States",
      currencySymbol: "$",
      currencyName: "United States Dollar",
      currencyShortForm: "USD",
      icon: US,
      iconName: "US",
    },
  },
  {
    value: "EUR",
    label: "EUR",
    details: {
      country: "European Union",
      currencySymbol: "€",
      currencyName: "Euro",
      currencyShortForm: "EUR",
      icon: EU,
      iconName: "EU",
    },
  },
  {
    value: "GBP",
    label: "GBP",
    details: {
      country: "United Kingdom",
      currencySymbol: "£",
      currencyName: "British Pound Sterling",
      currencyShortForm: "GBP",
      icon: GB,
      iconName: "GB",
    },
  },
  {
    value: "JPY",
    label: "JPY",
    details: {
      country: "Japan",
      currencySymbol: "¥",
      currencyName: "Japanese Yen",
      currencyShortForm: "JPY",
      icon: JP,
      iconName: "JP",
    },
  },
  {
    value: "KRW",
    label: "KRW",
    details: {
      country: "South Korea",
      currencySymbol: "₩",
      currencyName: "South Korean Won",
      currencyShortForm: "KRW",
      icon: KR,
      iconName: "KR",
    },
  },
  {
    value: "ILS",
    label: "ILS",
    details: {
      country: "Israel",
      currencySymbol: "₪",
      currencyName: "Israeli Shekel",
      currencyShortForm: "ILS",
      icon: IL,
      iconName: "IL",
    },
  },
  {
    value: "VND",
    label: "VND",
    details: {
      country: "Vietnam",
      currencySymbol: "₫",
      currencyName: "Vietnamese Dong",
      currencyShortForm: "VND",
      icon: VN,
      iconName: "VN",
    },
  },
  {
    value: "BDT",
    label: "BDT",
    details: {
      country: "Bangladesh",
      currencySymbol: "৳",
      currencyName: "Bangladeshi Taka",
      currencyShortForm: "BDT",
      icon: BD,
      iconName: "BD",
    },
  },
  {
    value: "RUB",
    label: "RUB",
    details: {
      country: "Russia",
      currencySymbol: "₽",
      currencyName: "Russian Ruble",
      currencyShortForm: "RUB",
      icon: RU,
      iconName: "RU",
    },
  },
  {
    value: "BRL",
    label: "BRL",
    details: {
      country: "Brazil",
      currencySymbol: "R$",
      currencyName: "Brazilian Real",
      currencyShortForm: "BRL",
      icon: BR,
      iconName: "BR",
    },
  },
  {
    value: "UAH",
    label: "UAH",
    details: {
      country: "Ukraine",
      currencySymbol: "₴",
      currencyName: "Ukrainian Hryvnia",
      currencyShortForm: "UAH",
      icon: UA,
      iconName: "UA",
    },
  },
  {
    value: "KZT",
    label: "KZT",
    details: {
      country: "Kazakhstan",
      currencySymbol: "₸",
      currencyName: "Kazakhstani Tenge",
      currencyShortForm: "KZT",
      icon: KZ,
      iconName: "KZ",
    },
  },
  {
    value: "TWD",
    label: "TWD",
    details: {
      country: "Taiwan",
      currencySymbol: "NT$",
      currencyName: "New Taiwan Dollar",
      currencyShortForm: "TWD",
      icon: TW,
      iconName: "TW",
    },
  },
  {
    value: "IDR",
    label: "IDR",
    details: {
      country: "Indonesia",
      currencySymbol: "Rp",
      currencyName: "Indonesian Rupiah",
      currencyShortForm: "IDR",
      icon: ID,
      iconName: "ID",
    },
  },
];
