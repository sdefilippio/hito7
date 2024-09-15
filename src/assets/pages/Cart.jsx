// Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Ajusta la ruta si es necesario
import { useUser } from '../context/UserContext'; // Ajusta la ruta si es necesario

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useCart(); // Accedemos al contexto del carrito
  const { token } = useUser(); // Accedemos al contexto del usuario

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((pizza) => (
              <li key={pizza.id} className="cart-item">
                <span>{pizza.name} - ${pizza.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button disabled={!token} className="pay-button">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
