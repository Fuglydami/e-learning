import React from 'react';
import { Spin } from './shared';

const CustomButton = ({
  title,
  onClick,
  containerStyle,
  buttonStyle,
  icon,
  loading,
  borderRadius = 'lg:rounded-[12px]',
  padding = 'px-4 py-4',
}) => {
  const container = ` ${containerStyle}`;
  const buttonclassName = `${
    loading && 'cursor-not-allowed'
  } flex gap-2 items-center bg-base_range hover:bg-[#ac4500] justify-center ${borderRadius} rounded-md font-mulish border border-transparent ${padding}   text-[20px] font-medium   focus:outline-none transition duration-150 ease-in-out  focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2  ${buttonStyle}`;
  return (
    <div className={container}>
      <button
        disabled={loading}
        type='submit'
        className={buttonclassName}
        onClick={onClick}
      >
        {loading ? (
          <div className='flex items-center justify-center'>
            <Spin />
            <span>Loading</span>
          </div>
        ) : (
          <div className='flex items-center gap-3'>
            {title}
            {icon}
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
