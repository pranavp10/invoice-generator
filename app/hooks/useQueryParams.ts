import { useEffect, useState } from "react";

const useQueryParams = (variableName: string, defaultValue?: string): { value: string, setValue: (value: string) => void } => {
    const initialValue = getInitialValue(variableName, defaultValue);
    const [value, setValue] = useState<string>(initialValue);

    useEffect(() => {
        try {
            localStorage.setItem(variableName, value);
        } catch (error) {
            console.error("Error while setting item in local storage:", error);
        }
    }, [variableName, value]);

    const updateValue = (newValue: string) => {
        setValue(newValue);
    };

    return { value, setValue: updateValue };
};

const getInitialValue = (variableName: string, defaultValue?: string): string => {
    try {
        return localStorage.getItem(variableName) || defaultValue || "";
    } catch (error) {
        console.error("Error while getting item from local storage:", error);
        return defaultValue || "";
    }
};

export default useQueryParams;
