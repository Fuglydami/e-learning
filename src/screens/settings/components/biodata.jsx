import React, { useState } from 'react';

import { active, restofstyle } from '../../../shared/shared';
import { getJsonItemFromLocalStorage } from '../../../shared/helper-functions/save-data';

const Biodata = () => {
  const userDetails = getJsonItemFromLocalStorage('user-details');
  const {
    fullName,
    address,
    department,
    email,
    faculty,
    gender,
    level,
    matricNo,
    phoneNumber,
    programme,
    dob,
    lga,
    nxtFullName,
    stateOfOrigin,
    nxtPhoneNo,
    nxtRelationship,
    nxtEmail,
  } = userDetails;

  const details = [
    { title: 'Full name', desc: fullName },
    { title: 'Matric No', desc: matricNo },
    { title: 'Programme', desc: programme },
    { title: 'Level', desc: level },
    // { title: 'Session', desc: '2022/2023' },
    { title: 'Faculty', desc: faculty },
    { title: 'Department', desc: department },
    { title: 'Sex', desc: gender },
    { title: 'Email', desc: email },
    { title: 'Phone No', desc: phoneNumber },
    {
      title: 'Home Address',
      desc: address,
    },
    // { title: 'Mode of Entry', desc: 'UTME' },
    // { title: 'Student Status', desc: 'Returning Student' },
    { title: 'Date of Birth', desc: dob },
    { title: 'State of Origin', desc: stateOfOrigin },
    { title: 'L.G.A', desc: lga },
  ];
  const nextOfKinDetails = [
    { title: 'Full name', desc: nxtFullName },

    { title: 'Relationship', desc: nxtRelationship },
    { title: 'Phone No', desc: nxtPhoneNo },
    { title: 'Email', desc: nxtEmail },
    // {
    //   title: 'Home Address',
    //   desc: '14, taye-solarin street, off total fueling station, Ikeja, Lagos',
    // },
  ];
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className='flex flex-col mt-6 justify-center '>
      <div className=' md:w-[300px]  w-full border-extraLightGrey border-b mb-8'>
        <ul className='flex   flex-wrap  lg:text-base whitespace-nowrap space-x-2 '>
          <li
            onClick={() => {
              setOpenTab(1);
            }}
            className={` ${openTab === 1 && active} ${restofstyle}`}
          >
            Your Details
          </li>
          <li
            onClick={() => {
              setOpenTab(2);
            }}
            className={` ${openTab === 2 && active} ${restofstyle}`}
          >
            Next of Kin Details
          </li>
        </ul>
      </div>
      <div className='w-full '>
        <div className={openTab === 1 ? 'block' : 'hidden'}>
          {details.map((item) => {
            return (
              <div
                key={item.title}
                className='grid font-[600] grid-cols-4 md:gap-0  md:pb-8 pb-5'
              >
                <p className='text-lightGrey '>{item.title}</p>
                <p className='col-span-3 md:ml-0 ml-12'>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={openTab === 2 ? 'block' : 'hidden'}>
          {nextOfKinDetails.map((item) => {
            return (
              <div
                key={item.title}
                className='grid font-[600] grid-cols-4 md:pb-8 pb-5'
              >
                <p className='text-lightGrey'>{item.title}</p>
                <p className='col-span-3 md:ml-0 ml-12'>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Biodata;
