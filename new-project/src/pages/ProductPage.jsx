import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsApi } from '../api/productApi';
import Button from '../components/UI/Button/Button';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    productsApi.getById(id)
      .then(data => {
        if (!data) {
          setError('Товар не найден');
          return;
        }
        setProduct(data);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container">Загрузка...</div>;
  if (error) return <div className="container">{error}</div>;
  if (!product) return null;

  return (
    <div className="container">
      <div className="product-detail">
        <img
          src={product.image || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={product.title}
        />
        <div>
          <h1>{product.title}</h1>
          <p className="price">{product.price} грн</p>
          {product.description && <p>{product.description}</p>}
          <Button to={`/products/${id}/edit`}>Редактировать</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
