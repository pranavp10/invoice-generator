"use client";
export const getInitialValue = (variableName: string): string => {
  try {
    return localStorage.getItem(variableName) || "";
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return "";
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
