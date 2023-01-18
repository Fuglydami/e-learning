import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalContext';
import { navItem } from '../../misc/data';

const Tab = ({ item }) => {
  const { setShowSidebar, showSidebar, setHideNavbar } = useGlobalContext();
  let activeStyle = {
    backgroundColor: '#ffffff',
    color: '#C85100',
    borderRight: '4px solid #C85100',
    display: 'flex',
  };
  let activeStyleSubmenu = {
    color: '#C85100',
  };
  let inactiveStyle = {
    backgroundColor: 'inherit',
    color: 'black',
  };

  const checkToggleState = () => {
    if (
      item.title === 'My learning' ||
      item.title === 'Course' ||
      item.title === 'Payment'
    ) {
      return inactiveStyle;
    } else {
      return activeStyle;
    }
  };
  const [showNav, setShowNav] = useState(false);
  const handleNav = (data) => {
    if (
      item.title === 'My learning' ||
      item.title === 'Course' ||
      item.title === 'Payment'
    ) {
      const filteredData = navItem.filter((arr) => arr.id === data.id);
      // setShowNav((showNav) => filteredData.id === data.id && !showNav);

      setShowNav((showNav) => !showNav);
    } else {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <NavLink
        key={item.id}
        exact={false}
        to={item.link}
        style={({ isActive }) => {
          if (isActive) {
            return checkToggleState();
          }
        }}
      >
        <button
          onClick={() => {
            handleNav(item);
          }}
          className='flex items-center w-full  justify-between p-2'
        >
          <div className='flex items-center space-x-3 '>
            <span>{item.icon}</span>
            <span className={''}>{item.title}</span>
          </div>
          <div>{showNav ? item.subtabIconup : item.subtabIcondown}</div>
        </button>
      </NavLink>
      {showNav && (
        <div
          onClick={() => setShowNav(true)}
          className={`cursor-pointer  bg-customWhite`}
        >
          {item.subtab &&
            item.subtab.map((i, index) => {
              const key = `${i.subtab}-${index}`;
              return (
                <NavLink
                  key={key}
                  to={i.link}
                  style={({ isActive }) => {
                    if (isActive) {
                      return activeStyleSubmenu;
                    }
                  }}
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  className='nav-sub-link text-[14px] font-[400] flex mx-auto  gap-[15px] space-y-4 space-x-2 text-[#525354]  pl-4'
                >
                  <li className={`mt-3 ${i.tabstyle}`}>{i.subtab}</li>
                </NavLink>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Tab;
