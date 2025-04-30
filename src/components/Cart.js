import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {items.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.title} (x{item.quantity})</span>
            <button onClick={() => handleRemove(item.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
