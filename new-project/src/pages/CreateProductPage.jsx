import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { productsApi } from '../api/productApi';

const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const data = { ...formData, price: Number(formData.price) || 0 };
    const docRef = await productsApi.create(data);
    navigate(`/products/${docRef.id}`);
  };

  return (
    <div className="container">
      <h1>Новый товар</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProductPage;
