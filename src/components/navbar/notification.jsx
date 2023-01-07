import React from 'react';
import { BiErrorAlt, BiTimeFive } from 'react-icons/bi';

const Notification = ({ notificationData }) => {
  return (
    <div className=' absolute top-2 right-16 w-[375px] shadow-lg rounded-lg bg-customWhite'>
      <div className='flex p-5 justify-between items-center'>
        <h3 className='font-[700] text-[18px]'>Notifications</h3>
        <p className='text-[12px] hover:bg-sidebarOrange  hover:px-2 hover:rounded-full transition-all cursor-pointer text-base_range'>
          Clear all
        </p>
      </div>
      <p className=' px-5 text-[14px] font-[400] text-lightGrey mt-2'>Today</p>
      {notificationData.map((data, index) => {
        const { desc, time, iconColor, iconBgColor, backgroundColor } = data;
        return (
          <div
            key={index}
            style={{
              background: backgroundColor,
            }}
            className={`flex mt-3 p-3 px-5 justify-between gap-4 mb-4`}
          >
            <div
              style={{ background: iconBgColor }}
              className={`h-[42px] w-[48px] flex items-center p-3 rounded-full`}
            >
              <BiErrorAlt style={{ fontSize: '20px', color: iconColor }} />
            </div>
            <div className='col-start-6'>
              <p className='font-[600] text-sm'>{desc}</p>
              <div className='flex gap-2 items-center text-[14px] text-lightGrey mt-1'>
                <BiTimeFive />
                <p className='text-xs'>{time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
