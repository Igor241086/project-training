import { useEffect, useState } from 'react';
import { productsApi } from '../api/productApi';
import ProductList from '../components/ProductList';
import Button from '../components/UI/Button/Button';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsApi.getAll()
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    try {
      await productsApi.remove(id);
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
    }
  };

  if (loading) return <div className="container">Загрузка админ-панели...</div>;

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Управление товарами</h1>
        <Button to="/products/new">Добавить товар</Button>
      </div>

      <ProductList products={products} onDelete={handleDelete} />
    </div>
  );
};

export default ProductsPage;
