import React from 'react';

import CompanyLogo from '../../../asssets/images/Logo.svg';
import { items } from '../../../misc/data';

export const CarouselComponent = ({ item, current, setCurrent }) => (
  <aside
    key={item.id}
    className='bg-dark_range text-customWhite hidden lg:flex flex-col  space-y-24 justify-between  lg:p-8 xl:p-12 lg:w-corousel xl:w-corousel '
  >
    <div className='flex items-center justify-start space-x-3 '>
      <div className=' w-12 h-14 flex items-center'>
        <img src={CompanyLogo} alt='company-logo' />
      </div>
      <span className='font-bold text-base_range text-xl'>LODLC</span>
    </div>

    {/* <AnimatePresence>
      <motion.div */}
    <div>
      <div className='mb-12'>
        <div className='space-y-6'>
          <h1 className='lg:text-4xl xl:text-4xl xl:leading-10 font-bold'>
            {item.title}
          </h1>

          <p className='text-xl text-[#FBFBFB]'>{item.paragraph}</p>
        </div>
      </div>
      <div className='mb-12'>
        {items.map((_, index) => {
          return (
            <>
              <div
                key={index}
                className={
                  index === current
                    ? 'pagination_dot pagination_dot-active'
                    : 'pagination_dot'
                }
                onClick={() => setCurrent(index)}
              ></div>
            </>
          );
        })}
      </div>
      <div className='bg-cover overflow-hidden'>
        <img
          className='rounded-t-full  bg-cover cover align-middle w-full h-96'
          src={item.pic}
          alt='corousel-gif'
        />
      </div>
    </div>
    {/* </motion.div>
    </AnimatePresence> */}
  </aside>
);
