import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CompanyLogo from '../../asssets/images/Logo.svg';
import { useGlobalContext } from '../../context/globalContext';
import { posthttp } from '../../services/actions';
import { AUTH } from '../../services/api-url';
import CustomButton from '../../shared/custom-button';
import {
  CustomPasswordInput,
  CustomTextInput,
} from '../../shared/custom-input';
import { saveJsonItemToLocalStorage } from '../../shared/helper-functions/save-data';

import { toastData } from '../../shared/shared';
import ForgetPasword from '../reset-password/forget-pasword';
import ResetPasword from '../reset-password/reset-password';
import { Success } from '../reset-password/response';
import VerifyPasword from '../reset-password/verify-password';
import useModal from '../../hooks/modalCustomHook';

export const LoginForm = () => {
  const { loading, setLoading } = useGlobalContext();
  // const { isOpen, openModal, closeModal } = useModal();
  const { ModalWrapper, openModal, closeModal } = useModal();
  let navigate = useNavigate();

  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  const [toggleModal, setToggleModal] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      username: value,
      password: password,
    };
    if (value && password) {
      setLoading(true);
      const data = await posthttp(AUTH, payload);

      if (data && data.status === 200) {
        saveJsonItemToLocalStorage('token-details', data.data.token);
        saveJsonItemToLocalStorage('user-details', data.data.data);
        setLoading(false);
        navigate('/dashboard');
      } else {
        toast.error(data.data, toastData);
        setLoading(false);
      }
    } else {
      toast.warning('Enter Matric Number and Password', toastData);
    }
  };

  return (
    <>
      <div className='flex mt-16 xl:mt-0  flex-1 flex-col  justify-center lg:items-start items-center ml-0  xl:ml-32 relative'>
        <div className='lg:hidden  flex h-[15%] relative -top-[50px] items-center justify-center bg-dark_range w-full mb-6 -mt-4   px-4 space-x-3'>
          <div className=' w-12 h-14 flex items-center'>
            <img src={CompanyLogo} alt='company-logo' loading='lazy' />
          </div>
          <span className='font-bold mt-6 text-base_range text-2xl'>LODLC</span>
        </div>
        <div className='flex  flex-1 flex-col  xl:justify-center w-full px-4 lg:px-8 xl:px-0 lg:max-w-lg'>
          <div className='flex flex-col space-y-4 mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>Login</h2>
            <p className='text-lightGrey text-md md:text-xl text-green-100'>
              Login to access lectures and account information
            </p>
          </div>
          <form>
            <CustomTextInput
              label={'Matric No'}
              value={value}
              textColor={'mb-3'}
              onChange={(e) => setValue(e.target.value.trim())}
              placeholder={'Lodlc123456'}
            />
            <CustomPasswordInput
              label={'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              placeholder={'damilare123'}
            />

            <p
              // onClick={() => {
              //   openModal();
              //   setToggleModal('forget-password');
              // }}
              className='font-semibold text-base_range  float-right mb-20 cursor-pointer'
            >
              Forgot Password?
            </p>
            <CustomButton
              title={'Login'}
              loading={loading}
              onClick={(e) => handleLogin(e)}
              buttonStyle='bg-base_range white w-full text-xl py-4 font-semibold'
            />
          </form>
        </div>
      </div>
      <ModalWrapper>
        {toggleModal === 'forget-password' ? (
          <ForgetPasword
            value={value}
            setValue={setValue}
            setToggleModal={setToggleModal}
          />
        ) : null}
        {toggleModal === 'verification' ? (
          <VerifyPasword setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'reset-password' ? (
          <ResetPasword setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'success' ? (
          <Success
            onClick={() => closeModal()}
            setToggleModal={setToggleModal}
            title={'Password Reset Successful'}
            buttonText={'Login'}
            paragraph={'Congratulations, your password reset was successful!'}
          />
        ) : null}
      </ModalWrapper>
    </>
  );
};
