import React from 'react';
import Corousel from './corousel';
import { LoginForm } from './loginForm';

const LoginScreen = () => {
  return (
    <main className='text-mulish'>
      <div className='flex container  xl:h-screen'>
        <div className='flex flex-row w-full'>
          <Corousel />
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
