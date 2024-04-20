"use client";
export const getInitialValue = (variableName: string, defaultValue?: string): string => {
  try {
    return localStorage.getItem(variableName) || defaultValue || "";
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return defaultValue || "";
  }
};

export const getItemValue = (): Item[] => {
  try {
    return getItems(localStorage.getItem("items"));
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return [
      {
        itemDescription: "",
      },
    ];
  }
};

const getItems = (items?: string | null): Item[] => {
  if (!items)
    return [
      {
        itemDescription: "",
      },
    ];
  try {
    return JSON.parse(items);
  } catch {
    return [
      {
        itemDescription: "",
      },
    ];
  }
};
