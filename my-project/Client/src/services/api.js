import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Need to install axios: npm install axios

// Get all items
export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Create new item
export const createItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/items`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Other CRUD operations can be added similarly