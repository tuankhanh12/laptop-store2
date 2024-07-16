import React, { createContext, useState } from 'react';
import laptopService from '../services/laptopService';

export const LaptopContext = createContext();

const LaptopContextProvider = ({ children }) => {
  const [laptops, setLaptops] = useState([]);

  const fetchLaptops = async () => {
    const fetchedLaptops = await laptopService.getLaptops();
    setLaptops(fetchedLaptops);
  };

  return (
    <LaptopContext.Provider value={{ laptops, fetchLaptops }}>
      {children}
    </LaptopContext.Provider>
  );
};

export default LaptopContextProvider;
