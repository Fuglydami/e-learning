import React from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from '../../../asssets/images/payment.svg';
import CustomButton from '../../../shared/custom-button';

const EmptyDispute = () => {
  let navigate = useNavigate();
  return (
    <div className='my-20  space-y-12 w-full mx-auto  text-center lg:mb-8 mb-0'>
      <div>
        <div className='flex justify-center mb-5'>
          <img src={Payment} alt='no-course-illustration' />
        </div>
        <h3 className='font-quicksand font-[700] text-[20px] space-x-2'>
          No Dispute yet.
        </h3>
        <p className='font-[400]  text-lightGrey'>
          You have not reported any dispute.
        </p>
      </div>
      <CustomButton
        borderRadius={'8px'}
        buttonStyle={'bg-base_range white text-[14px]'}
        title={'Create Payment Dispute'}
        onClick={() => {
          navigate('/dispute-payment/create-dispute');
        }}
      />
    </div>
  );
};

export default EmptyDispute;
