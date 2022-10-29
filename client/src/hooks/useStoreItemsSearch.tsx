import { useState, useEffect } from "react"

export function useStoreItemsSearch(query: string) {
    const [value, setValue] = useState<any[]>([])
    useEffect(() => {
        let controller = new AbortController()
        fetch('http://localhost:4789/api/products?' + new URLSearchParams({
            q: query
        }), {
            signal: controller.signal
        })
            .then((res) => res.json())
            .then((data) => {
                setValue(data)
            })
            .catch((e) => {
                if (!controller.signal.aborted) {
                    console.error(e);
                    
                }
            })

        return () => {
            controller.abort()
        }
    }, [query])

    return value as any[]
}