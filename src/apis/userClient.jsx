import axios from 'axios';

export const userClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

userClient.interceptors.request.use(
  (config) => {
    console.log('request success', config);
  },
  (error) => {
    console.log('request error', error);
  },
);

userClient.interceptors.request.use(
  (response) => {
    console.log('response success', response);
  },
  (error) => {
    console.log('response error', error);
  },
);
