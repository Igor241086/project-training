import { useEffect, useState } from 'react';
import { productsApi } from '../api/productApi';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsApi.getAll()
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container">Загрузка каталога...</div>;

  return (
    <div className="container">
      <h1>Каталог товаров</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
