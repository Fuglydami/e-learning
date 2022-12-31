import { toast } from 'react-toastify';
import { toastData } from '../shared/shared';
import { httpAuth } from '../shared/userService';

const handleError = (error) => {
  if (error.code === 'ERR_NETWORK') {
    toast.error('Check your internet connection', toastData);
    // CustomToast(error.message, 'danger');
  } else {
    // CustomToast(error.response.data, 'danger');
    toast.error(error.response.data, toastData);
  }
};

export const login = async (username, password) => {
  const baseURL = httpAuth();
  const payload = {
    username: username,
    password: password,
  };
  try {
    const data = await baseURL.post('Authentication/login', payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};
