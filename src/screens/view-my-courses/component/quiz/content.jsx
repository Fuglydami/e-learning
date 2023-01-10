import React from 'react';
import { useGlobalContext } from '../../../../context/globalContext';
import CustomButton from '../../../../shared/custom-button';

const Content = () => {
  const { setShow } = useGlobalContext();
  return (
    <section className='my-6'>
      <h2 className='font-[700] text-[20px] mb-4'>NOTE</h2>
      <p className=' mb-6'>
        Make sure you have attended the classes for the week before taking the
        quiz. The quiz is done just once and cannot be repeated. Once started,
        you have to finish it and submit. Also ensure you take the quiz on or
        before <span className='font-[800]'>20th November, 2022.</span>
        <br />
        <br /> Good luck!{' '}
      </p>

      <div className='p-4 flex justify-between  rounded-xl md:w-[377px] w-full  border border-base_range mb-8 bg-sidebarOrange'>
        <div>
          <p className='text-[20px] font-[600]'>Week 1 Quiz: </p>
          <p className='text-[14px] mb-3'>African culture & groups</p>{' '}
          <p className='text-[14px] font-[600]'>
            Due Date: 20th November, 2022.{' '}
          </p>
        </div>
        <div className='space-y-6'>
          <div className='gap-3 flex items-end justify-end'>
            <span>&#8226; </span>
            <p className='text-[14px] font-[600px]'>10mins </p>
          </div>
          <CustomButton
            title={'Start'}
            onClick={() => setShow(true)}
            borderRadius={'lg:rounded-[6px]'}
            buttonStyle={'bg-base_range white text-[14px] rounded'}
            padding='px-7 py-2'
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
