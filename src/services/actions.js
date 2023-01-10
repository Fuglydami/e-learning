import { toast } from 'react-toastify';
import { toastData } from '../shared/shared';
import { httpAuth } from './userService';

const handleError = (error) => {
  if (error.code === 'ERR_NETWORK') {
    toast.error('An error occur, please try again', toastData);
    // CustomToast(error.message, 'danger');
  } else {
    // CustomToast(error.response.data, 'danger');
    toast.error(error.response.data, toastData);
  }
};

export const posthttp = async (url, payload) => {
  const baseURL = httpAuth();

  try {
    const data = await baseURL.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};
