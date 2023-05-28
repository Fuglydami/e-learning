import { toast } from 'react-toastify';
import { toastData } from '../shared/shared';
import { httpAuth } from './userService';
import { clearLocalStorage } from '../shared/helper-functions/save-data';
import { useHistory, useNavigate } from 'react-router-dom';

const handleError = (error) => {
  console.log(error, 'error in block');
  if (error.code === 'ERR_NETWORK') {
    toast.error('An error occur, please try again', toastData);
    // CustomToast(error.message, 'danger');
  } else if (error.response.status === '401') {
    clearLocalStorage();

    window.location.href = '/';
    // CustomToast(error.response.data, 'danger');
  } else {
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

export const gethttp = async (url, payload = null) => {
  const baseURL = httpAuth();
  try {
    const data = await baseURL.get(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};
