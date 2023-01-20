import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import { CgMenuRight } from 'react-icons/cg';
import NotificationIcon from '../../asssets/icons/notification.svg';
import Avatar from '../../asssets/images/avatar.svg';
import Wave from '../../asssets/images/wave.svg';
import { useGlobalContext } from '../../context/globalContext';
import { getJsonItemFromLocalStorage } from '../../shared/helper-functions/save-data';
import Notification from './notification';

const notifStyle = {
  height: '7px',
  width: '7px',
  borderRadius: '3px',
  background: '#C85100',
  position: 'relative',
  right: '1rem',
  top: '-5px',
};
const Navbar = () => {
  const { setShowSidebar, showSidebar } = useGlobalContext();

  const userDetails = getJsonItemFromLocalStorage('user-details');

  const { fullName } = userDetails;

  const notificationData = [
    {
      desc: 'You have GTL 215 Assignment from your Instructor',
      time: '10 mins ago',
      iconColor: '#03678B',
      iconBgColor: '#85DFFF',
    },
    {
      desc: 'Your CPR 215 Class scheduled for 10:00am is starting NOW. ',
      time: '1 hr ago',
      iconColor: '#C85100',
      iconBgColor: '#FFD8BE',
      backgroundColor: '#FFF1E7',
    },
    {
      desc: 'You have successfully downloaded the Semester Timetable.',
      time: '2 hrs ago',
      iconColor: '#6701BA',
      iconBgColor: '#E8CDFE',
    },
  ];
  return (
    <div className='lg:ml-10 ml-0 mt-8  flex items-center'>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col lg:space-y-1 space-y-0 mb-7'>
          <div className='flex justify-center items-center space-x-2'>
            <h2 className={` text-[20px] lg:text-[24px]  font-bold`}>
              Hi {fullName}
            </h2>
            <img className='animate-waving-hand' src={Wave} alt='waving-hand' />
          </div>
          <p className='text-lightGrey text-md md:text-xl font-[400] text-green-100'>
            Let’s start learning
          </p>
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className=' lg:hidden flex mr-8'
        >
          <CgMenuRight className=' text-[35px] text-lightGrey' />
        </div>
        <div className='lg:flex h-10 items-center  space-x-1 hidden '>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? '' : 'text-opacity-90'}
                group flex items-center     focus:outline-none  `}
                >
                  <img
                    className='h-[27px]  w-[22px] cursor-pointer'
                    src={NotificationIcon}
                    alt='message'
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-1/2 z-10  w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                    <Notification notificationData={notificationData} />
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div className='animate-bounce ease-in-out' style={notifStyle} />

          <div className='flex  justify-center space-x-5'>
            <p className='font-[500] flex items-center text-[14px]'>
              2022/2023 Harmattan Sem...
            </p>
            <img
              className='h-[40px] w-[40px] flex'
              src={Avatar}
              alt='message'
            />

            <div className='leading-[20px]'>
              <p className='font-[600] text-[14px]'>{fullName}</p>
              <p className=' font-[600] text-[14px] text-[#525354]'>19000473</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
