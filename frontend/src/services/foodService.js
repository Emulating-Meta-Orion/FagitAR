import axios from 'axios';

export const getAll = async () => {
  const { data } = await axios.get('/api/foods');
  console.log(data);
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('https://fagitar.onrender.com/api/foods/search/' + searchTerm);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get('https://fagitar.onrender.com/api/foods/tags');
  return data;
};

export const getAllByTag = async tag => {
  if (tag === 'All') return getAll();
  const { data } = await axios.get('https://fagitar.onrender.com/api/foods/tag/' + tag);
  return data;
};

export const getById = async foodId => {
  const { data } = await axios.get('https://fagitar.onrender.com/api/foods/' + foodId);
  return data;
};
