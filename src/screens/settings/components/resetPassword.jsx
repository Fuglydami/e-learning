import React from 'react';
import { RESET_PASSWORD } from '../../../services/api-url';
import { posthttp } from '../../../services/actions';
import { toastData } from '../../../shared/shared';
import { toast } from 'react-toastify';
import { CustomPasswordInput } from '../../../shared/custom-input';
import CustomButton from '../../../shared/custom-button';
import { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState('');
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        // setLoading(true);
        const payload = {
          password: confirmPassword,
        };
        const { data } = await posthttp(RESET_PASSWORD, payload);

        if (data && data.isSuccessful === true) {
          toast.success(data.message, toastData);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } else {
        toast.warning('Password does not match', toastData);
      }
    } else {
      toast.warning('Enter Password', toastData);
    }
    setLoading(false);
  };
  return (
    <div>
      <form>
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

        <CustomButton
          title={'Save'}
          disabled={loading}
          loading={loading}
          onClick={(e) => handlePasswordReset(e)}
          buttonStyle='bg-base_range white w-full text-xl py-4 font-semibold'
        />
      </form>
    </div>
  );
};

export default ResetPassword;
