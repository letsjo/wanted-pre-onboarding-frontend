import axios from 'axios';

export const userClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

userClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log('request error', error);
    return error;
  },
);

userClient.interceptors.response.use(
  (response) => {
    console.log('response success', response);
    return response;
  },
  (error) => {
    console.log('response error', error);
    return error;
  },
);
