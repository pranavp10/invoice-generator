import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useQueryParams = (variableName: string, defaultValue?: string): { value: string, setValue: (value: string) => void } => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const value = searchParams.get(variableName) || defaultValue || "";
    const pathname = usePathname();

    const createQueryString = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(variableName, value);
            return params.toString();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [searchParams]
    );
    const setValue = (value: string) =>
        router.push(
            pathname + "?" + createQueryString(value)
        )

    return { value, setValue }
}

export default useQueryParams
