import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: './public/img3.jpg',
    name: 'Mac Lipstick',
    price: 'N6000',
    rating: 0
  },
  {
    image: './public/img4.jpg',
    name: 'Mac Lipstick',
    price: 'N5000',
    rating: 2
  },
  {
    image: './public/img5.jpg',
    name: 'Mac Lipstick',
    price: 'N7000',
    rating: 3
  },
  {
    image: './public/img6.jpg',
    name: 'Mac Lipstick',
    price: 'N2000',
    rating: 4
  },
  {
    image: 'path_to_image5',
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
