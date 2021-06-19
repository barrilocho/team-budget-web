import { axiosInstance } from '../axiosConfig';

export const login = (email, password) => {
  return axiosInstance.post(`/AppUsers/login`, { email, password });
};

export const logout = () => {
  return axiosInstance.post(`/AppUsers/logout`, {});
};
