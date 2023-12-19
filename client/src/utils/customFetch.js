import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://jobify-mern-app-5bjt.onrender.com/api/v1',
});

export default customFetch;
