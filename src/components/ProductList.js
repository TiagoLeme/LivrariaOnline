import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  {
    id: 1,
    title: 'Livro 1',
    price: 29.90,
    image: '/livro1.jpg',
  },
  {
    id: 2,
    title: 'Livro 2',
    price: 39.90,
    image: '/livro2.jpg',
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card" tabIndex="0">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>R${product.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
