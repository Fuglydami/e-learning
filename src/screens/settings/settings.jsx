import React, { useEffect } from 'react';
import Avatar from '../../asssets/icons/avatar-img.jpg';
import { useGlobalContext } from '../../context/globalContext';
import { Container, MainContainer, Title } from '../../misc/component-wrapper';

import Biodata from './components/biodata';
import HelpCenter from './components/helpCenter';
import Notification from './components/notification';
import Security from './components/security';
import ShowCGPA from './components/showCGPA';
import { getJsonItemFromLocalStorage } from '../../shared/helper-functions/save-data';
import { RxAvatar } from 'react-icons/rx';
import ResetPassword from './components/resetPassword';

const Settings = () => {
  const userDetails = getJsonItemFromLocalStorage('user-details');
  const { fullName, profilePicture, level, matricNo } = userDetails;
  const active = 'my-auto  bg-sidebarOrange text-base_range';
  const restofstyle =
    'my-auto inline-block px-4 py-2   cursor-pointer text-lightGrey';
  const { openTab, setOpenTab, setShow } = useGlobalContext();
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <MainContainer>
      <Container>
        <Title title={'Settings'} />
        <section className='grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-0 w-full md:pt-12 pt-4  my-2'>
          <article className='bg-[#FBFBFB] h-[272px] rounded-lg  '>
            <div className='mx-auto w-4/5 mt-7'>
              <div className='flex items-center justify-center '>
                {profilePicture ? (
                  <img
                    className='md:h-[96px] md:w-[96px] h-[70px] w-[70px]'
                    src={profilePicture}
                    alt='avatar'
                    loading='lazy'
                  />
                ) : (
                  <img
                    className='md:h-[96px] md:w-[96px] h-[70px] w-[70px]'
                    src={Avatar}
                    alt='avatar'
                    loading='lazy'
                  />
                )}
              </div>
              <p className='text-[24px] font-[600] my-3 text-center'>
                {fullName}
              </p>
              <div className='space-y-3'>
                <div className='flex justify-between font-[600]'>
                  <p className='text-lightGrey'>Matric No:</p>
                  <p>{matricNo}</p>
                </div>
                <div className='flex justify-between font-[600]'>
                  <p className='text-lightGrey'>Current Level:</p>
                  <p>{level}</p>
                </div>
              </div>
            </div>
          </article>
          <article className='col-span-3 '>
            <div className='flex flex-col mt-6 justify-center '>
              <div className='border-extraLightGrey border-b '>
                <ul className='flex text-xs md:w-5/6 w-full flex-wrap justify-between lg:text-base whitespace-nowrap space-x-2 '>
                  <li
                    onClick={() => {
                      setOpenTab(1);
                      setShow(false);
                    }}
                    className={` ${openTab === 1 && active} ${restofstyle}`}
                  >
                    Biodata
                  </li>
                  <li
                    // onClick={() => {
                    //   setOpenTab(2);
                    //   setShow(false);
                    // }}
                    className={` ${openTab === 2 && active} ${restofstyle}`}
                  >
                    Notification
                  </li>
                  <li
                    // onClick={() => {
                    //   setOpenTab(3);
                    //   setShow(false);
                    // }}
                    className={` ${openTab === 3 && active} ${restofstyle}`}
                  >
                    Show CGPA
                  </li>
                  <li
                    // onClick={() => {
                    //   setOpenTab(4);
                    //   setShow(false);
                    // }}
                    className={` ${openTab === 4 && active} ${restofstyle}`}
                  >
                    Security
                  </li>
                  <li
                    // onClick={() => {
                    //   setOpenTab(5);
                    //   setShow(false);
                    // }}
                    className={` ${openTab === 5 && active} ${restofstyle}`}
                  >
                    Help Center
                  </li>
                  <li
                    onClick={() => {
                      setOpenTab(6);
                      setShow(false);
                    }}
                    className={` ${openTab === 6 && active} ${restofstyle}`}
                  >
                    Change Password
                  </li>
                </ul>
              </div>
              <div className='lg:w-5/6 w-full p-2'>
                <div className={openTab === 1 ? 'block' : 'hidden'}>
                  <Biodata />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'}>
                  <Notification />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'}>
                  <ShowCGPA setOpenTab={setOpenTab} openTab={openTab} />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'}>
                  <Security />
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'}>
                  <HelpCenter />
                </div>
                <div className={openTab === 6 ? 'block' : 'hidden'}>
                  <ResetPassword />
                </div>
              </div>
            </div>
          </article>
        </section>
      </Container>
    </MainContainer>
  );
};

export default Settings;
