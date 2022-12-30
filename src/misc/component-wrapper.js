import React, { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar/sidebar';
import { useGlobalContext } from '../context/globalContext';

export const Container = ({ children }) => {
  return (
    <div
      className={`flex font-mulish   lg:flex-row lg:ml-10 ml-0 flex-col   z-10 top-32`}
    >
      <div
        className={`flex flex-col  w-full pageHeight rounded-xl lg:p-6 p-0 mb-6 bg-customWhite`}
      >
        {children}
      </div>
    </div>
  );
};
export const MainContainer = ({ children }) => {
  const { setShowSidebar } = useGlobalContext();
  useEffect(() => {
    setShowSidebar(false);
  }, []);
  return (
    <div className={` flex font-mulish`}>
      <Sidebar />
      <div className={` md:relative block lg:left-[222px] left-[0px] home`}>
        <div className={`  lg:px-2 px-4`}>
          <div className='fixed bg-[#FBFBFB]  z-30 home'>
            <Navbar />
          </div>
          <div
            className='relative top-32 animate-in home slide-in-from-left-48 duration-300'
            onClick={() => setShowSidebar(false)}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export const SectionContainer = ({ children }) => {
  return (
    <div
      className={`lg:px-6 pb-12 px-0 rounded-xl
         bg-customWhite
       `}
    >
      {children}
    </div>
  );
};
export const Title = ({ title, show, children, childrenClass }) => {
  return (
    <section className='flex flex-row  lg:py-4 py-0 pt-3 lg:pt-0 items-center w-full justify-between'>
      <div className='flex px-2 lg:px-0 '>
        <p className='font-Quicksand font-bold md:pb-0 pb-2 lg:text-xl text-md'>
          {title}
        </p>
      </div>
      <div>
        {show ? (
          <div className=''>
            <input
              className=' bg-[#F2F5F3] placeholder:text-[#898D88] md:w-[289px] w-[200px] h-10 px-5 lg:pr-16 rounded-lg text-sm focus:outline-none'
              type='search'
              name='search'
              placeholder='Search a Course'
            />

            <CiSearch className='relative bottom-7 md:left-64  left-40' />
          </div>
        ) : (
          <div className={childrenClass}>{children}</div>
        )}
      </div>
    </section>
  );
};
