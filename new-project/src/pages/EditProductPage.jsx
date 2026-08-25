import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { productsApi } from '../api/productApi';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsApi.getById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (formData) => {
    const data = { ...formData, price: Number(formData.price) || 0 };
    await productsApi.update(id, data);
    navigate(`/products/${id}`);
  };

  if (loading) return <div className="container">Загрузка...</div>;
  if (!product) return <div className="container">Товар не найден</div>;

  return (
    <div className="container">
      <h1>Редактирование товара</h1>
      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProductPage;
