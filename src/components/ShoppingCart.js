// src/components/ShoppingCart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';

const ShoppingCart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</button>
              <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>
            </div>
          ))}
          <h3>Total Cost: ${totalCost}</h3>
          <button>Checkout (Coming Soon)</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
