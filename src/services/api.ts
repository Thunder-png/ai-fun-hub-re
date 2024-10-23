import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (email: string, password: string) => {
  const response = await api.post('/auth/register', { email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const getCredits = async () => {
  const response = await api.get('/credits');
  return response.data;
};

export const purchaseCredits = async (amount: number) => {
  const response = await api.post('/credits/purchase', { amount });
  return response.data;
};

export const useCredit = async () => {
  const response = await api.post('/credits/use');
  return response.data;
};

export default api;