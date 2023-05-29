import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalContext';
import { activeStyle, activeStyleSubmenu } from '../../shared/shared';
import { getJsonItemFromLocalStorage } from '../../shared/helper-functions/save-data';

const Tab = ({ item }) => {
  let userDetails = getJsonItemFromLocalStorage('user-details');
  const { setShowSidebar } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const handleClick = () => {
    if (item.subtab) {
      setIsOpen(!isOpen);
    } else {
      setShowSidebar(false);
    }
  };

  const getLink = (title) => {
    if (title === 'My Payments') {
      return `${userDetails?.matricNo}/${userDetails?.level}`;
    } else if (title === 'Technology Fee') {
      return `${userDetails?.matricNo}`;
    } else {
      return `${userDetails?.matricNo}`;
    }
  };
  // const isActive =
  //   location.pathname.startsWith(item.link) ||
  //   (item.subtab &&
  //     item.subtab.filter((i) => i.link === location.pathname).length > 0);

  const isActive =
    location.pathname.startsWith(item.link) ||
    (item.subtab &&
      item.subtab.some((i) => location.pathname.startsWith(i.link)));
  return (
    <>
      <NavLink
        to={item.link}
        style={isActive ? activeStyle : null}
        onClick={handleClick}
      >
        <button className='flex items-center w-full justify-between p-2'>
          <div className='flex items-center space-x-3'>
            <span>{item.icon}</span>
            <span className={''}>{item.title}</span>
          </div>
          {item.subtab && (
            <div>{isOpen ? item.subtabIconup : item.subtabIcondown}</div>
          )}
        </button>
      </NavLink>
      {isOpen && item.subtab && (
        <div className={`cursor-pointer bg-customWhite`}>
          {item.subtab.map((i, index) => {
            const key = `${i.subtab}-${index}`;
            console.log(item, 'item');

            return (
              <>
                {item.title === 'Payments Panel' ? (
                  <li
                    className={`pt-3 nav-sub-link  text-[14px] font-[400] flex mx-auto gap-[15px] space-y-4 space-x-2 text-[#525354] pl-4 ${i.tabstyle}`}
                  >
                    <a
                      target='_blank'
                      without
                      rel='noreferrer'
                      href={i.link + getLink(i.subtab)}
                    >
                      &#x2022; &nbsp; &nbsp;
                      {i.subtab}
                    </a>
                  </li>
                ) : (
                  <NavLink
                    key={key}
                    to={i.link}
                    style={
                      location.pathname === i.link ? activeStyleSubmenu : null
                    }
                    onClick={() => setShowSidebar(false)}
                    className='nav-sub-link text-[14px] font-[400] flex mx-auto gap-[15px] space-y-4 space-x-2 text-[#525354] pl-4'
                  >
                    <li className={`mt-3 ${i.tabstyle}`}>{i.subtab}</li>
                  </NavLink>
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Tab;
