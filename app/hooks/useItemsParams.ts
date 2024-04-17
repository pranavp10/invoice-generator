import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useItemParams = (): { items: Item[], setValue: (value: Item[]) => void } => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const value = getItems(searchParams.get('items'));
    const pathname = usePathname();

    const createQueryString = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set('items', value);
            return params.toString();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [searchParams]
    );
    const setValue = (value: Item[]) =>
        router.push(
            pathname + "?" + createQueryString(JSON.stringify(value))
        )

    return { items: value, setValue }
}

const getItems = (items?: string | null): Item[] => {
    if (!items) return [{
        itemDescription: '',
    }]
    try {
        return JSON.parse(items)
    } catch {
        return [{
            itemDescription: '',
        }]
    }
}

export interface Item {
    itemDescription: string,
    qty?: number,
    amount?: number
}

export default useItemParams
