import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getJsonItemFromLocalStorage } from '../shared/helper-functions/save-data';

const Protected = () => {
  // const token = CacheService.getFromCache(CacheEnums.ACCESS_TOKEN);
  const token = getJsonItemFromLocalStorage('token-details');

  // return <Outlet />;
  return token && token.access_Token ? <Outlet /> : <Navigate replace to='/' />;
};

export default Protected;
