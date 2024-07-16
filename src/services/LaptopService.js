const API_URL = 'http://localhost:5000/api/laptops';

const getLaptops = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const getLaptopById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getLaptops,
  getLaptopById,
};
