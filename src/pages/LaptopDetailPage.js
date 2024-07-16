import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import laptopService from '../services/laptopService';
import { CartContext } from '../contexts/CartContext';

const LaptopDetailPage = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchLaptop = async () => {
      const fetchedLaptop = await laptopService.getLaptopById(id);
      setLaptop(fetchedLaptop);
    };
    fetchLaptop();
  }, [id]);

  if (!laptop) return <div>Loading...</div>;

  return (
    <div>
      <h1>{laptop.name}</h1>
      <p>{laptop.description}</p>
      <p>${laptop.price}</p>
      <button onClick={() => addToCart(laptop._id)}>Add to Cart</button>
    </div>
  );
};

export default LaptopDetailPage;
