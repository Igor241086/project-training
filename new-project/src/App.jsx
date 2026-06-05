import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useProducts } from './hooks/useProducts'
import { ProductList } from './components/ProductList'

export default function App() {
    const { products, loading, error } = useProducts()

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route
                    path="/products"
                    element={<ProductList products={products} />}
                />
                <Route path="/about" element={<div>About</div>} />
            </Routes>
        </BrowserRouter>
    )
}
