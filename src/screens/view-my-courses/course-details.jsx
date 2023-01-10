import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainContainer } from '../../misc/component-wrapper';
import Breadcumb from '../../shared/breadcumb';
import CustomButton from '../../shared/custom-button';
import { getJsonItemFromLocalStorage } from '../../shared/helper-functions/save-data';
import CourseTab from './component/courseTab';

const CourseDetails = () => {
  let navigate = useNavigate();
  const item = getJsonItemFromLocalStorage('courseDetails');

  return (
    <MainContainer>
      <Container>
        <Breadcumb
          link={'/my-learning'}
          page1={'All Courses'}
          page2={'Course details'}
        />
        <section className='grid lg:grid-cols-4  grid-cols-1 lg:gap-8 gap-0 md:my-6 my-2'>
          <article>
            <div className='round-lg mb-4'>
              <img
                className='h-[336px] bg-cover rounded-t-xl w-full'
                src={item.image}
                alt=''
              />
            </div>
            <div className='font-[700] text-[24px]'>
              <h1>{item.code}</h1>
              <h1>{item.title}</h1>
            </div>
            <p className='font-[600] mb-6 text-lightGrey'>
              {item.lecturer} - {item.unit}
            </p>
            <div className='flex mb-2 justify-between'>
              <p className='text-[12px] text-[#0D5E37] font-[700]'>
                {item.totalLesson}
              </p>
              <p className='text-[12px] text-[#898D88] font-[500]'>
                {item.lessonCompleted}
              </p>
            </div>
            <div className='animated-progress mb-16 progress-blue bg-[#FAF8F7]'>
              <span
                style={{ padding: `0 ${item.progressBar} 0 0` }}
                className={`bg-[#C85100] rounded-[40px] `}
              ></span>
            </div>
            <CustomButton
              title={'Join class'}
              onClick={() => navigate(`/my-learning/class/${item.title}`)}
              buttonStyle={'bg-base_range white w-full'}
            />
          </article>
          <article className='col-span-3'>
            <CourseTab />
          </article>
        </section>
      </Container>
    </MainContainer>
  );
};

export default CourseDetails;
