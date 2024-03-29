import { toast } from 'react-toastify';
import { toastData } from '../shared/shared';
import { httpAuth } from './userService';
import {
  clearLocalStorage,
  getJsonItemFromLocalStorage,
} from '../shared/helper-functions/save-data';

const handleError = (error) => {
  if (error.code === 'ERR_NETWORK' || error.response.status === 404) {
    toast.error('An error occur, please try again', toastData);
  } else if (error.response.status === 401) {
    clearLocalStorage();
    window.location.href = '/';
    toast.error('Session timeout', toastData);
  }
};

export const authorization = (token) => {
  return {
    headers: { Authorization: 'Bearer ' + token, 'Cache-Control': 'no-store' },
  };
};
export const posthttp = async (url, payload) => {
  const tokenDetails = getJsonItemFromLocalStorage('token-details');
  const baseURL = httpAuth();
  try {
    const data = await baseURL.post(
      url,
      payload,
      authorization(tokenDetails?.access_Token)
    );
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      return error.response;
    } else {
      handleError(error);
    }
  }
};

export const gethttp = async (url, contentType, responseType) => {
  const tokenDetails = getJsonItemFromLocalStorage('token-details');

  const baseURL = httpAuth(contentType, responseType);
  try {
    const data = await baseURL.get(
      url,
      authorization(tokenDetails?.access_Token)
    );

    return data;
  } catch (error) {
    if (error.response.status === 400) {
      return error.response;
    } else {
      handleError(error);
    }
  }
};
