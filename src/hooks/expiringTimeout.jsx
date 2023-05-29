import { useEffect } from 'react';

const useLogoutTimer = (expiryTime, logoutCallback) => {
  useEffect(() => {
    let timer;

    const calculateRemainingTime = () => {
      const remainingTime = new Date(expiryTime) - new Date();
      return remainingTime > 0 ? remainingTime : 0;
    };

    const logout = () => {
      clearTimeout(timer);
      logoutCallback();
    };

    const startLogoutTimer = () => {
      const remainingTime = calculateRemainingTime();
      timer = setTimeout(logout, remainingTime);
    };

    if (expiryTime) {
      startLogoutTimer();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [expiryTime, logoutCallback]);
};

export default useLogoutTimer;
