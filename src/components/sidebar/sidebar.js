import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from '../../asssets/icons/logout.svg';
import CompanyLogo from '../../asssets/images/Logo.svg';
import { useGlobalContext } from '../../context/globalContext';
import { navItem } from '../../misc/data';
// import { navItem } from '../../misc/data';
import { clearLocalStorage } from '../../shared/helper-functions/save-data';
import Tab from './tabs';
// import Tab from './tabs';

const Sidebar = () => {
  const { setShowSidebar, showSidebar } = useGlobalContext();
  let navigate = useNavigate();

  const [navigation, setNativation] = useState('');
  const [tab, setTab] = useState('');
  const location = useLocation();

  const [show, setShow] = useState(true);

  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const pathnames = ['/dashboard/course', '/dashboard'];

  const getTitle = (title, subtab) => {
    setNativation(title);
    setTab(subtab);

    // if (title === "Dashboard") {
    //   navigate("/dashboard");
    // } else if (title === "Course") {
    //   navigate("/dashboard/course");
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`lg:flex ${
          showSidebar
            ? 'flex animate-in py-5 slide-in-from-left-48 '
            : 'hidden '
        } flex-col h-screen fixed z-40 py-10  bg-[#FFF1E7] shadow lg:w-[240px] w-[98%] `}
      >
        <div className='space-y-3'>
          <div className='flex lg:mb-10 mb-6  items-center lg:justify-start justify-between space-x-3 px-6'>
            <div className='w-12 h-14 flex items-center'>
              <img src={CompanyLogo} alt='company-logo' loading='lazy' />
            </div>
            <div
              className='lg:hidden block'
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <MdOutlineClose className='text-[35px] text-lightGrey' />
            </div>
            <span className='font-bold text-base_range text-[24px] lg:flex hidden'>
              LODLC
            </span>
          </div>

          <div className='flex-1'>
            <nav className='lg:pt-0 pt-2 pb-4 space-y-2 text-sm'>
              {navItem.map((item, index) => {
                return (
                  <div key={index} className='ml-4 pl-2 rounded-sm '>
                    <Tab item={item} key={`${item.title}`} />
                  </div>
                );
              })}

              <nav
                // onClick={() => navigate("/")}
                className='rounded-sm absolute bottom-16 ml-4 pl-2'
              >
                <div
                  onClick={() => {
                    clearLocalStorage();
                    navigate('/');
                  }}
                  className='flex cursor-pointer items-center p-2 space-x-3 rounded-md'
                >
                  <img loading='lazy' src={Logout} alt='icon' />
                  <span className=' font-medium text-[#525354]'>Logout</span>
                </div>
              </nav>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
