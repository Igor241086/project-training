const API_URL = import.meta.env.VITE_API_URL

export async function getProducts() {
    try {
        const response = await fetch(`${API_URL}`)
        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }
        const products = await response.json()
        return products
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}
