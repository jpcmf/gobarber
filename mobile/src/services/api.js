import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e3586d03.ngrok.io', // 'http://localhost:3333',
});

export default api;
