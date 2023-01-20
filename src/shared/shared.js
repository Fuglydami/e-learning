import React from 'react';

export const Badge = ({ value }) => {
  return (
    <span className='relative bottom-3 py-1 px-1.5 text-[8px] leading-none text-center whitespace-nowrap align-baseline font-bold bg-base_range text-customWhite rounded-full'>
      {value}
    </span>
  );
};

export const active = 'my-auto border-b-2 border-base_range text-base_range';
export const restofstyle =
  'my-auto inline-block px-4 py-2   cursor-pointer text-lightGrey';

export const toastData = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};
export let activeStyle = {
  backgroundColor: '#ffffff',
  color: '#C85100',
  borderRight: '4px solid #C85100',
  display: 'flex',
};
export let activeStyleSubmenu = {
  color: '#C85100',
};
