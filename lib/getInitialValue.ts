export const getInitialValue = (variableName: string): string => {
    try {
      return localStorage.getItem(variableName) || "";
    } catch (error) {
      console.error("Error while getting item from local storage:", error);
      return "";
    }
  };
  