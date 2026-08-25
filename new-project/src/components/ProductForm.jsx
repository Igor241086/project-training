import { useState, useEffect } from 'react';
import Button from './UI/Button/Button';

const ProductForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div>
        <label>Название:</label>
        <input name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Цена (грн):</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Ссылка на картинку:</label>
        <input name="image" value={form.image} onChange={handleChange} />
      </div>
      <div>
        <label>Описание:</label>
        <textarea name="description" value={form.description} onChange={handleChange} />
      </div>
      <Button type="submit">Сохранить</Button>
    </form>
  );
};

export default ProductForm;
