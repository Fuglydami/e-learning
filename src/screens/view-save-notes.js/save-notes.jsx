import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Course1 from '../../asssets/images/course1.jpg';
import Course2 from '../../asssets/images/course2.jpg';
import { Container, MainContainer, Title } from '../../misc/component-wrapper';
import CustomButton from '../../shared/custom-button';
import { CustomSelectInput } from '../../shared/custom-input';

const SaveNotes = () => {
  const data = [
    {
      time: '17:35 - 17:41',
      title: 'SOC 212: Social Change I',
      desc: 'administration, domestic politics and government (often studied ',
      image: Course1,
      icon: <RiDeleteBin5Line />,
    },
    {
      time: '17:35 - 17:41',
      title: 'GNS 202: Introduction to Nigerian Culture',
      desc: 'administration, domestic politics and government (often studied ',
      image: Course2,
      icon: <RiDeleteBin5Line />,
    },
  ];
  return (
    <MainContainer>
      <Container>
        <Title title={'Saved Notes'} />
        <div className='w-full md:w-[464px]'>
          <CustomSelectInput placeholder={'All Notes'} />
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              className='flex md:flex-row flex-col justify-between md:gap-12 md:my-6 my-4 gap-2'
            >
              <div className=' flex md:flex-row flex-col items-center md:space-x-8 space-x-0 cursor-pointer'>
                <img
                  src={item.image}
                  loading='lazy'
                  alt='course-img'
                  className='md:w-[232px] object-cover w-full rounded-tr-xl rounded-tl-xl h-[147px]'
                />

                <div className='md:p-0 p-3'>
                  <p className='font-[700] text-[24px] mb-5 leading-[28px]'>
                    {item.title}
                  </p>
                  <p className='font-[600] text-[14px] text-lightGrey'>
                    {item.time}
                  </p>
                  <p className='font-[300] text-[18px] '>{item.desc}</p>
                </div>
              </div>
              <div className='flex md:p-0 p-3 items-center'>
                <CustomButton
                  icon={item.icon}
                  borderRadius={'8px'}
                  title={'Delete'}
                  buttonStyle='bg-base_range white  w-full text-[15px]  py-3 rounded-md w-[102px] '
                />
              </div>
            </div>
          );
        })}
      </Container>
    </MainContainer>
  );
};

export default SaveNotes;
