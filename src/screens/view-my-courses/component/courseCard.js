import React from 'react';

const CourseCard = ({ item }) => {
  const {
    image,
    lecturer,
    title,
    code,
    unit,
    totalLesson,
    lessonCompleted,
    progressBar,
  } = item;
  //   console.log(JSON.parse(progressBar), "pre");

  return (
    <div className='bg-customWhite rounded-t-lg shadow-xl cursor-pointer   rounded-lg'>
      <picture>
        <img
          className='h-[198px] object-cover   rounded-t-xl w-full'
          src={image}
          alt=''
        />
      </picture>

      <div className='p-5'>
        <div className='relative w-full lg:pr-4 mb-7 pr-0 max-w-full flex-grow flex-1 '>
          <div className='leading-tight'>
            <div className='flex  items-baseline'>
              <h5 className='  font-[600]'>{code}</h5>
            </div>
            <h5 className=' font-[600] '>{title}</h5>
          </div>
          <span className='font-[400] text-[14px]  text-[#151812]'>
            {lecturer} - {unit}
          </span>
        </div>
        <div className='flex mb-2 justify-between'>
          <p className='text-[12px] text-[#0D5E37] font-[700]'>{totalLesson}</p>
          <p className='text-[12px] text-[#898D88] font-[500]'>
            {lessonCompleted}
          </p>
        </div>

        <div className='animated-progress mb-7 progress-blue bg-[#FAF8F7]'>
          <span
            style={{ padding: `0 ${progressBar} 0 0` }}
            className={`bg-[#C85100] rounded-[40px] `}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
