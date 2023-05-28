import React from 'react';
import { getJsonItemFromLocalStorage } from '../../shared/helper-functions/save-data';

const StudentDetails = () => {
  const columnClass = 'w-full  grid grid-cols-2  text-[15px] font-[400]';
  const descClass = 'font-[700] text-[13px]';
  const userDetails = getJsonItemFromLocalStorage('user-details');

  const { fullName, level, faculty, matricNo, session, department } =
    userDetails;
  return (
    <section className='  lg:mb-10 mb-4'>
      <div className='lg:p-6 space-y-2 p-4 bg-sidebarOrange rounded-md'>
        <h1 className='font-bold text-xl mb-3'>NOTE</h1>
        <div className='flex gap-3 lg:flex-row flex-col mb-4 lg:mb-0'>
          <div className={columnClass}>
            Name:
            <span className={descClass}>{fullName}</span>
          </div>
          <div className={columnClass}>
            Faculty:
            <span className={descClass}>{faculty}</span>
          </div>
        </div>
        <hr />
        <div className='flex gap-3 lg:flex-row flex-col'>
          <div className={columnClass}>
            Level: <span className={descClass}>{level}</span>
          </div>
          <div className={columnClass}>
            Session: <span className={descClass}>{session}</span>
          </div>
        </div>
        <hr />
        <div className='flex gap-3 lg:flex-row flex-col'>
          <div className={columnClass}>
            Department: <span className={descClass}>{department}</span>
          </div>
          <div className={columnClass}>
            Matric No: <span className={descClass}>{matricNo}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDetails;
