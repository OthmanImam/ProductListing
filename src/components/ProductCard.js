import React from 'react';

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{'⭐'.repeat(rating)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
