const API_URL = 'http://localhost:5000/api/cart';
const token = localStorage.getItem('token');

const getCartItems = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

const addToCart = async (laptopId) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ laptopId }),
  });
  const data = await response.json();
  return data;
};

const removeFromCart = async (laptopId) => {
  const response = await fetch(`${API_URL}/${laptopId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export default {
  getCartItems,
  addToCart,
  removeFromCart,
};
