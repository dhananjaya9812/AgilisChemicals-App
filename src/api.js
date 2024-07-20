import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchProducts = async (page, limit) => {
  const response = await axios.get(`${API_URL}/products?limit=${limit}&skip=${page * limit}`);
  return response.data;
};

export const fetchCart = async () => {
  const response = await axios.get(`${API_URL}/carts/1`);
  return response.data;
};
