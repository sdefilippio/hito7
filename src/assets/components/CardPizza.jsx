import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  return (
    <div className="card">
      <img src={pizza.imgSrc} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <Link to={`/pizza/${pizza.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default CardPizza;
