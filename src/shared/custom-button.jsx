import React from 'react';

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
  } flex gap-2 items-center justify-center ${borderRadius} rounded-md font-mulish border border-transparent ${padding}   text-[20px] font-medium   focus:outline-none transition duration-150 ease-in-out  focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2  ${buttonStyle}`;
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
                stroke-width='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
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
