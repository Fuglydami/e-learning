import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../asssets/icons/navigate.svg';
import Course1 from '../../asssets/images/course1.jpg';
import Course2 from '../../asssets/images/course2.jpg';
import Course3 from '../../asssets/images/course3.jpg';
import Course4 from '../../asssets/images/course4.jpg';
import { SectionContainer, Title } from '../../misc/component-wrapper';
import { saveToLocalStorage } from '../../shared/helper-functions/save-data';
import ClassList from './component/classList';
import CourseCard from './component/courseCard';
import OnGoingCourse from './component/onGoingCourse';

const ViewMyCoursesScreen = () => {
  const navigate = useNavigate();
  const courseData = [
    {
      id: 1,
      image: Course1,
      code: 'POL 202:',
      title: 'Introduction to Political Science',
      lecturer: 'Dr. Adegboola Oguniyi',
      unit: '3 units',
      totalLesson: '21 lessons',
      lessonCompleted: '15 lessons',
      progressBar: '60%',
    },
    {
      id: 2,
      image: Course2,
      code: 'POL 205:',
      title: 'Community Mental Health Studies',
      lecturer: 'Dr. Taiwo Olamiposi',
      unit: '2 units',
      totalLesson: '25 lessons',
      lessonCompleted: '6 lessons',
      progressBar: '80%',
    },
    {
      id: 3,
      image: Course3,
      code: 'GNS 202:',
      title: 'Introduction to Nigeria Culture',
      lecturer: 'Dr. Smith Williams ',
      unit: '2 Units',
      totalLesson: '19 lessons',
      lessonCompleted: '13 lessons',
      progressBar: '50%',
    },
    {
      id: 4,
      image: Course4,
      code: 'SOC 212:',
      title: 'Social Change I',
      lecturer: 'Dr. Kabir Bala',
      unit: '2 units',
      totalLesson: '16 lessons',
      lessonCompleted: '14 lessons',
      progressBar: '50%',
    },
  ];
  return (
    <div className='flex lg:ml-10 ml-0 gap lg:flex-nowrap flex-wrap lg:gap-6 gap-0'>
      <div className='flex flex-col mb-6 w-full'>
        <SectionContainer>
          <div className='flex justify-between items-center font-Quicksand px-2 lg:px-0 my-6'>
            <h3 className='font-[700] lg:text-[20px] text-md'>
              Ongoing Courses
            </h3>
            <div className='flex justify-center space-x-3 cursor-pointer'>
              <p className='font-[700] lg:text-[14px] text-[12px] text-base_range'>
                All Courses
              </p>
              <div className='flex justify-center items-center'>
                <img
                  className='w-2 h-2 '
                  src={Navigate}
                  alt='navigate'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
          <OnGoingCourse />
          {/* <NoCourse /> */}
          <Title show={true} title={'Registered Courses'} />
          <div className='grid gap-10  lg:grid-cols-2 grid-col-1'>
            {courseData.map((item, index) => {
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    saveToLocalStorage('courseDetails', JSON.stringify(item));
                    navigate(`/my-learning/${item.title}`);
                  }}
                >
                  <CourseCard key={index} item={item} />
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </div>

      <div className='lg:w-4/12 rounded-xl   w-full bg-[#FFFFFF]'>
        <ClassList />
      </div>
    </div>
  );
};

export default ViewMyCoursesScreen;
