import { userClient } from 'apis/userClient';

export const signInApi = async ({ email, password }) => {
  return userClient.post('/auth/signin', { email, password });
};

export const signUpApi = async ({ email, password }) => {
  return userClient.post('/auth/signup', { email, password });
};
