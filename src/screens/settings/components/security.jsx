import React, { useState } from 'react';
import { useGlobalContext } from '../../../context/globalContext';
import CustomButton from '../../../shared/custom-button';
import { CustomPasswordInput } from '../../../shared/custom-input';
import { toast } from 'react-toastify';
import { toastData } from '../../../shared/shared';
import { RESET_PASSWORD } from '../../../services/api-url';
import { posthttp } from '../../../services/actions';

const Security = () => {
  const { show, setShow } = useGlobalContext();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState('');
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setLoading(true);
        const payload = {
          password: confirmPassword,
        };
        const { data } = await posthttp(RESET_PASSWORD, payload);

        if (data && data.isSuccessful === true) {
          toast.success(data.message, toastData);
          setLoading(false);
        } else {
          toast.error(data.data, toastData);
          setLoading(false);
        }
        setLoading(true);
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.warning('Password does not match', toastData);
      }
    } else {
      toast.warning('Enter Password', toastData);
    }
    setLoading(true);
  };
  return (
    <>
      {show ? (
        <>
          <div className='my-10'>
            <p className='text-[18px] '>Password reset</p>
            <div className=''>
              <CustomPasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                placeholder={'New Password'}
              />
              <CustomPasswordInput
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value.trim())}
                placeholder={'Confirm Password'}
              />
            </div>
            <div className='flex  justify-end gap-6'>
              {/* <CustomButton
                padding=" py-2 "
                title={"Cancel"}
                onClick={() => setShow(false)}
                buttonStyle={
                  "bg-sidebarOrange w-[80px]   text-base_range font-[600] text-[14px] rounded-md"
                }
              /> */}
              <button
                onClick={() => setShow(false)}
                className='bg-sidebarOrange w-[80px] py-2  text-base_range font-[600] text-[14px] rounded-lg'
              >
                Cancel
              </button>
              <CustomButton
                padding=' py-2 '
                title={'Save'}
                disabled={loading}
                onClick={(e) => handlePasswordReset(e)}
                borderRadius={'8px'}
                buttonStyle={
                  'bg-base_range w-[80px] text-customWhite font-[600] text-[14px] rounded-md'
                }
              />
            </div>
          </div>
        </>
      ) : (
        <div className='flex justify-between my-10'>
          <div className='w-2/3 4/5'>
            <p className='text-[18px]'>Password</p>
            <p className='text-[14px] text-lightGrey'>
              Change you account password
            </p>
          </div>
          <div className='flex  items-center '>
            <CustomButton
              padding='px-5 py-2 '
              borderRadius={'8px'}
              smallButton={true}
              onClick={() => setShow(true)}
              title={'Change'}
              buttonStyle={'bg-base_range white text-[14px] rounded-md'}
            />
          </div>
        </div>
      )}
      {/* <div className='flex justify-between  my-10'>
        <div className='w-2/3'>
          <p className='text-[18px]'>Two-step Verification</p>
          <p className='text-[14px] text-lightGrey'>
            Two-step verification gives you additional security by requiring a
            verification code whenever you sign in on a new device.
          </p>
        </div>
        <div className='flex  items-center'>
          <CustomButton
            padding='px-5 py-2 '
            title={'Turn On'}
            borderRadius={'8px'}
            buttonStyle={'bg-base_range white text-[14px] rounded-md'}
          />
        </div>
      </div> */}
    </>
  );
};

export default Security;
