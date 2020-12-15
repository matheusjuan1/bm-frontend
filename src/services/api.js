import axios from 'axios';

const api = axios.create({ baseURL: 'https://apibm.azurewebsites.net' });

export default api;