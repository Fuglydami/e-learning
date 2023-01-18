import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import CompanyLogo from '../asssets/images/Logo.svg';
import Sidebar from '../components/sidebar/sidebar';
import { getJsonItemFromLocalStorage } from '../shared/helper-functions/save-data';

const LoadingScreen = () => {
  const token = getJsonItemFromLocalStorage('token-details');
  return (
    <>
      {token && <Sidebar />}

      <div className='flex flex-col justify-center h-screen items-center'>
        <img
          src={CompanyLogo}
          className='h-[70px] w-[70px]'
          alt='loading component'
        />
        {/* <div className='loader-line'></div> */}
        <ProgressBar
          height='50'
          width='80'
          ariaLabel='progress-bar-loading'
          wrapperStyle={{}}
          wrapperClass='progress-bar-wrapper'
          borderColor='#C85100'
          barColor='#C85100'
        />
      </div>
    </>
  );
};

export default LoadingScreen;
