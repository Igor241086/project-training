import { useState, useEffect } from 'react'
import { productsApi } from '../api/productApi'

export function useProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                const data = await productsApi.getAll()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [])

    return { products, loading, error }
}
