import Button from './UI/Button/Button';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <img src={product.image || 'https://via.placeholder.com/250x180?text=No+Image'} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">{product.price} грн</p>
      <div className="card-actions">
        <Button to={`/products/${product.id}`}>Подробнее</Button>
        {onDelete && (
          <>
            <Button to={`/products/${product.id}/edit`} variant="outlined">
              Редактировать
            </Button>
            <Button onClick={() => onDelete(product.id)} color="error" className="btn-danger">
              Удалить
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
