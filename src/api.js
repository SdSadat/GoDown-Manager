import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  };

  export const getToken = () => localStorage.getItem('token');
  
  export const getProtectedData = async () => {
    const token = getToken();
    const response = await axios.get(`${API_URL}/protected`, {
      headers: { 'x-access-token': token }
    });
    return response.data;
  };


export const getGodowns = async () => {
  return axios.get(`${API_URL}/godowns`);
};

export const getItemsByGodown = async (godownId) => {
  return axios.get(`${API_URL}/items/${godownId}`);
};

export const getChildGoDowns = async (godownId) => {
    return axios.get(`${API_URL}/godowns/${godownId}/children`);
}

