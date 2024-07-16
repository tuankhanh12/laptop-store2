import React from 'react';
import { Link } from 'react-router-dom';

const Laptop = ({ laptop }) => {
  return (
    <div>
      <h2>{laptop.name}</h2>
      <p>{laptop.description}</p>
      <p>${laptop.price}</p>
      <Link to={`/laptop/${laptop._id}`}>View Details</Link>
    </div>
  );
};

export default Laptop;
