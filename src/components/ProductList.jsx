import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: 'path_to_image1',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 0
  },
  {
    image: 'path_to_image2',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 2
  },
  {
    image: 'path_to_image3',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 3
  },
  {
    image: 'path_to_image4',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 4
  },
  {
    image: 'path_to_image5',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 5
  }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;
