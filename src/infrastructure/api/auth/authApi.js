import { axiosInstance } from '../axiosConfig';

export const login = (username, password) => {
  return axiosInstance.post(`/login`, { username, password });
};

export const logout = () => {
  return axiosInstance.post(`/logout`, {});
};
