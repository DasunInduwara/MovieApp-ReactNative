import {BASE_URL} from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export {api};
