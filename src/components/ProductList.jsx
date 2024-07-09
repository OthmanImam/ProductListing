import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: 'img3.jpg',
    name: 'Mac Lipstick',
    price: 'N6000',
    rating: 0
  },
  {
    image: 'img4.jpg',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 2
  },
  {
    image: 'img8.jpg',
    name: 'Mac Lipstick',
    price: 'N7000',
    rating: 3
  },
  {
    image: 'img10.jpg',
    name: 'Mac Lipstick',
    price: 'N2000',
    rating: 4
  },
  {
    image: 'img7.jpg',
    name: 'Mac Lipstick',
    price: 'N15000',
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
