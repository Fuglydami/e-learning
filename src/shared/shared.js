import React from 'react';

export const Badge = ({ value }) => {
  return (
    <span className='relative bottom-3 py-1 px-1.5 text-[8px] leading-none text-center whitespace-nowrap align-baseline font-bold bg-base_range text-customWhite rounded-full'>
      {value}
    </span>
  );
};

export const Spin = () => {
  return (
    <>
      <svg
        className='animate-spin -ml-1 mr-3 mt-0.5 h-6 w-6 text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
    </>
  );
};




export function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], {type: "application/pdf"});
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
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
