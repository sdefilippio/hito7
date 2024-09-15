// Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 
import '/src/index.css';

const Home = () => {
  const [pizzas] = useState([
    { id: 'p001', name: 'Margarita', imgSrc: '/src/assets/imgs/pizza1.jpg', description: 'Salsa de tomate, queso mozzarella y albahaca.', price: 10.00 },
    { id: 'p002', name: 'Pepperoni', imgSrc: '/src/assets/imgs/pizza2.jpg', description: 'Salsa de tomate, queso mozzarella y pepperoni.', price: 12.00 },
    { id: 'p003', name: 'Cuatro Quesos', imgSrc: '/src/assets/imgs/pizza3.jpg', description: 'Mezcla de cuatro quesos: mozzarella, cheddar, parmesano y gorgonzola.', price: 15.00 },
    { id: 'p004', name: 'Hawaiana', imgSrc: '/src/assets/imgs/pizza4.jpg', description: 'Salsa de tomate, queso mozzarella, jamón y piña.', price: 13.00 },
    { id: 'p005', name: 'Vegetariana', imgSrc: '/src/assets/imgs/pizza5.jpg', description: 'Salsa de tomate, queso mozzarella, pimientos, cebollas, champiñones y aceitunas.', price: 14.00 },
    { id: 'p006', name: 'Barbacoa', imgSrc: '/src/assets/imgs/pizza6.jpg', description: 'Salsa barbacoa, queso mozzarella, carne de res y cebollas rojas.', price: 16.00 },
  ]);

  const { addToCart } = useCart(); 
  const navigate = useNavigate(); 

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    navigate('/cart'); // Redirige al carrito
  };

  return (
    <div className="card-container">
      {pizzas.map(pizza => (
        <div key={pizza.id} className="card-pizza">
          <img src={pizza.imgSrc} alt={pizza.name} />
          <div className="pizza-info">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <button
              className="button-buy"
              onClick={() => handleAddToCart(pizza)}
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
