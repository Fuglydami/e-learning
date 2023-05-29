import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OnGoingCourse = () => {
  const courseData = [
    {
      id: 1,
      code: 'GST 111:',
      duration: 'now',
      title: 'Communication in English I',
      lecturer: 'Dr. Adegboola Oguniyi',
      unit: '3 units',
      time: '10:00am - 12:00pm',
      color: 'courseGreenColor',
    },
    {
      id: 2,
      code: 'GST 121:',
      duration: 'in 1 hour',
      title: 'Use of Library, Study Skills and ICT',
      lecturer: 'Dr. Taiwo Olamiposi',
      unit: '2 units',
      time: '2:00pm - 4:00pm',
      color: 'coursePinkColor',
    },
  ];
  return (
    <div className='flex flex-wrap max-w-[inherit] justify-between'>
      {courseData.map((items) => {
        const { id, code, duration, time, title, lecturer, unit, color } =
          items;
        return (
          <SkeletonTheme key={id} baseColor='#ebebeb ' highlightColor='#d3d3d3'>
            <div className='  xl:max-w-[49%] w-full  lg:mb-4 mb-0'>
              {/* <Skeleton count={4} className="h-[28px] rounded-md  my-1" /> */}
              <div
                className={`relative ${color}   flex flex-row cursor-pointer   bg-white rounded-[16px] mb-3 xl:mb-0 p-7`}
              >
                <div className='flex-auto'>
                  <div className='flex flex-wrap'>
                    <div className='relative w-full lg:pr-4 pr-0 max-w-full flex-grow flex-1'>
                      <div className='flex space-x-2 items-baseline'>
                        <h5 className='text-[#fff]  font-[600]'>{code}</h5>
                        <span className='flex items-baseline space-x-1 text-[12px] font-[400] text-[#fff1e788]'>
                          <p className='text-2xl rounded'>.</p>{' '}
                          <p className=''>{duration}</p>
                        </span>
                      </div>
                      <h5 className='text-[#fff]  font-[600] mb-1'>{title}</h5>
                      {/* <span className='font-[400] text-[#fff1e788]'>
                        {lecturer} - {unit}
                      </span> */}
                      <span className='font-[400] text-[#fff1e788]'>
                        {unit}
                      </span>
                    </div>
                  </div>
                  {/* <div className='text-sm text-[#fff] flex space-x-2 items-center mt-4'>
                    <BiTimeFive />
                    <p>{time}</p>
                  </div> */}
                </div>

                <div className='flex items-center '>
                  <div className='rounded-[16px] bg-opacityWhite relative w-auto flex-initial'>
                    <div className='flex items-center  p-3 text-center  justify-center w-12 h-12   ]'>
                      <HiOutlineChevronRight
                        style={{
                          height: '20px',
                          width: '20px',
                          color: 'white',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SkeletonTheme>
        );
      })}
    </div>
  );
};

export default OnGoingCourse;
