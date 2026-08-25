import ProductCard from './ProductCard';

const ProductList = ({ products, onDelete }) => {
  if (!products.length) return <p>Товары не найдены.</p>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProductList;
