import { useState, useEffect } from "react"

export function useStoreItemsSearch(query: string) {
    const [value, setValue] = useState<any[]>([])
    const api_url = `${import.meta.env.VITE_API_URL}/api/products?` + new URLSearchParams({
        q: query
    })
    
    useEffect(() => {
        let controller = new AbortController()
        fetch(api_url, {
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