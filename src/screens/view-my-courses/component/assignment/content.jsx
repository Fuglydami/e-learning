import React from 'react';
import CustomButton from '../../../../shared/custom-button';

const Content = () => {
  return (
    <section className='my-6'>
      <h2 className='font-[700] text-[20px] mb-4'>NOTE</h2>
      <p className=' mb-6'>
        The assignment is to be submitted on or before 20th November, 2022. Good
        luck! <span className='font-[800]'>20th November, 2022.</span>
        <br />
        <br /> Good luck!{' '}
      </p>

      <div className='p-4 flex justify-between  rounded-xl md:w-[377px] w-full  border border-base_range mb-6 bg-sidebarOrange'>
        <div>
          <p className='text-[20px] font-[600]'>Week 1 Assignment: </p>
          <p className='text-[14px] mb-3'>African culture & groups</p>{' '}
          <p className='text-[14px] font-[600]'>
            Due Date: 20th November, 2022.
          </p>
        </div>
        <div className='flex items-end'>
          <CustomButton
            title={'Start'}
            borderRadius={'8px'}
            buttonStyle={'bg-base_range white text-[14px] rounded'}
            padding='px-7 py-2'
          />
        </div>
      </div>
      <h2 className='font-[600] text-[20px] mb-1'>Question</h2>
      <p className='font-[400] text-[20px] leading-[27px]'>
        List and explain 5 African cultures and groups. You can back your answer
        with images of each group.
      </p>
    </section>
  );
};

export default Content;
