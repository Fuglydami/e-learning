import React from 'react';
import { RiWechatLine } from 'react-icons/ri';
import CustomButton from '../../../shared/custom-button';

const CourseAnnouncement = () => {
  const data = [
    {
      title: 'Week 1 Assignment',
      desc: 'This it to remind you that the assignment for week 1 will be due for submission on 28th, October, 2022.',
      icon: <RiWechatLine className='text-base_range text-[24px]' />,
      hr: <hr className='text-[#FAF8F7] my-6' />,
    },
    {
      title: 'Class Reminder',
      desc: 'Greetings dear learners, this reminds you of the class scheduled for 3pm today. Kindly note it is less than 2 hours to go. kindly be punctual.',
      icon: <RiWechatLine className='text-base_range text-[24px]' />,
      hr: <hr className='text-[#FAF8F7] my-6' />,
    },
  ];
  return (
    <div className='mt-8'>
      {' '}
      <h1 className='font-[700] text-[20px] mb-6'>Course Announcements</h1>
      {data.map((item, index) => {
        return (
          <>
            <div key={index} className='flex justify-between md:gap-12 gap-2'>
              <div className='flex space-x-3 cursor-pointer'>
                {item.icon}
                <div>
                  <p className='font-[600] mb-4'>{item.title}</p>
                  <p className='font-[300] text-lightGrey'>{item.desc}</p>
                </div>
              </div>
              <CustomButton
                padding=' py-2 '
                title={'view'}
                borderRadius={'rounded-[8px]'}
                buttonStyle={' bg-base_range  white text-[12px] w-[61px]'}
              />
            </div>
            {item.hr}
          </>
        );
      })}
    </div>
  );
};

export default CourseAnnouncement;
