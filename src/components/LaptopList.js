import React, { useContext, useEffect } from 'react';
import { LaptopContext } from '../contexts/LaptopContext';
import Laptop from './Laptop';

const LaptopList = () => {
  const { laptops, fetchLaptops } = useContext(LaptopContext);

  useEffect(() => {
    fetchLaptops();
  }, [fetchLaptops]);

  return (
    <div>
      {laptops.map(laptop => (
        <Laptop key={laptop._id} laptop={laptop} />
      ))}
    </div>
  );
};

export default LaptopList;
