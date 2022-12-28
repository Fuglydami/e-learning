import { useState } from 'react';
import { httpAuth } from '../shared/userService';

const useFetchData = async (url, payload) => {
  const baseURL = httpAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  try {
    setLoading(true);
    const result = await baseURL.post(url, payload);
    setData(result);
  } catch (error) {
    return error.message;
  }
  setLoading(false);

  return { data, loading };
};

export default useFetchData;
